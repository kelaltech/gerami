import React, { Component } from 'react'
import { Anchor, IAnchorProps } from '../Anchor/Anchor.js'

export interface IMenuItemProps extends IAnchorProps {}

interface IMenuItemState {}

export class MenuItem extends Component<IMenuItemProps, IMenuItemState> {
  state = {}

  render() {
    const { children, className, ...rest } = this.props

    return (
      <Anchor button {...rest} className={`gerami-menu-item ${className}`}>
        {children}
      </Anchor>
    )
  }
}
