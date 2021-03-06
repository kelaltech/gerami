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
  constructor(props: IDialogProps)
  componentDidUpdate(props: IDialogProps): void
  render(): JSX.Element
  handleDialogContainer: () => void
}
