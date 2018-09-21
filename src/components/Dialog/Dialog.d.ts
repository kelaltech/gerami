import React, { Component } from 'react'
import './Dialog.scss'
interface props {
  open: boolean
  children: React.ReactNode
  width?: string | number
}
export declare class Dialog extends Component<props, any> {
  render(): JSX.Element
}
export {}
