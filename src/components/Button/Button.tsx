import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  primary?: boolean
  to?: string
}

export interface IButtonState {}

export class Button extends Component<IButtonProps, IButtonState> {
  render() {
    const { children, className, primary, to, type, ...rest } = this.props

    const button = (
      <button
        {...rest as any}
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
