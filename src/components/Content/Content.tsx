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

export interface IContentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  transparent?: boolean
  size?: geramiSizeTypes
}

export class Content extends Component<IContentProps> {
  render() {
    const { children, className, size, style, transparent, ...rest } = this.props

    const maxWidth = size && (typeof size === 'string' ? sizeSpec[size] : size)

    return (
      <div
        {...rest as any}
        className={`gerami-content ${(!transparent && 'gerami-content-card') || ''} ${className ||
          ''}`}
        style={Object.assign({ maxWidth }, style)}
      >
        {children}
      </div>
    )
  }
}
