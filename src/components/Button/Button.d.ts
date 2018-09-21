import { Component } from 'react'
interface props {
  className?: string
  primary?: boolean
  to?: string
  type?: string | 'button' | 'submit' | 'reset'
}
export declare class Button extends Component<props, any> {
  render(): JSX.Element
}
export {}
