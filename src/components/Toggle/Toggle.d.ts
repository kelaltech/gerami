import { Component } from 'react'
interface IRadio {
  status: boolean
}
interface props {
  className?: string
  value?: string
}
export declare class Toggle extends Component<props, any> {
  state: IRadio
  constructor(props: any)
  f(): void
  render(): JSX.Element
}
export {}
