import React, { Component, HTMLAttributes } from 'react'

export interface IFlexSpacerProps extends HTMLAttributes<HTMLSpanElement> {}

interface IFlexSpacerState {}

/**
 * @deprecated Will be replaced by Flex.Space
 */
export class FlexSpacer extends Component<IFlexSpacerProps, IFlexSpacerState> {
  state = {}

  render() {
    const { className, ...rest } = this.props

    return <span className={`gerami-flex-spacer ${className}`} {...rest as any} />
  }
}
