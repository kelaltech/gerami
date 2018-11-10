import React, { ButtonHTMLAttributes, Component } from 'react'
import { Link } from 'react-router-dom'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  to?: string
}

interface IButtonState {}

export class Button extends Component<IButtonProps, IButtonState> {
  state = {}

  render() {
    const { children, className, primary, to, type, ...rest } = this.props

    const button = (
      <button
        {...rest as any}
        className={`gerami-button ${
          primary || (type && type.toLowerCase() === 'submit') ? 'gerami-button-primary' : ''
        }${className ? ' ' + className : ''}`}
        type={type || 'button'}
      >
        {children}
      </button>
    )

    return to ? <Link to={to}>{button}</Link> : button
  }
}
