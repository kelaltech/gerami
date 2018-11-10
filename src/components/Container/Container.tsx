import React, { Component, HTMLAttributes } from 'react'

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

interface IContainerState {}

/**
 * @deprecated Will be replaced by Page.Anti
 */
export class Container extends Component<IContainerProps, IContainerState> {
  state = {}

  render() {
    const { className, top, right, bottom, left, style } = this.props

    return (
      <div
        className={`gerami-container ${className || ''}`}
        style={Object.assign(
          {
            paddingTop: top,
            paddingRight: right,
            paddingBottom: bottom,
            paddingLeft: left
          },
          style
        )}
      >
        {this.props.children}
      </div>
    )
  }
}
