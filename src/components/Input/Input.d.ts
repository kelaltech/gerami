import React, { Component } from 'react'
interface props {
  className?: string
  label?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  inputRef?: any
}
export declare class Input extends Component<props> {
  input: any
  placeholder: any
  constructor(props: any)
  componentDidMount(): void
  render(): JSX.Element
  updateFloat(): void
  readonly value: any
}
export {}
