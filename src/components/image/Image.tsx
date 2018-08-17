import * as React from 'react'

import './Image.scss'
import { Anchor } from '../anchor/Anchor'

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
export class Image extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    let { className, size, style, to, src, ...rest } = this.props
    let width, height
    switch (typeof size) {
      case 'number':
        width = size
        height = size
        break
      case 'string':
        width = sizeSpec[size.toUpperCase()]
        height = sizeSpec[size.toUpperCase()]
        break
      default:
        width = undefined
        height = undefined
        break
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
    )
  }
}
