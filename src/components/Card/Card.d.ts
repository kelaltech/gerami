import React, { Component } from 'react'
interface props {
  actions?: string | Element | Element[]
  className?: string
  imgSrc?: string
  imgStyle?: React.CSSProperties
  subtitle?: string
  title?: string
}
export declare class Card extends Component<props> {
  render(): JSX.Element
}
export {}
