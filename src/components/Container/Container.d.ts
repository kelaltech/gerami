import { Component } from 'react'
import './Container.scss'
interface IContainer {
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  id: number
}
export declare class Container extends Component<any> {
  state: IContainer
  constructor(props: any)
  render(): JSX.Element
}
export {}
