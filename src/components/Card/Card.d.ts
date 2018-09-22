import React, { Component, ReactNode } from 'react'
import { IContentProps } from '../Content/Content.js'
export interface ICardProps extends IContentProps {
  actions?: ReactNode
  imgSrc?: string
  imgStyle?: React.CSSProperties
  title?: string
  subtitle?: string
}
export interface ICardState {}
export declare class Card extends Component<ICardProps, ICardState> {
  render(): JSX.Element
}
