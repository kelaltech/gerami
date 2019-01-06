import React, { Component, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'

const sizeSpec = {
  XXS: 10,
  XS: 10,
  S: 30,
  M: 40,
  L: 50,
  XL: 55,
  XXL: 60
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
    const fontSize = (size && (typeof size === 'string' ? sizeSpec[size] : size)) || undefined

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
