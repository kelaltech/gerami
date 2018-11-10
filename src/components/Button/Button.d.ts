import { ButtonHTMLAttributes, Component } from 'react'
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  to?: string
}
interface IButtonState {}
export declare class Button extends Component<IButtonProps, IButtonState> {
  state: {}
  render(): JSX.Element
}
export {}
