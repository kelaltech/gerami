import React, { Component, CSSProperties, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'
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

export interface IMenuDropProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'right'
  anchorOffset?: string | number
  backgroundStyle?: CSSProperties
  containerStyle?: CSSProperties
  open: boolean
  noClose?: boolean
  onClose?: () => any
  size?: geramiSizeTypes
}

interface IMenuDropState {}

export class MenuDrop extends Component<IMenuDropProps, IMenuDropState> {
  state = {
    closed: !this.props.open
  }

  componentDidUpdate() {
    if (this.state.closed !== !this.props.open) this.setState({ closed: !this.props.open })
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

    const width = size && (typeof size === 'string' ? sizeSpec[size] : size)

    if (rest) {
      delete rest.noClose
      delete rest.onClose
    }

    return !open || this.state.closed ? null : (
      <div
        {...(rest as any)}
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
          style={Object.assign({ width, float: align || 'left' }, style)}
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
