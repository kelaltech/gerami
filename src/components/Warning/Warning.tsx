import React, { Component } from 'react'
import { Content, IContentProps } from '../Content/Content.js'
import { Block } from '../Block/Block.js'

interface IWarningProps extends IContentProps {
  className?: string
  problem?: { code: number; message: string } | string
  shy?: boolean | Function
  bomb?: boolean
  size?:
    | 'XXS'
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | '3XL'
    | '4XL'
    | '5XL'
    | '6XL'
    | '7XL'
    | '8XL'
    | '9XL'
    | number
}

export class Warning extends Component<IWarningProps> {
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
    !rest || delete rest.bomb

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
