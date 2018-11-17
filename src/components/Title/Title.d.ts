import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
export interface props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  fontS?: 'italic'
  size?: geramiSizeTypes
}
export declare class Title extends Component<props, any> {
  render(): JSX.Element
}
