import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../'

export class Anchor extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { button, children, className, to, ...rest } = this.props
    const child = button ? <Button>{children}</Button> : children
    return typeof to === 'string' ? (
      <Link
        to={to}
        {...rest}
        className={`a${className ? ' ' + className : ''}`}
      >
        {child}
      </Link>
    ) : (
      <a {...rest} className={`a${className ? ' ' + className : ''}`}>
        {child}
      </a>
    )
  }
}
