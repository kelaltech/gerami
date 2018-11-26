import { Component, HTMLAttributes } from 'react'
export interface IPageProps extends HTMLAttributes<HTMLDivElement> {
  bottom?: string | number | boolean
  top?: string | number | boolean
}
interface IPageState {}
export declare class Page extends Component<IPageProps, IPageState> {
  state: {}
  render(): JSX.Element
}
export {}
