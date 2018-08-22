import * as React from 'react'
import './Card.scss'
import { Content } from '../content/Content'

export class Card extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
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
