import { Component } from 'react'
interface IRadio {
  status: boolean
}
interface props {
  className?: string
  value?: string
  type?: string
  name?: string
}
export declare class Radio extends Component<props, any> {
  state: IRadio
  constructor(props: any)
  f(): void
  render(): JSX.Element
}
export {}
