import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IContentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  transparent?: boolean
  size?: geramiSizeTypes
}
export declare class Content extends Component<IContentProps> {
  render(): JSX.Element
}
