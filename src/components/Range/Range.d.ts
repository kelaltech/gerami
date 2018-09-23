import React, { Component } from 'react'
export interface IRangeMovedEvent {
  min: number
  max: number
}
export interface IRangeProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Absolute minimum value in the range's scale.
   */
  absoluteMin: number
  /**
   * Absolute maximum value in the range's scale.
   */
  absoluteMax: number
  /**
   * Input minimum value, within the absolute range of values.
   */
  inputMin?: number
  /**
   * Input maximum value, within the absolute range of values.
   */
  inputMax?: number
  /**
   * String label for this form control element.
   * @no-op // todo
   */
  label?: string
  /**
   * No actions, just read-only.
   * @no-op // todo
   */
  readonly?: boolean
  /**
   * Use rounded integers if received decimals values.
   */
  roundValues?: boolean
  /**
   * Show numbers. Defaults to true.
   * @no-op // todo
   */
  showNumbers?: boolean
  /**
   * Show units, if numbers are shown and `unit` is provided. Defaults to true.
   * @no-op // todo
   */
  showUnit?: boolean
  /**
   * Name of the unit.
   * @no-op // todo
   */
  unit?: string
  /**
   * Position of units relative to numbers, if units are enabled. Defaults to 'suffix'.
   * @no-op // todo
   */
  unitPosition?: 'prefix' | 'suffix'
  /**
   * Event callback that fires when the value of the range is changed.
   * @param e An IRangeMovedEvent, with the new 'min' and 'max' values.
   */
  onMoved?: (e: IRangeMovedEvent) => void
}
export interface IRangeState {
  currentMin: number
  currentMax: number
}
/**
 * A gerami form control element that receives absolute minimum and maximum
 * numbers (optionally, with a unit) and allows the user to select a range of
 * number values within the provided scale.
 */
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
