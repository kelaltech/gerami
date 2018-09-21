import { Component } from 'react'
import './TextArea.scss'
interface props {
  className?: string
  label?: string
  placeholder?: string
}
export declare class TextArea extends Component<props> {
  textarea: any
  placeholder: any
  constructor(props: any)
  componentDidMount(): void
  render(): JSX.Element
  updateFloat(): void
  readonly value: any
}
export {}
