import React, { Component } from 'react'
import './Page.scss'
interface props {
  bottom?: string | number | boolean
  children: React.ReactNode
  className?: string
  top?: string | number | boolean
  style: string | React.CSSProperties
}
export declare class Page extends Component<props> {
  constructor(props: any)
  render(): JSX.Element
}
export {}
