import * as React from 'react'
import { Component } from 'react'
import './MenuDrop.scss'
import { Content } from '../..'

const sizeSpec = {
  XXS: 70,
  XS: 105,
  S: 140,
  M: 175,
  L: 210,
  XL: 245,
  XXL: 280,
  X3L: 315,
  X4L: 350,
  X5L: 385,
  X6L: 420,
  X7L: 455,
  X8L: 490,
  X9L: 525
}

export class MenuDrop extends Component<any, any> {
  constructor(props: any) {
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
    switch (typeof size) {
      case 'number':
        width = size
        break
      case 'string':
        width = sizeSpec[size.toUpperCase()]
        break
      default:
        width = undefined
        break
    }

    if (rest) {
      //@ts-ignore
      delete rest.noClose
      //@ts-ignore
      delete rest.onClose
    }

    return open === false || this.state.closed ? null : (
      <div
        {...rest}
        className={`menu-drop${className ? ' ' + className : ''}`}
        //@ts-ignore
        style={Object.assign(
          {
            width: anchorOffset || 0
          },
          containerStyle
        )}
      >
        <div
          className={'background'}
          onClick={this.close}
          style={backgroundStyle}
        />
        <Content
          className={'menu'}
          //@ts-ignore
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

  close() {
    const { noClose, onClose } = this.props

    if (noClose !== true) {
      this.setState({ closed: false })
      if (typeof onClose === 'function') onClose()
    }
  }
}
