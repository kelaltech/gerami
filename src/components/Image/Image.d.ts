import React, { Component } from 'react'
import { LocationDescriptor } from 'history'
import { geramiSizeTypes } from '../../index'
import { IAnchorProps } from '../Anchor/Anchor.js'
export interface IImageAttributes {
  src: string
  size?: geramiSizeTypes
}
declare type IImageProps = IImageAttributes &
  (IAnchorProps | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) & {
    to?: boolean | LocationDescriptor
    href?: string
  }
export interface IImageState {}
export declare class Image extends Component<IImageProps, IImageState> {
  render(): JSX.Element
}
export {}
