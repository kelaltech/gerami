import { Component } from 'react'
import { IContentProps } from '../Content/Content.js'
export interface IWarningProps extends IContentProps {
  problem?:
    | {
        code: number
        message: string
      }
    | string
  shy?: boolean | Function
  bomb?: boolean
}
interface IWarningState {
  hidden: boolean
}
export declare class Warning extends Component<IWarningProps, IWarningState> {
  state: {
    hidden: boolean
  }
  dead: boolean
  constructor(props: any)
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element | null
  shyAway(): any
}
export {}
