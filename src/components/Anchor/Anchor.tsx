import React, { AnchorHTMLAttributes, Component } from 'react'
import { Link } from 'react-router-dom'
import { LocationDescriptor } from 'history'
import { Button } from '../Button/Button.js'

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  button?: boolean
  to?: LocationDescriptor
  replace?: boolean
  innerRef?: (node: HTMLAnchorElement | null) => void
}

interface IAnchorState {}

export class Anchor extends Component<IAnchorProps, IAnchorState> {
  state = {}

  render() {
    const { button, children, className, to, ...rest } = this.props
    const child = button ? <Button>{children}</Button> : children

    return to ? (
      <Link to={to} {...rest as any} className={`a ${className || ''}`}>
        {child}
      </Link>
    ) : (
      <a {...rest as any} className={`a ${className || ''}`}>
        {child}
      </a>
    )
  }
}
