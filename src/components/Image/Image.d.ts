import { Component, HTMLAttributes } from 'react'
import { LocationDescriptor } from 'history'
import { geramiSizeTypes } from '../../index'
import { IAnchorProps } from '../Anchor/Anchor.js'
interface IImageAttributes {
  src: string
  size?: geramiSizeTypes
}
export declare type IImageProps = IImageAttributes &
  (IAnchorProps | HTMLAttributes<HTMLDivElement>) & {
    to?: boolean | LocationDescriptor
    href?: string
  }
interface IImageState {}
export declare class Image extends Component<IImageProps, IImageState> {
  state: {}
  render(): JSX.Element
}
export {}
