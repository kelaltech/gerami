import React, { Component } from 'react'

export interface IDialogProps {
  open?: boolean
  width?: string | number
}

interface IDialogState {}

export class Dialog extends Component<IDialogProps, IDialogState> {
  state = {}

  render() {
    const { open, children, width } = this.props

    return (
      <div className="gerami-modal center" style={{ display: open ? 'block' : 'none' }}>
        <div className="gerami-modal-content" style={{ width }}>
          {children}
        </div>
      </div>
    )
  }
}
