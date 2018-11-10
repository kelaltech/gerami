import { Component, HTMLAttributes } from 'react'
export interface IBlockProps extends HTMLAttributes<HTMLDivElement> {
  first?: boolean
  last?: boolean
}
interface IBlockState {}
export declare class Block extends Component<IBlockProps, IBlockState> {
  state: {}
  render(): JSX.Element
}
export {}
