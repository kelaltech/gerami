import { Component, LabelHTMLAttributes } from 'react'
export interface IRadioProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  value?: string
  selected?: boolean
}
interface IRadioState {
  status: boolean
}
export declare class Toggle extends Component<IRadioProps, IRadioState> {
  state: {
    status: boolean
  }
  readonly value: boolean
  render(): JSX.Element
  toggle: () => void
}
export {}
