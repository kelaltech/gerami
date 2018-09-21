import React, { Component } from 'react'
import './Block.scss'
interface props {
  children?: React.ReactNode
  className?: string
  first?: boolean
  last?: boolean
}
export declare class Block extends Component<props> {
  render(): JSX.Element
}
export {}
