import { Component, CSSProperties, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IMenuDropProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'right'
  anchorOffset?: string | number
  backgroundStyle?: CSSProperties
  containerStyle?: CSSProperties
  open: boolean
  noClose?: boolean
  onClose?: () => any
  size?: geramiSizeTypes
}
interface IMenuDropState {}
export declare class MenuDrop extends Component<IMenuDropProps, IMenuDropState> {
  state: {
    closed: boolean
  }
  componentDidUpdate(): void
  render(): JSX.Element | null
  close: () => void
}
export {}
