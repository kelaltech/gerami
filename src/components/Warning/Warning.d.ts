import { Component } from 'react'
import { geramiSizeTypes } from '../../index'
import { IContentProps } from '../Content/Content.js'
interface IWarningProps extends IContentProps {
  className?: string
  problem?:
    | {
        code: number
        message: string
      }
    | string
  shy?: boolean | Function
  bomb?: boolean
  size?: geramiSizeTypes
}
export declare class Warning extends Component<IWarningProps> {
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
