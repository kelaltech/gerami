import React, { Component } from 'react'
import { Content, IContentProps } from '../Content/Content.js'
import { Block } from '../Block/Block.js'

export interface IWarningProps extends IContentProps {
  problem?: { code: number; message: string } | string
  shy?: boolean | Function
  bomb?: boolean
}

interface IWarningState {
  hidden: boolean
}

export class Warning extends Component<IWarningProps, IWarningState> {
  state = {
    hidden: false
  }

  dead = false

  constructor(props: any) {
    super(props)

    this.shyAway = this.shyAway.bind(this)
  }

  componentDidMount() {
    const { bomb } = this.props
    if (bomb) window.setTimeout(this.shyAway, typeof bomb === 'number' ? bomb : 7000)
  }

  componentWillUnmount() {
    this.dead = true
  }

  render() {
    const { children, className, problem, shy, ...rest } = this.props

    delete rest.bomb

    return this.dead || this.state.hidden ? null : (
      <Content
        title={shy ? 'Double click to hide Warning' : undefined}
        {...rest as any}
        className={`gerami-warning${className ? ' ' + className : ''}`}
        onDoubleClick={(e: any) => {
          this.shyAway()
          if (typeof rest.onClick === 'function' && typeof rest.onDoubleClick === 'function')
            rest.onClick(e)
        }}
      >
        <Block>
          {children ||
            (problem ? (
              <div className={'font-S center'}>
                {typeof problem !== 'string' && problem.code ? problem.code + ': ' : null}
                {(typeof problem !== 'string' && problem.message) ||
                  (typeof problem === 'string' ? problem : null)}
              </div>
            ) : null)}
        </Block>
      </Content>
    )
  }

  shyAway(): any {
    const { shy } = this.props

    if (shy && !this.dead) {
      this.setState({ hidden: true })
      if (typeof shy === 'function') shy()
    }
  }
}
