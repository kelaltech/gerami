import { Component } from 'react'
interface IAccordionSliderProps {
  width?: number | string
  height?: number | string
  imgs: {
    src: string
    caption?: string
    action?: {
      headline: string
      to: string
    }
  }[]
}
export declare const imgLength: {
  length: number
}
export declare class AccordionSlider extends Component<IAccordionSliderProps, any> {
  render(): JSX.Element
}
export {}
