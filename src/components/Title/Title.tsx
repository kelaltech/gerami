import React, { Component, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'

let sizeSpec = {
  XXS: 10,
  XS: 10,
  S: 30,
  M: 40,
  L: 50,
  XL: 55,
  XXL: 60
}

export interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
  size?: string | geramiSizeTypes
  subTitle?: string
}

interface ITitleState {}

export class Title extends Component<ITitleProps, ITitleState> {
  state = {}

  render() {
    const { size, className, subTitle, children } = this.props
    let fontSize = size && (typeof size === 'string' ? sizeSpec[size] : size)
    return (
      <div
        className={`padding-vertical-normal light fg-primary ${className ? className : ''}`}
        style={{ fontSize: size ? fontSize : '' }}
      >
        {children}
        <sub className={'gerami-title-subtitle fg-blackish'}>{subTitle}</sub>
      </div>
    )
  }
}
