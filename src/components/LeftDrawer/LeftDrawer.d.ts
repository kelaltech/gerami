import React, { Component } from 'react'
import { IContentProps } from '../Content/Content.js'
export interface IDrawerProps extends IContentProps {
  align?: 'left' | 'right'
  backgroundStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  open?: boolean
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
export interface IDrawerState {
  closed: boolean
}
export declare class LeftDrawer extends Component<IDrawerProps, IDrawerState> {
  state: {
    closed: boolean
  }
  drawerRef: any
  componentDidUpdate(): void
  render(): JSX.Element | null
  close: () => void
}
