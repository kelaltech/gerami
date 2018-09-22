import React, { Component } from 'react'
export interface IMenuDropProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: string
  anchorOffset?: string
  backgroundStyle?: React.CSSProperties
  containerStyle?: string
  open: string | boolean
  noClose?: boolean
  onClose?: () => void
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
