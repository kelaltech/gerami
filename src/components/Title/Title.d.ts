import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
export interface props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  color?: string | 'green' | 'blue'
  size?: geramiSizeTypes
}
export declare class Title extends Component<props, any> {
  render(): JSX.Element
}
