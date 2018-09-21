import { Component } from 'react'
interface props {
  className?: string
  problem?: {
    code: number
    message: string
  }
  shy?: boolean | Function
  bomb?: boolean
  size?: string | number
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
