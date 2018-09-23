import React, { Component, createRef } from 'react'
import { geramiSizeTypes } from '../../index'
import { Content, IContentProps } from '../Content/Content.js'

const sizeSpec = {
  XXS: 175,
  XS: 210,
  S: 245,
  M: 280,
  L: 315,
  XL: 350,
  XXL: 385,
  '3XL': 420,
  '4XL': 455,
  '5XL': 490,
  '6XL': 525,
  '7XL': 560,
  '8XL': 595,
  '9XL': 630
}

export interface IDrawerProps extends IContentProps {
  align: 'left' | 'right'
  backgroundStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  open?: boolean
  noClose?: boolean
  onClose?: () => any
  size?: geramiSizeTypes
}

export interface IDrawerState {
  closed: boolean
}

export class Drawer extends Component<IDrawerProps, IDrawerState> {
  state = {
    closed: !this.props.open
  }

  drawerRef: any = createRef()

  componentDidUpdate() {
    if (this.state.closed !== (this.props.open === false))
      this.setState({ closed: this.props.open === false })
  }

  render() {
    const {
      align,
      backgroundStyle,
      children,
      className,
      containerStyle,
      open,
      size,
      style,
      ...rest
    } = this.props

    const maxWidth = size && (typeof size === 'string' ? sizeSpec[size] : size)

    if (rest) {
      delete rest.noClose
      delete rest.onClose
    }

    return !open || this.state.closed ? null : (
      <div className={'gerami-drawer-container'} style={containerStyle}>
        <div className={'gerami-drawer-background'} onClick={this.close} style={backgroundStyle} />
        <Content
          {...rest}
          ref={this.drawerRef}
          className={`gerami-drawer gerami-drawer-animate-${align} ${className || ''}`}
          style={Object.assign(align === 'right' ? { right: 0 } : { left: 0 }, { maxWidth }, style)}
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
