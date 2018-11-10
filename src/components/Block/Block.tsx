import React, { Component, HTMLAttributes } from 'react'

export interface IBlockProps extends HTMLAttributes<HTMLDivElement> {
  first?: boolean
  last?: boolean
}

interface IBlockState {}

export class Block extends Component<IBlockProps, IBlockState> {
  state = {}

  render() {
    const { children, className, first, last, ...rest } = this.props

    return (
      <div
        style={{
          paddingTop: first ? 30 : 10,
          paddingBottom: last ? 30 : 10
        }}
        {...rest as any}
        className={`gerami-block ${className || ''}`}
      >
        {children}
      </div>
    )
  }
}
