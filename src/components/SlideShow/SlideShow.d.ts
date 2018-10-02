import * as React from 'react'
interface props {
  className?: string
  height?: number | string
  Images?: {
    Image: Object | string
    Caption?: string
  }[]
  Data?: JSX.Element[]
  interval?: number
  autoplay?: boolean
  showControls?: boolean
  animation?: 'none' | 'fade'
}
declare class SlideShow extends React.Component<props> {
  slideIndex: number
  componentDidMount(): void
  movement: (n: number) => void
  currentSlide: (n: number) => void
  automatic: () => void
  slides: (n: number) => void
  render(): JSX.Element
}
export { SlideShow }
