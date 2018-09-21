import { Component } from 'react'
import './Loading.scss'
interface props {
  className?: string
  error?: string
  pastDelay?: number | boolean
  problem?:
    | {
        code: number
        message: string
      }
    | string
  timedOut?: number
}
export declare class Loading extends Component<
  props,
  {
    pastCustomDelay?: any
  }
> {
  dead: any
  constructor(props: any)
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element | null
}
export {}
