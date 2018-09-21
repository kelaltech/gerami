import React, { Component } from 'react'

interface props {
  open: boolean
  width?: string | number
}

export class Dialog extends Component<props, any> {
  render() {
    return (
      <div className="gerami-modal center" style={{ display: this.props.open ? 'block' : 'none' }}>
        <div className="gerami-modal-content" style={{ width: this.props.width }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
