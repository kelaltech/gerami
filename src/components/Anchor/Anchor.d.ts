import { AnchorHTMLAttributes, Component } from 'react'
import { LocationDescriptor } from 'history'
export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  button?: boolean
  to?: LocationDescriptor
  replace?: boolean
  innerRef?: (node: HTMLAnchorElement | null) => void
}
interface IAnchorState {}
export declare class Anchor extends Component<IAnchorProps, IAnchorState> {
  state: {}
  render(): JSX.Element
}
export {}
