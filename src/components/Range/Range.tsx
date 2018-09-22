import React, { Component, CSSProperties, createRef } from 'react'
import { Anchor } from '../Anchor/Anchor.js'

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

export class Range extends Component<IRangeProps, IRangeState> {
  state: IRangeState = {
    currentMin: this.props.inputMin || this.props.absoluteMin,
    currentMax: this.props.inputMax || this.props.absoluteMax
  }

  topEle = createRef<HTMLDivElement>()

  get min(): number {
    return this.state.currentMin
  }

  get max(): number {
    return this.state.currentMax
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
            onDragOver={this.dragMin}
            onDragEnd={this.dragMin}
          />
        </div>
        <div className={'gerami-range-btn-vault'} style={maxBtnVaultStyle}>
          <Anchor
            className={'gerami-range-btn'}
            draggable
            onDragStart={this.startDrag}
            onDragCapture={this.dragMax}
            onDragOver={this.dragMax}
            onDragEnd={this.dragMax}
          />
        </div>
      </div>
    )
  }

  private startDrag = (e: React.DragEvent): void => {
    const dragIcon = document.createElement('img')
    dragIcon.style.display = 'none'
    e.dataTransfer.setDragImage(dragIcon, 0, 0)
  }

  private dragMin = (e: React.DragEvent): void => {
    if (this.topEle.current) {
      const { absoluteMin, absoluteMax } = this.props

      const absoluteDiff = absoluteMax - absoluteMin
      const eleLeftPx = this.topEle.current.offsetLeft
      const eleWidthPx = this.topEle.current.scrollWidth
      const pxPercent = (e.pageX - eleLeftPx) / eleWidthPx

      const currentMin = absoluteMin + absoluteDiff * pxPercent

      if (currentMin >= absoluteMin && currentMin <= absoluteMax) this.setState({ currentMin })
    }
  }

  private dragMax = (e: React.DragEvent) => {
    if (this.topEle.current) {
      const { absoluteMin, absoluteMax } = this.props

      const absoluteDiff = absoluteMax - absoluteMin
      const eleLeftPx = this.topEle.current.offsetLeft
      const eleWidthPx = this.topEle.current.scrollWidth
      const pxPercent = (e.pageX - eleLeftPx) / eleWidthPx

      const currentMax = absoluteMin + absoluteDiff * pxPercent

      if (currentMax >= absoluteMin && currentMax <= absoluteMax) this.setState({ currentMax })
    }
  }
}
