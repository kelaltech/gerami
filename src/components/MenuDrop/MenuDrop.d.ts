import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IMenuDropProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: 'left' | 'right'
  anchorOffset?: string | number
  backgroundStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  open: boolean
  noClose?: boolean
  onClose?: () => any
  size?: geramiSizeTypes
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
