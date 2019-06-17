import React, { Component, HTMLAttributes } from 'react'
import { LocationDescriptor } from 'history'
import { geramiSizeTypes } from '../../index'
import { Anchor, IAnchorProps } from '../Anchor/Anchor.js'
import { BackgroundSizeProperty } from 'csstype'

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
  /**
   * Overrides size.
   */
  width?: geramiSizeTypes
  /**
   * Overrides size.
   */
  height?: geramiSizeTypes
  backgroundSize?: BackgroundSizeProperty<any>
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
    let {
      className,
      size,
      style,
      to,
      src,
      width: w,
      height: h,
      backgroundSize,
      ...rest
    } = this.props

    const width =
      (w && (typeof w === 'string' ? sizeSpec[w] : w)) ||
      (size && (typeof size === 'string' ? sizeSpec[size] : size))
    const height =
      (h && (typeof h === 'string' ? sizeSpec[h] : h)) ||
      (size && (typeof size === 'string' ? sizeSpec[size] : size))

    if (to === true) to = '/'

    // todo: receive these styles as props: backgroundSize
    return to || rest.href != undefined ? (
      <Anchor
        to={to}
        {...(rest as any)}
        className={`gerami-image ${className || ''}`}
        style={{
          ...{
            width,
            height,
            backgroundImage: `url('${src}')`,
            backgroundSize
          },
          ...style
        }}
      />
    ) : (
      <div
        {...(rest as any)}
        className={`gerami-image ${className || ''}`}
        style={{
          ...{
            width,
            height,
            backgroundImage: `url('${src}')`,
            backgroundSize
          },
          ...style
        }}
      />
    )
  }
}
