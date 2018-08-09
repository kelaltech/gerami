import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../button/Button'

export const Anchor = ({ button, children, className, to, ...rest }) => {
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
