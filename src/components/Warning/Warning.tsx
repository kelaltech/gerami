import React, { Component } from 'react'
import { Content } from '../Content/Content'
import { Block } from '../Block/Block'

interface props {
  className?: string
  problem?: { code: number; message: string }
  shy?: boolean | Function
  bomb?: boolean
  size?: string | number
}

export class Warning extends Component<props> {
  private dead = false
  state = {
    hidden: false
  }
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
    //@ts-ignore
    !rest || delete rest.bomb

    return this.dead || this.state.hidden ? null : (
      <Content
        // @ts-ignore
        title={shy ? 'Double click to hide Warning' : undefined}
        {...rest}
        className={`gerami-warning${className ? ' ' + className : ''}`}
        onDoubleClick={(e: any) => {
          this.shyAway()
          //@ts-ignore
          if (typeof rest.onDoubleClick === 'function') rest.onClick(e)
        }}
      >
        <Block>
          {children ||
            (problem ? (
              <div className={'font-S center'}>
                {problem.code ? problem.code + ': ' : null}
                {problem.message || (typeof problem === 'string' ? problem : null)}
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
