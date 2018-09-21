import React, { Component, ReactNode, ReactNodeArray } from 'react'

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

export interface IYogaProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  maxCol: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
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

export interface IYogaState {}

export class Yoga extends Component<IYogaProps, IYogaState> {
  render() {
    const { children, maxCol, size, style, ...rest } = this.props

    let content: ReactNode = <div className={`gerami-yoga-${maxCol}`}>{children}</div>

    if (Array.isArray(children)) {
      content = []
      for (const child of children) {
        ;(content as ReactNodeArray).push(<div className={`gerami-yoga-${maxCol}`}>{child}</div>)
      }
    }

    const maxWidth = size && (typeof size === 'string' ? sizeSpec[size] : size)

    return (
      <div
        {...rest as any}
        style={Object.assign({ marginLeft: 'auto', marginRight: 'auto', maxWidth }, style)}
      >
        {content}
      </div>
    )
  }
}
