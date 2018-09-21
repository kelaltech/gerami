import React, { Component } from 'react'
import './Block.scss'

export class Block extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { children, className, first, last, ...rest } = this.props
    return (
      <div
        style={{
          paddingTop: first ? 30 : 10,
          paddingBottom: last ? 30 : 10
        }}
        {...rest}
        className={`gerami-block${className ? ' ' + className : ''}`}
      >
        {children}
      </div>
    )
  }
}
