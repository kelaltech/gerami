import { Component } from 'react'
interface props {
  className?: string
  problem?: {
    code: number
    message: string
  }
  shy?: boolean | Function
  bomb?: boolean
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
export declare class Warning extends Component<props> {
  private dead
  state: {
    hidden: boolean
  }
  constructor(props: any)
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element | null
  shyAway(): any
}
export {}
