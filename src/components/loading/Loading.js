import React, { Component } from 'react'

import './Loading.scss'
import { Warning } from '../warning/Warning'

export class Loading extends Component {
  dead = null

  constructor(props) {
    super(props)

    this.state = {
      pastCustomDelay: !!props.delay ? !props.delay : true
    }

    if (props.delay)
      setTimeout(() => {
        !(this.dead === false) || this.setState({ pastCustomDelay: true })
      }, typeof props.delay === 'number' ? props.delay : 200)
  }

  componentDidMount() {
    this.dead = false
  }

  componentWillUnmount() {
    this.dead = true
  }

  render() {
    const {
      className,
      error,
      pastDelay,
      problem,
      timedOut,
      ...rest
    } = this.props

    if (rest) {
      delete rest.delay
      delete rest.isLoading
    }

    return problem ? (
      <Warning {...rest} className={className}>
        <div className={'bold padding-bottom-normal'}>
          Ohh, no! We have a problem.
        </div>
        <div>
          <span className={'italic'}>Code</span>: {problem.code || '[N/A]'}
        </div>
        <div>
          <span className={'italic'}>Message</span>:{' '}
          {problem.message || (typeof problem === 'string' ? problem : '[N/A]')}
        </div>
      </Warning>
    ) : error ? (
      <Warning {...rest} className={className}>
        Sorry, an unexpected error occurred.&nbsp;&nbsp;&nbsp;&nbsp;:(
      </Warning>
    ) : timedOut ? (
      <Warning {...rest} className={className}>
        Sorry, the request timed out.&nbsp;&nbsp;&nbsp;&nbsp;:(
      </Warning>
    ) : pastDelay === false || !this.state.pastCustomDelay ? null : (
      <div {...rest} className={`loading${className ? ' ' + className : ''}`}>
        <svg className={'svg'} width={50} height={50}>
          <circle
            className="big-circle"
            cx={25}
            cy={25}
            r={18}
            strokeWidth={4}
          />
          <circle
            className="small-circle"
            cx={25}
            cy={8}
            r={4}
            strokeWidth={8}
          />
        </svg>
      </div>
    )
  }
}
