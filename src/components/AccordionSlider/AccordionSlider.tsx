import React, { Component } from 'react'
import { Anchor } from '../Anchor/Anchor.js'

interface IAccordionSliderProps {
  width?: number | string
  height?: number | string
  imgs: { src: string; caption?: string; action?: { headline: string; to: string } }[]
}

export const imgLength = {
  length: 0
}
export class AccordionSlider extends Component<IAccordionSliderProps, any> {
  render() {
    const { width, height, imgs } = this.props
    imgLength.length = imgs.length // to divide the space equally bn images

    return (
      <div
        style={{
          width: width ? width : '100%',
          height: height ? height : '300px'
        }}
        className={'gerami-accordion-container'}
      >
        <div className={'gerami-modal-container'}>
          {imgs.map((img, key) => (
            <div
              key={key}
              style={{
                backgroundImage: `url(${img.src})`,
                width: `${100 / imgs.length}%`
              }}
              className={'gerami-modal-img'}
            >
              {img.caption ? (
                <div className={'gerami-modal-caption-container'}>
                  <div className={'gerami-modal-caption'}>
                    <p>{img.caption}</p>
                  </div>
                  {img.action ? (
                    <div className={'gerami-modal-action'}>
                      <Anchor to={img.action.to}>{img.action.headline}</Anchor>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
