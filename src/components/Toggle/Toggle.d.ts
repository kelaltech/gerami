import { Component, InputHTMLAttributes } from 'react'
export interface IToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  value?: string
  selected?: boolean
}
interface IToggleState {
  status: boolean
}
export declare class Toggle extends Component<IToggleProps, IToggleState> {
  state: {
    status: boolean
  }
  readonly value: boolean
  render(): JSX.Element
  toggle: () => void
}
export {}
