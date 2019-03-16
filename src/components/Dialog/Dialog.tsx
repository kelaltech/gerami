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

export class Dialog extends Component<IDialogProps, any> {
  constructor(props: IDialogProps) {
    super(props)
  }

  componentDidUpdate(props: IDialogProps) {
    console.log('component did update fired')
    let modal: any = document.getElementById('gerami-dialog-box')
    if (props.bottom) {
      modal.classList.add('anime-bottom')
    } else if (props.left) {
      modal.classList.add('anime-left')
    } else if (props.right) {
      modal.classList.add('anime-right')
    } else if (props.top) {
      modal.classList.add('anime-top')
    } else {
      modal.classList.remove('anime-right', 'anime-left', 'anime-top', 'anime-bottom')
    }
  }
  render() {
    const { open, children, style, className } = this.props

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
          className={`gerami-dialog-box ${className ? className : ''}`}
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
