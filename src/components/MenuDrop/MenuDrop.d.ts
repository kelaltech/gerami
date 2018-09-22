import React, { Component } from 'react'
import { FloatProperty } from 'csstype'
export interface IMenuDropProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: FloatProperty
  anchorOffset?: string | number
  backgroundStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  open: boolean
  noClose?: boolean
  onClose?: () => any
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
export interface IMenuDropState {}
export declare class MenuDrop extends Component<IMenuDropProps, IMenuDropState> {
  state: {
    closed: boolean
  }
  componentDidUpdate(): void
  render(): JSX.Element | null
  close: () => void
}
