import React, { Component } from 'react'
import { Content } from '../Content/Content.js'

const sizeSpec = {
  XXS: 70,
  XS: 105,
  S: 140,
  M: 175,
  L: 210,
  XL: 245,
  XXL: 280,
  '3XL': 315,
  '4XL': 350,
  '5XL': 385,
  '6XL': 420,
  '7XL': 455,
  '8XL': 490,
  '9XL': 525
}

export interface IMenuDropProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: string
  anchorOffset?: string
  backgroundStyle?: React.CSSProperties
  containerStyle?: string
  open: string | boolean
  noClose?: boolean
  onClose?: () => void
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

export interface IMenuDropState {}

export class MenuDrop extends Component<IMenuDropProps, IMenuDropState> {
  state = {
    closed: this.props.open === false
  }

  componentDidUpdate() {
    if (this.state.closed !== (this.props.open === false))
      this.setState({ closed: this.props.open === false })
  }

  render() {
    const {
      align,
      anchorOffset,
      backgroundStyle,
      children,
      className,
      containerStyle,
      open,
      size,
      style,
      ...rest
    } = this.props

    let width
    if (size != undefined) {
      switch (typeof size) {
        case 'number':
          width = size
          break
        case 'string':
          width = sizeSpec[size.toString().toUpperCase()]
          break
        default:
          width = undefined
          break
      }
    }
    if (rest) {
      delete rest.noClose
      delete rest.onClose
    }

    return open === false || this.state.closed ? null : (
      <div
        {...rest as any}
        className={`gerami-menu-drop${className ? ' ' + className : ''}`}
        style={Object.assign(
          {
            width: anchorOffset || 0
          },
          containerStyle
        )}
      >
        <div className={'gerami-background'} onClick={this.close} style={backgroundStyle} />
        <Content
          className={'gerami-menu'}
          style={Object.assign(
            {
              width: width,
              float: align || 'left'
            },
            style
          )}
        >
          {children}
        </Content>
      </div>
    )
  }

  close = () => {
    const { noClose, onClose } = this.props

    if (!noClose) {
      this.setState({ closed: false })
      if (typeof onClose === 'function') onClose()
    }
  }
}
