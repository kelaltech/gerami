import * as React from 'react'
import './AccountPic.scss'

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
export class AccountPic extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { children, className, size, src, style, ...rest } = this.props
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
    return (
      <div
        {...rest}
        className={`gerami-account-pic${className ? ' ' + className : ''}`}
        //@ts-ignore
        style={Object.assign(
          {
            width: width,
            height: height,
            backgroundImage: `url(${encodeURI(
              typeof src === 'string' ? src : '/api/account/me/picture'
            )})`
          },
          style
        )}
      >
        {children}
      </div>
    )
  }
}
