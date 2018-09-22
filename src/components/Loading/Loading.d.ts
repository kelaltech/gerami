import React, { Component } from 'react'
interface ILoadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
  dead: any
  constructor(props: any)
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element | null
}
export {}
