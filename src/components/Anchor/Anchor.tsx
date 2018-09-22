import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button.js'

interface props {
  button?: boolean
  className?: string
  to?: string
}

export class Anchor extends Component<props, any> {
  render() {
    const { button, children, className, to, ...rest } = this.props
    const child = button ? <Button>{children}</Button> : children
    return typeof to === 'string' ? (
      <Link to={to} {...rest} className={`a${className ? ' ' + className : ''}`}>
        {child}
      </Link>
    ) : (
      <a {...rest} className={`a${className ? ' ' + className : ''}`}>
        {child}
      </a>
    )
  }
}
