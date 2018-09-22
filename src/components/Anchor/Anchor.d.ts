import React, { Component } from 'react'
import { LocationDescriptor } from 'history'
export interface IAnchorProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > {
  button?: boolean
  to?: LocationDescriptor
  replace?: boolean
  innerRef?: (node: HTMLAnchorElement | null) => void
}
export interface IAnchorState {}
export declare class Anchor extends Component<IAnchorProps, IAnchorState> {
  render(): JSX.Element
}
