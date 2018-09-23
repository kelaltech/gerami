import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IYogaProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  maxCol: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  size?: geramiSizeTypes
}
export interface IYogaState {}
export declare class Yoga extends Component<IYogaProps, IYogaState> {
  render(): JSX.Element
}
