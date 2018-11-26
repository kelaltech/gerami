import React, { Component, HTMLAttributes } from 'react'
import { Warning } from '../Warning/Warning.js'

export interface ILoadingProps extends HTMLAttributes<HTMLDivElement> {
  error?: string
  pastDelay?: number | boolean
  problem?: { code: number; message: string } | string
  timedOut?: number
  isLoading?: boolean
  delay?: boolean | number
}

interface ILoadingState {
  pastCustomDelay?: any
}

export class Loading extends Component<ILoadingProps, ILoadingState> {
  state = {
    pastCustomDelay: !!this.props.delay ? !this.props.delay : true
  }

  dead: any = null

  constructor(props: any) {
    super(props)

    if (props.delay)
      setTimeout(
        () => {
          !(this.dead === false) || this.setState({ pastCustomDelay: true })
        },
        typeof props.delay === 'number' ? props.delay : 200
      )
  }

  componentDidMount() {
    this.dead = false
  }

  componentWillUnmount() {
    this.dead = true
  }

  render() {
    const { className, error, pastDelay, problem, timedOut, ...rest } = this.props

    if (rest) {
      delete rest.delay
      delete rest.isLoading
    }

    return problem ? (
      <Warning {...rest as any} className={className}>
        <div className={'bold padding-bottom-normal'}>Ohh, no! We have a problem.</div>
        <div>
          <span className={'italic'}>Code</span>:{' '}
          {(typeof problem != 'string' && problem.code) || '[N/A]'}
        </div>
        <div>
          <span className={'italic'}>Message</span>:{' '}
          {(typeof problem != 'string' && problem.message) ||
            (typeof problem === 'string' ? problem : '[N/A]')}
        </div>
      </Warning>
    ) : error ? (
      <Warning {...rest as any} className={className}>
        Sorry, an unexpected error occurred.&nbsp;&nbsp;&nbsp;&nbsp;:(
      </Warning>
    ) : timedOut ? (
      <Warning {...rest as any} className={className}>
        Sorry, the request timed out.&nbsp;&nbsp;&nbsp;&nbsp;:(
      </Warning>
    ) : pastDelay === false || !this.state.pastCustomDelay ? null : (
      <div {...rest as any} className={`gerami-loading${className ? ' ' + className : ''}`}>
        <svg className={'gerami-svg'} width={50} height={50}>
          <circle className="gerami-big-circle" cx={25} cy={25} r={18} strokeWidth={4} />
          <circle className="gerami-small-circle" cx={25} cy={8} r={4} strokeWidth={8} />
        </svg>
      </div>
    )
  }
}
