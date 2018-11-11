import React, { Component } from 'react'
import './AccordionSlider.scss'

interface IAccordionSliderProps {
  width?: number | string
  height?: number | string
  img: [{ src: string; caption?: string; action?: { headline: string; to: string } }]
}

export class AccordionSlider extends Component<IAccordionSliderProps, any> {
  render() {
    return <div className={'gerami-accordion-container'} />
  }
}
