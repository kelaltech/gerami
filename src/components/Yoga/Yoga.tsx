import React, { Component, HTMLAttributes, ReactNode, ReactNodeArray } from 'react'
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

export interface IYogaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of maximum items in a row (max number of columns).
   */
  maxCol: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  /**
   * Horizontal width (named 'geramiSizeTypes' or amount of pixels).
   */
  size?: geramiSizeTypes
}

interface IYogaState {}

/**
 * A responsive container that does not stretch its child elements to fill vacant spaces.
 */
export class Yoga extends Component<IYogaProps, IYogaState> {
  state = {}

  render() {
    const { children, className, maxCol, size, style, ...rest } = this.props

    let content: ReactNode = <div className={`gerami-yoga-${maxCol}`}>{children}</div>

    if (Array.isArray(children)) {
      content = []
      let i = 0
      for (const child of children) {
        ;(content as ReactNodeArray).push(
          <div key={i++} className={`gerami-yoga-${maxCol}`}>
            {child}
          </div>
        )
      }
    }

    const maxWidth = size && (typeof size === 'string' ? sizeSpec[size] : size)

    return (
      <div
        {...(rest as any)}
        className={`gerami-yoga ${className || ''}`}
        style={Object.assign({ maxWidth }, style)}
      >
        <div className={`gerami-yoga-anti-space`}>{content}</div>
      </div>
    )
  }
}
