import React, { Component } from 'react'
import { Content } from '../Content/Content'

interface props {
  actions?: string | Element | Element[]
  className?: string
  imgSrc?: string
  imgStyle?: React.CSSProperties
  subtitle?: string
  title?: string
}

export class Card extends Component<props> {
  render() {
    const { actions, children, className, imgSrc, imgStyle, subtitle, title, ...rest } = this.props
    return (
      <Content {...rest} className={`gerami-card${className ? ' ' + className : ''}`}>
        {imgSrc ? (
          <div
            className={`gerami-card-img`}
            //@ts-ignore
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
