import { Component, HTMLAttributes } from 'react'
export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  top?: number
  right?: number
  bottom?: number
  left?: number
}
interface IContainerState {}
/**
 * @deprecated Will be replaced by Page.Anti
 */
export declare class Container extends Component<IContainerProps, IContainerState> {
  state: {}
  render(): JSX.Element
}
export {}
