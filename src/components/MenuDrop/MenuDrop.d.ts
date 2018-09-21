import React, { Component } from 'react'
import './MenuDrop.scss'
interface props {
  align?: string
  anchorOffset?: string
  backgroundStyle?: React.CSSProperties
  children: React.ReactNode
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
