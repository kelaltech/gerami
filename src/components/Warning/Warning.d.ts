import { Component } from 'react'
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
