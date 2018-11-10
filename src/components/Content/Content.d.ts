import { Component, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IContentProps extends HTMLAttributes<HTMLDivElement> {
  transparent?: boolean
  size?: geramiSizeTypes
}
interface IContentState {}
export declare class Content extends Component<IContentProps, IContentState> {
  state: {}
  render(): JSX.Element
}
export {}
