import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'

const sizeSpec = {
  XXS: 140,
  XS: 280,
  S: 420,
  M: 560,
  L: 700,
  XL: 840,
  XXL: 980,
  '3XL': 1120,
  '4XL': 1260,
  '5XL': 1400,
  '6XL': 1540,
  '7XL': 1680,
  '8XL': 1820,
  '9XL': 1960
}

export interface props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  color?: string | 'green' | 'blue'
  size?: geramiSizeTypes
}

export class Title extends Component<props, any> {
  render() {
    const { size, color, className, children } = this.props
    const header = size && (typeof size === 'string' ? sizeSpec[size] : size)
    return (
      <div
        className={`gerami-title
        ${
          typeof color === 'string' && color.toLocaleLowerCase() === 'green'
            ? 'gerami-title-green'
            : ''
        }
        ${className ? ' ' + className : ''}  `}
        color={color}
        style={{ fontSize: header }}
      >
        {size ? '' : null}
        {children}
      </div>
    )
  }
}
