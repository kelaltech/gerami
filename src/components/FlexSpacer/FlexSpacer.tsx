import React, { Component, HTMLAttributes } from 'react'

export interface IFlexSpacerProps extends HTMLAttributes<HTMLDivElement> {}

interface IFlexSpacerState {}

/**
 * @deprecated Will be replaced by Flex.Space
 */
export class FlexSpacer extends Component<IFlexSpacerProps, IFlexSpacerState> {
  state = {}

  render() {
    const { className, ...rest } = this.props

    return <div className={`gerami-flex-spacer ${className || ''}`} {...rest as any} />
  }
}
