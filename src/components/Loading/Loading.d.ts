import { Component, HTMLAttributes } from 'react'
export interface ILoadingProps extends HTMLAttributes<HTMLDivElement> {
  error?: string
  pastDelay?: number | boolean
  problem?:
    | {
        code: number
        message: string
      }
    | string
  timedOut?: number
  isLoading?: boolean
  delay?: boolean | number
}
interface ILoadingState {
  pastCustomDelay?: any
}
export declare class Loading extends Component<ILoadingProps, ILoadingState> {
  state: {
    pastCustomDelay: boolean
  }
  dead: any
  constructor(props: any)
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element | null
}
export {}
