import { Component, InputHTMLAttributes } from 'react'
export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  type?: string
  name?: string
}
interface IRadioState {
  status: boolean
}
export declare class Radio extends Component<IRadioProps, IRadioState> {
  state: {
    status: boolean
  }
  render(): JSX.Element
}
export {}
