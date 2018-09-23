import React, { Component } from 'react'
export interface IRangeMovedEvent {
  min: number
  max: number
}
export interface IRangeProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  absoluteMin: number
  absoluteMax: number
  inputMin?: number
  inputMax?: number
  roundValues?: boolean
  showNumbers?: boolean
  showUnit?: boolean
  unit?: string
  unitPosition?: 'prefix' | 'suffix'
  onMoved?: (e: IRangeMovedEvent) => void
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
  componentDidMount(): void
  componentDidUpdate(): void
  render(): JSX.Element
  private doChecks
  private startDrag
  private _calcDrag
  private dragMin
  private dragMax
  private stopDrag
}
