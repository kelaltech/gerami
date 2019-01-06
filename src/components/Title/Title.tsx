import React, { Component, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'

const sizeSpec = {
  XXS: 10,
  XS: 12,
  S: 16,
  M: 18,
  L: 20,
  XL: 24,
  XXL: 32,
  '3XL': 36,
  '4XL': 42,
  '5XL': 48,
  '6XL': 52,
  '7XL': 58,
  '8XL': 64,
  '9XL': 70
}

export interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
  size?: geramiSizeTypes
  subTitle?: string
}

interface ITitleState {}

export class Title extends Component<ITitleProps, ITitleState> {
  state = {}

  render() {
    const { size, className, subTitle, children } = this.props
    const fontSize = size && (typeof size === 'string' ? sizeSpec[size] : size)

    return (
      <div
        className={`padding-vertical-normal light fg-primary ${className || ''}`}
        style={{ fontSize }}
      >
        {children}
        <sub className={'gerami-title-subtitle fg-blackish'}>{subTitle}</sub>
      </div>
    )
  }
}
