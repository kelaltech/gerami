import React from 'react'

import './Content.scss'

const sizeSpec = {
  XXS: 140,
  XS: 280,
  S: 420,
  M: 560,
  L: 700,
  XL: 840,
  XXL: 980,
  X3L: 1120,
  X4L: 1260,
  X5L: 1400,
  X6L: 1540,
  X7L: 1680,
  X8L: 1820,
  X9L: 1960
}

export const Content = ({ children, className, size, style, transparent, ...rest }) => {
  let maxWidth
  switch (typeof size) {
    case 'number':
      maxWidth = size
      break
    case 'string':
      maxWidth = sizeSpec[size.toUpperCase()]
      break
    default:
      maxWidth = undefined
      break
  }

  return (
    <div
      {...rest}
      className={`content${!transparent ? ' content-card' : ''}${
        className ? ' ' + className : ''
      }`}
      style={Object.assign({ maxWidth: maxWidth }, style)}
    >
      {children}
    </div>
  )
}
