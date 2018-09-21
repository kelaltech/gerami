import React, { Component } from 'react'
import './Button.scss'
interface props {
  children: React.ReactNode
  className?: string
  primary?: boolean
  to?: string
  type?: string | 'button' | 'submit' | 'reset'
}
export declare class Button extends Component<props> {
  render(): JSX.Element
}
export {}
