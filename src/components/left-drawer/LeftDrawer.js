import React, { Component, createRef } from 'react'
import './LeftDrawer.scss'

import { Content } from '../content/Content'

const sizeSpec = {
  XXS: 175,
  XS: 210,
  S: 245,
  M: 280,
  L: 315,
  XL: 350,
  XXL: 385,
  X3L: 420,
  X4L: 455,
  X5L: 490,
  X6L: 525,
  X7L: 560,
  X8L: 595,
  X9L: 630
}

export class LeftDrawer extends Component {
  leftDrawer = createRef()

  constructor(props) {
    super(props)

    this.state = {
      closed: this.props.open === false
    }

    this.close = this.close.bind(this)
  }

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

    let maxWidth
    switch (typeof size) {
      case 'number':
        maxWidth = size
        break
      case 'string':
        maxWidth = sizeSpec[size.toUpperCase()]
        break
      default:
        maxWidth = undefined
        break
    }

    if (rest) {
      delete rest.noClose
      delete rest.onClose
    }

    return open === false || this.state.closed ? null : (
      <div className={'left-drawer-container'} style={containerStyle}>
        <div
          className={'left-drawer-background'}
          onClick={this.close}
          style={backgroundStyle}
        />
        <Content
          {...rest}
          className={`left-drawer${className ? ' ' + className : ''}`}
          ref={this.leftDrawer}
          style={Object.assign(
            typeof align === 'string' && align.toLowerCase() === 'right'
              ? { right: 0 }
              : { left: 0 },
            { maxWidth: maxWidth },
            style
          )}
        >
          {children}
        </Content>
      </div>
    )
  }

  close() {
    const { noClose, onClose } = this.props

    if (noClose !== true) {
      this.setState({ closed: false })
      if (typeof onClose === 'function') onClose()
    }
  }
}
