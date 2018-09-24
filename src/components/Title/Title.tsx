import React, { Component } from 'react'

interface props {
  className?: string
  color?: string | 'green' | 'blue'
  size?: string
}

export class Title extends Component<props, any> {
  render() {
    const { size, color, className, children } = this.props
    return (
      <div
        className={`gerami-title
        ${
          typeof color === 'string' && color.toLocaleLowerCase() === 'green'
            ? 'gerami-title-green'
            : ''
        }
        ${typeof size === 'string' && size.toLocaleLowerCase() === 's' ? 'gerami-title-small' : ''}
        ${typeof size === 'string' && size.toLocaleLowerCase() === 'm' ? 'gerami-title-medium' : ''}
        ${typeof size === 'string' && size.toLocaleLowerCase() === 'l' ? 'gerami-title-large' : ''}
        ${className ? ' ' + className : ''}  `}
        color={color}
      >
        {size ? '' : null}
        {children}
      </div>
    )
  }
}
