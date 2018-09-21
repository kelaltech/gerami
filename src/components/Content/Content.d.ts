import React, { Component } from 'react'
import './Content.scss'
interface props {
  children: React.ReactNode
  className?: string
  size?: string | Number
  style?: string | React.CSSProperties
  transparent?: boolean
}
export declare class Content extends Component<props> {
  constructor(props: any)
  render(): JSX.Element
}
export {}
