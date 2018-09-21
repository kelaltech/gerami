import { Component } from 'react'
import './Image.scss'
interface props {
  className?: string
  size?: string | number
  style?: string
  to?: string | boolean
  src: string
}
export declare class Image extends Component<props> {
  render(): JSX.Element
}
export {}
