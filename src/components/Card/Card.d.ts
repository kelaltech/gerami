import { Component, CSSProperties, ReactNode } from 'react'
import { IContentProps } from '../Content/Content.js'
export interface ICardProps extends IContentProps {
  actions?: ReactNode
  imgSrc?: string
  imgStyle?: CSSProperties
  title?: string
  subtitle?: string
}
interface ICardState {}
export declare class Card extends Component<ICardProps, ICardState> {
  state: {}
  render(): JSX.Element
}
export {}
