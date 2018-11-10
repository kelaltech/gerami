import React, { Component, InputHTMLAttributes, RefObject } from 'react'
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inputRef?: RefObject<HTMLInputElement>
}
interface IInputState {}
export declare class Input extends Component<IInputProps, IInputState> {
  state: {}
  input: React.RefObject<HTMLInputElement>
  placeholder: React.RefObject<HTMLDivElement>
  readonly value: string | null
  componentDidMount(): void
  render(): JSX.Element
  updateFloat(): void
}
export {}
