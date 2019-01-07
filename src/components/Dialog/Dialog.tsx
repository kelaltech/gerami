import React, { Component, CSSProperties } from 'react'

export interface IDialogProps {
  open?: boolean
  style?: CSSProperties
  className?: string
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
}

//style,class, children, open, top, bottom, left, right

export class Dialog extends Component<IDialogProps, any> {
  render() {
    const { open, children, style, className, bottom } = this.props

    return (
      <div
        className="gerami-dialog-container"
        id={'gerami-dialog-container'}
        style={{ display: open ? 'block' : 'none' }}
        onClick={this.handleDialogContainer}
      >
        <div
          style={style}
          id={'gerami-dialog-box'}
          className={`gerami-dialog-box ${className ? className : ''} ${
            bottom ? 'gerami-bottom' : ''
          }`}
        >
          {children}
        </div>
      </div>
    )
  }

  handleDialogContainer = () => {
    let container: any = document.getElementById('gerami-dialog-container')
    container.style.display = 'none'
  }
}
