import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
import { IContentProps } from '../Content/Content.js'
export interface IDrawerProps extends IContentProps {
  align: 'left' | 'right'
  backgroundStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  open?: boolean
  noClose?: boolean
  onClose?: () => any
  size?: geramiSizeTypes
}
export interface IDrawerState {
  closed: boolean
}
export declare class Drawer extends Component<IDrawerProps, IDrawerState> {
  state: {
    closed: boolean
  }
  drawerRef: any
  componentDidUpdate(): void
  render(): JSX.Element | null
  close: () => void
}
