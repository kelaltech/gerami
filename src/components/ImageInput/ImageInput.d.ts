import * as React from 'react'
import './ImageInput.scss'
interface props {
  image?: Object
  className?: string
  width?: number | string
  circular?: boolean
  borderRadius?: string | number
}
export declare class ImageInput extends React.Component<props> {
  state: {
    image: any
  }
  private changeImg
  render(): JSX.Element
}
export {}
