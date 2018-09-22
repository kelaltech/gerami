import React, {Component} from 'react'

import './Container.scss'

export class Container extends Component<any> {
  constructor(props:any) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>

      </div>
    )
  }
}
