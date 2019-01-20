import React, { Component, HTMLAttributes } from 'react'
import { LocationDescriptor } from 'history'
import { geramiSizeTypes } from '../../index'
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

interface IImageAttributes {
  src: string
  size?: geramiSizeTypes
}

export type IImageProps = IImageAttributes &
  (IAnchorProps | HTMLAttributes<HTMLDivElement>) & {
    to?: boolean | LocationDescriptor
    href?: string
  }

interface IImageState {}

export class Image extends Component<IImageProps, IImageState> {
  state = {}

  render() {
    let { className, size, style, to, src, ...rest } = this.props

    const width = size && (typeof size === 'string' ? sizeSpec[size] : size)
    const height = size && (typeof size === 'string' ? sizeSpec[size] : size)

    if (to === true) to = '/'

    return to || rest.href != undefined ? (
      <Anchor
        to={to}
        {...rest as any}
        className={`gerami-image ${className || ''}`}
        style={Object.assign({ width, height, backgroundImage: `url('${src}')` }, style)}
      />
    ) : (
      <div
        {...rest as any}
        className={`gerami-image ${className || ''}`}
        style={Object.assign({ width, height, backgroundImage: `url('${src}')` }, style)}
      />
    )
  }
}
