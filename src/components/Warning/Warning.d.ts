import React, { Component } from 'react'
import './Warning.scss'
interface props {
  children?: React.ReactNode
  className?: string
  problem?: {
    code: number
    message: string
  }
  shy?: boolean | Function
  bomb?: boolean
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