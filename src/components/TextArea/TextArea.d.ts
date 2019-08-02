import React, { Component, RefObject, TextareaHTMLAttributes } from 'react'
export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  placeholder?: string
  innerRef?: RefObject<HTMLInputElement>
}
interface ITextAreaState {}
export declare class TextArea extends Component<ITextAreaProps, ITextAreaState> {
  state: {}
  textarea: React.RefObject<HTMLInputElement> | React.RefObject<HTMLTextAreaElement>
  placeholder: React.RefObject<HTMLDivElement>
  readonly value: string | null
  componentDidMount(): void
  render(): JSX.Element
  updateFloat: () => void
}
export {}
