import React from 'react'

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

export const AccountPic = ({ children, className, size, src, style, ...rest }) => {
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
      className={`account-pic${className ? ' ' + className : ''}`}
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
