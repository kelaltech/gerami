import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

interface props {
  children: React.ReactNode
  className?: string
  primary?: boolean
  to?: string
  type?: string | 'button' | 'submit' | 'reset'
}
export class Button extends Component<props> {
  render() {
    const { children, className, primary, to, type, ...rest } = this.props
    const button = (
      <button
        {...rest}
        className={`gerami-button ${
          primary || (typeof type === 'string' && type.toLowerCase() === 'submit')
            ? 'gerami-Button-primary'
            : ''
        }${className ? ' ' + className : ''}`}
        type={type || 'button'}
      >
        {children}
      </button>
    )
    return to ? <Link to={to}>{button}</Link> : button
  }
}
