import React, { Component } from 'react'
export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  primary?: boolean
  to?: string
}
export interface IButtonState {}
export declare class Button extends Component<IButtonProps, IButtonState> {
  render(): JSX.Element
}
