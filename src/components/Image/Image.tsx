import React, { Component } from 'react'
import './Image.scss'
import { Anchor } from '../Anchor/Anchor'

const sizeSpec = {
  XXS: 14,
  XS: 28,
  S: 42,
  M: 56,
  L: 70,
  XL: 84,
  XXL: 98,
  X3L: 112,
  X4L: 126,
  X5L: 140,
  X6L: 154,
  X7L: 168,
  X8L: 182,
  X9L: 196
}

interface props {
  className?: string
  size?: string | number
  style?: string
  to?: string | boolean
  src: string
}

export class Image extends Component<props> {
  render() {
    let { className, size, style, to, src, ...rest } = this.props
    let width, height
    if (size != undefined) {
      switch (typeof size) {
        case 'number':
          width = size
          height = size
          break
        case 'string':
          width = sizeSpec[size.toString().toUpperCase()]
          height = sizeSpec[size.toString().toUpperCase()]
          break
        default:
          width = undefined
          height = undefined
          break
      }
    }
    if (to === true) to = '/'

    return typeof to === 'string' ? (
      <Anchor
        to={to}
        {...rest}
        className={`image${className ? ' ' + className : ''}`}
        //@ts-ignore
        style={Object.assign(
          {
            width: width,
            height: height,
            backgroundImage: `url('${src}')`
          },
          style
        )}
      />
    ) : (
      <div
        {...rest}
        className={`gerami-image${className ? ' ' + className : ''}`}
        //@ts-ignore
        style={Object.assign(
          {
            width: width,
            height: height,
            backgroundImage: `url('${src}')`
          },
          style
        )}
      />
    )
  }
}
