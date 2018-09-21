import React, { Component } from 'react'
import './Card.scss'
interface props {
  actions?: string | Element | Element[]
  children: React.ReactNode
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
