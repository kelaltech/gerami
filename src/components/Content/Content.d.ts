import React, { Component } from 'react'
interface props {
  className?: string
  size?:
    | 'XXS'
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | '3XL'
    | '4XL'
    | '5XL'
    | '6XL'
    | '7XL'
    | '8XL'
    | '9XL'
    | number
  style?: string | React.CSSProperties
  transparent?: boolean
}
export declare class Content extends Component<props> {
  constructor(props: any)
  render(): JSX.Element
}
export {}
