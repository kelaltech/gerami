import * as React from 'react'
import './Dialog.scss'

export class Dialog extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div className="modal center" style={{ display: this.props.open ? 'block' : 'none' }}>
        <div className="modal-content" style={{ width: this.props.width }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
