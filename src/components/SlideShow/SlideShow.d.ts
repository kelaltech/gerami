import { Component, HTMLAttributes } from 'react'
export interface ISlideShowProps extends HTMLAttributes<HTMLDivElement> {
  height?: number | string
  images?: {
    image: string
    caption?: string
  }[]
  data?: JSX.Element[]
  interval?: number
  autoPlay?: boolean
  showControls?: boolean
  animation?: 'none' | 'fade'
}
interface ISlideShowState {}
export declare class SlideShow extends Component<ISlideShowProps, ISlideShowState> {
  state: {}
  slideIndex: number
  componentDidMount(): void
  render(): JSX.Element
  movement: (n: number) => void
  currentSlide: (n: number) => void
  automatic: () => void
  slides: (n: number) => void
}
export {}
