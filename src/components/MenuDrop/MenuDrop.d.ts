import React, { Component } from 'react'
interface props {
  align?: string
  anchorOffset?: string
  backgroundStyle?: React.CSSProperties
  className?: string
  containerStyle?: string
  open: string | boolean
  size?: string | number
  style?: React.CSSProperties
  noClose: boolean
  onClose: () => void
}
export declare class MenuDrop extends Component<props> {
  state: {
    closed: boolean
  }
  componentDidUpdate(): void
  render(): JSX.Element | null
  close: () => void
}
export {}
