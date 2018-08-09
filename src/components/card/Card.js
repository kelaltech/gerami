import React from 'react'

import './Card.scss'
import { Content } from '../content/Content'

export const Card = ({
  actions,
  children,
  className,
  imgSrc,
  imgStyle,
  subtitle,
  title,
  ...rest
}) => (
  <Content {...rest} className={`card${className ? ' ' + className : ''}`}>
    {imgSrc ? (
      <div
        className={`card-img`}
        style={Object.assign({ backgroundImage: `url(${imgSrc})` }, imgStyle)}
      />
    ) : null}

    {title || subtitle ? (
      <div className={'padding-big padding-bottom-none'}>
        {title ? (
          <div
            className={`font-L bold${subtitle ? ' padding-bottom-small' : ''}`}
          >
            {title}
          </div>
        ) : null}
        {subtitle ? (
          <div className={'font-XS fg-blackish'}>{subtitle}</div>
        ) : null}
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
