import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'

const sizeSpec = {
  XXS: 14,
  XS: 28,
  S: 42,
  M: 56,
  L: 70,
  XL: 84,
  XXL: 98,
  '3XL': 112,
  '4XL': 126,
  '5XL': 140,
  '6XL': 154,
  '7XL': 168,
  '8XL': 182,
  '9XL': 196
}

export interface props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  fontS?: 'italic'
  size?: geramiSizeTypes
}

export class Title extends Component<props, any> {
  render() {
    const { size, fontS, className, children } = this.props
    const header = size && (typeof size === 'string' ? sizeSpec[size] : size)
    const font = fontS && (typeof fontS === 'string' ? fontS : '')
    return (
      <div
        className={`gerami-title
        ${className ? ' ' + className : ''}  `}
        style={{ fontSize: header, fontStyle: font }}
      >
        {size ? '' : null}
        {fontS ? '' : null}
        {children}
      </div>
    )
  }
}
