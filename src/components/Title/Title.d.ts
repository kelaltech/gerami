import { Component, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'
export interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
  color?: string | 'green' | 'blue'
  size?: geramiSizeTypes
}
interface ITitleState {}
export declare class Title extends Component<ITitleProps, ITitleState> {
  state: {}
  render(): JSX.Element
}
export {}
