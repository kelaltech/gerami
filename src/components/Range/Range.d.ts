import React, { Component } from 'react'
export interface IRangeProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  absoluteMin: number
  absoluteMax: number
  inputMin?: number
  inputMax?: number
  showNumbers?: number
  showUnit?: number
  unit?: string
  unitPosition?: 'prefix' | 'suffix'
}
export interface IRangeState {
  currentMin: number
  currentMax: number
}
export declare class Range extends Component<IRangeProps, IRangeState> {
  state: IRangeState
  topEle: React.RefObject<HTMLDivElement>
  readonly min: number
  readonly max: number
  render(): JSX.Element
  private startDrag
  private dragMin
  private dragMax
}
