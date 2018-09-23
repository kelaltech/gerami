import React, { Component, CSSProperties, createRef } from 'react'
import { Anchor } from '../Anchor/Anchor.js'

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

  componentDidUpdate() {
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
            onDragCapture={this.dragMin}
            onDragEnd={this.stopDrag}
          />
        </div>
        <div className={'gerami-range-btn-vault'} style={maxBtnVaultStyle}>
          <Anchor
            className={'gerami-range-btn'}
            draggable
            onDragStart={this.startDrag}
            onDragCapture={this.dragMax}
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
    const dragIcon = document.createElement('img')
    dragIcon.style.display = 'none'
    e.dataTransfer.setDragImage(dragIcon, 0, 0)
  }

  private _calcDrag = (e: React.DragEvent): number | null => {
    if (!this.topEle.current) return null

    const { absoluteMin, absoluteMax, roundValues } = this.props

    const absoluteDiff = absoluteMax - absoluteMin
    const eleLeftPx = this.topEle.current.offsetLeft
    const eleWidthPx = this.topEle.current.scrollWidth
    const pxPercent = (e.pageX - eleLeftPx) / eleWidthPx

    let ret = absoluteMin + absoluteDiff * pxPercent
    if (roundValues) ret = Math.round(ret)

    return ret >= absoluteMin && ret <= absoluteMax ? ret : null
  }

  private dragMin = (e: React.DragEvent): void => {
    const { currentMax } = this.state

    const currentMin = this._calcDrag(e)
    if (currentMin != null && currentMin < currentMax) this.setState({ currentMin })
  }

  private dragMax = (e: React.DragEvent) => {
    const { currentMin } = this.state

    const currentMax = this._calcDrag(e)
    if (currentMax != null && currentMin < currentMax) this.setState({ currentMax })
  }

  private stopDrag = () => {
    const { onMoved } = this.props
    const { currentMin: min, currentMax: max } = this.state

    onMoved && setTimeout(() => onMoved({ min, max }), 0)
  }
}
