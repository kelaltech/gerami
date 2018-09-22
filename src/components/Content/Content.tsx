import React, { Component } from 'react'

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
  size?:
    | 'XXS'
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | '3XL'
    | '4XL'
    | '5XL'
    | '6XL'
    | '7XL'
    | '8XL'
    | '9XL'
    | number
}

export class Content extends Component<IContentProps> {
  render() {
    const { children, className, size, style, transparent, ...rest } = this.props

    let maxWidth
    if (size != undefined) {
      switch (typeof size) {
        case 'number':
          maxWidth = size
          break
        case 'string':
          maxWidth = sizeSpec[size.toString().toUpperCase()]
          break
      }
    }

    return (
      <div
        {...rest as any}
        className={`gerami-content ${(!transparent && 'gerami-content-card') || ''} ${className ||
          ''}`}
        style={Object.assign({ maxWidth: maxWidth }, style)}
      >
        {children}
      </div>
    )
  }
}
