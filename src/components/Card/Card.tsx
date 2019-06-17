import React, { Component, CSSProperties, ReactNode } from 'react'
import { Content, IContentProps } from '../Content/Content.js'

export interface ICardProps extends IContentProps {
  actions?: ReactNode
  imgSrc?: string
  imgStyle?: CSSProperties
  title?: string
  subtitle?: string
}

interface ICardState {}

export class Card extends Component<ICardProps, ICardState> {
  state = {}

  render() {
    const { actions, children, className, imgSrc, imgStyle, subtitle, title, ...rest } = this.props

    return (
      <Content {...(rest as any)} className={`gerami-card ${className || ''}`}>
        {imgSrc ? (
          <div
            className={`gerami-card-img`}
            style={Object.assign({ backgroundImage: `url(${imgSrc})` }, imgStyle)}
          />
        ) : null}

        {title || subtitle ? (
          <div className={'padding-big padding-bottom-none'}>
            {title ? (
              <div className={`font-L bold${subtitle ? ' padding-bottom-small' : ''}`}>{title}</div>
            ) : null}
            {subtitle ? <div className={'font-XS fg-blackish'}>{subtitle}</div> : null}
          </div>
        ) : null}

        {children ? (
          <div className={'padding-big'}>{children}</div>
        ) : (
          <div className={'padding-top-big'} />
        )}

        {actions ? (
          <div
            className={
              'flex padding-horizontal-big padding-vertical-normal font-S bg-whitish fg-blackish'
            }
          >
            {actions}
          </div>
        ) : null}
      </Content>
    )
  }
}
