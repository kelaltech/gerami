import { Component, CSSProperties } from 'react'
export interface IDialogProps {
  open?: boolean
  style?: CSSProperties
  className?: string
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
}
export declare class Dialog extends Component<IDialogProps, any> {
  render(): JSX.Element
  handleDialigContainer: () => void
}
