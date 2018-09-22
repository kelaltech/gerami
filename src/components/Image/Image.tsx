import React, { Component } from 'react'
import { LocationDescriptor } from 'history'
import { Anchor, IAnchorProps } from '../Anchor/Anchor.js'

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

export interface IImageAttributes {
  src: string
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

type IImageProps = IImageAttributes &
  (IAnchorProps | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) & {
    to?: boolean | LocationDescriptor
  }

export interface IImageState {}

export class Image extends Component<IImageProps, IImageState> {
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
        {...rest as any}
        className={`image${className ? ' ' + className : ''}`}
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
        {...rest as any}
        className={`gerami-image${className ? ' ' + className : ''}`}
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
