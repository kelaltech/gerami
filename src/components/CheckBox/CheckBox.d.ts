import { Component, InputHTMLAttributes } from 'react'
export interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
}
interface ICheckBoxState {
  status: boolean
}
export declare class CheckBox extends Component<ICheckBoxProps, ICheckBoxState> {
  state: {
    status: boolean
  }
  render(): JSX.Element
  toggle: () => void
}
export {}
