import { Component } from 'react'
interface props {
  className?: string
  style?: object
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
}
export declare class Select extends Component<props> {
  constructor(props: any)
  render(): JSX.Element
}
export {}
