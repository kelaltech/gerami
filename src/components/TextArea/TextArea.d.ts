import React, { Component, TextareaHTMLAttributes } from 'react'
export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  placeholder?: string
}
interface ITextAreaState {}
export declare class TextArea extends Component<ITextAreaProps, ITextAreaState> {
  state: {}
  textarea: React.RefObject<HTMLTextAreaElement>
  placeholder: React.RefObject<HTMLDivElement>
  readonly value: string | null
  componentDidMount(): void
  render(): JSX.Element
  updateFloat: () => void
}
export {}
