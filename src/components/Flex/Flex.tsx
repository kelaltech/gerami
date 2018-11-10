import React, { Component, HTMLAttributes } from 'react'

export interface IFlexProps extends HTMLAttributes<HTMLDivElement> {}

interface IFlexState {}

export class Flex extends Component<IFlexProps, IFlexState> {
  state = {}

  render() {
    const { className, children } = this.props

    return <div className={`gerami-flex ${className || ''}`}>{children}</div>
  }
}
