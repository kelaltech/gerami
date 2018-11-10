import { Component, HTMLAttributes } from 'react'
export interface IImageInputProps extends HTMLAttributes<HTMLDivElement> {
  placeholderSrc?: string
  className?: string
  width?: number | string
  circular?: boolean
  borderRadius?: string | number
}
interface IImageInputState {}
export declare class ImageInput extends Component<IImageInputProps, IImageInputState> {
  state: {}
  render(): JSX.Element
  private changeImg
}
export {}
