import React, { Component, CSSProperties, createRef } from 'react'
import { Anchor } from '../Anchor/Anchor.js'

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
export class Range extends Component<IRangeProps, IRangeState> {
  state: IRangeState = {
    currentMin:
      (this.props.roundValues && Math.round(this.props.inputMin || this.props.absoluteMin)) ||
      this.props.inputMin ||
      this.props.absoluteMin,
    currentMax:
      (this.props.roundValues && Math.round(this.props.inputMax || this.props.absoluteMax)) ||
      this.props.inputMax ||
      this.props.absoluteMax
  }

  topEle = createRef<HTMLDivElement>()

  get min(): number {
    return this.state.currentMin
  }

  get max(): number {
    return this.state.currentMax
  }

  componentDidMount() {
    this.doChecks()
  }

  render() {
    const { absoluteMin, absoluteMax, className, ...rest } = this.props
    const { currentMin, currentMax } = this.state

    const leftPercent = (currentMin - absoluteMin) / (absoluteMax - absoluteMin)
    const widthPercent = (currentMax - currentMin) / (absoluteMax - absoluteMin)

    const selectedLineStyle: CSSProperties = {
      width: `${widthPercent * 100}%`,
      marginLeft: `${leftPercent * 100}%`
    }
    const minBtnVaultStyle: CSSProperties = { marginLeft: `${leftPercent * 100}%` }
    const maxBtnVaultStyle: CSSProperties = { marginLeft: `${(leftPercent + widthPercent) * 100}%` }

    delete rest.inputMin
    delete rest.inputMax
    delete rest.roundValues
    delete rest.showNumbers
    delete rest.showUnit
    delete rest.unit
    delete rest.unitPosition
    delete rest.onMoved

    return (
      <div {...rest as any} className={`gerami-range ${className || ''}`} ref={this.topEle}>
        <div className={'gerami-range-background-line'} />
        <div className={'gerami-range-selected-line'} style={selectedLineStyle} />

        <div className={'gerami-range-btn-vault'} style={minBtnVaultStyle}>
          <Anchor
            className={'gerami-range-btn'}
            draggable
            onDragStart={this.startDrag}
            onDragCapture={e => this.dragMin(e.pageX)}
            onTouchMove={e => this.dragMin(e.touches[0].pageX)}
            onTouchEnd={this.stopDrag}
            onDragEnd={this.stopDrag}
          />
        </div>
        <div className={'gerami-range-btn-vault'} style={maxBtnVaultStyle}>
          <Anchor
            className={'gerami-range-btn'}
            draggable
            onDragStart={this.startDrag}
            onDragCapture={e => this.dragMax(e.pageX)}
            onTouchMove={e => this.dragMax(e.touches[0].pageX)}
            onTouchEnd={this.stopDrag}
            onDragEnd={this.stopDrag}
          />
        </div>
      </div>
    )
  }

  private doChecks = () => {
    const { absoluteMin, absoluteMax, inputMin, inputMax } = this.props

    if (absoluteMin >= absoluteMax)
      throw Error(
        `gerami component error: in Range: 'absoluteMin' value ${absoluteMin} cannot be greater than or equal to 'absoluteMax' value ${absoluteMax}.`
      )
    if (inputMin != undefined && (inputMin < absoluteMin || inputMin > absoluteMax))
      throw Error(
        `gerami component error: in Range: 'inputMin' value ${inputMin} is out of the absolute range of values ${absoluteMin} - ${absoluteMax}.`
      )
    if (inputMax != undefined && (inputMax < absoluteMin || inputMax > absoluteMax))
      throw Error(
        `gerami component error: in Range: 'inputMax' value ${inputMax} is out of the absolute range of values ${absoluteMin} - ${absoluteMax}.`
      )
    if (inputMin != undefined && inputMax != undefined && inputMin >= inputMax) {
      throw Error(
        `gerami component error: in Range: 'inputMin' value ${inputMin} cannot be greater than or equal to 'inputMax' value ${inputMax}.`
      )
    }
  }

  private startDrag = (e: React.DragEvent): void => {
    try {
      const dragIcon = document.createElement('img')
      dragIcon.style.display = 'none'
      e.dataTransfer.setDragImage(dragIcon, 0, 0)
    } catch (e) {}
  }

  private _calcDrag = (pageX: number): number | null => {
    if (!this.topEle.current) return null

    const { absoluteMin, absoluteMax, roundValues } = this.props

    const absoluteDiff = absoluteMax - absoluteMin
    const eleLeftPx = this.topEle.current.offsetLeft
    const eleWidthPx = this.topEle.current.scrollWidth
    const pxPercent = (pageX - eleLeftPx) / eleWidthPx

    let ret = absoluteMin + absoluteDiff * pxPercent
    if (roundValues) ret = Math.round(ret)

    return ret >= absoluteMin && ret <= absoluteMax ? ret : null
  }

  private dragMin = (pageX: number): void => {
    const { currentMax } = this.state

    const currentMin = this._calcDrag(pageX)
    if (currentMin != null && currentMin < currentMax) this.setState({ currentMin })
  }

  private dragMax = (pageX: number) => {
    const { currentMin } = this.state

    const currentMax = this._calcDrag(pageX)
    if (currentMax != null && currentMin < currentMax) this.setState({ currentMax })
  }

  private stopDrag = () => {
    const { onMoved } = this.props
    const { currentMin: min, currentMax: max } = this.state

    onMoved && setTimeout(() => onMoved({ min, max }), 0)
  }
}
