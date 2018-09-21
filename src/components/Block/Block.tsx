import React, { Component } from 'react'

interface props {
  className?: string
  first?: boolean
  last?: boolean
}

export class Block extends Component<props> {
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
