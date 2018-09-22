import React, { Component } from 'react'
import { LocationDescriptor } from 'history'
import { IAnchorProps } from '../Anchor/Anchor.js'
export interface IImageAttributes {
  src: string
  size?:
    | 'XXS'
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | '3XL'
    | '4XL'
    | '5XL'
    | '6XL'
    | '7XL'
    | '8XL'
    | '9XL'
    | number
}
declare type IImageProps = IImageAttributes &
  (IAnchorProps | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) & {
    to?: boolean | LocationDescriptor
  }
export interface IImageState {}
export declare class Image extends Component<IImageProps, IImageState> {
  render(): JSX.Element
}
export {}
