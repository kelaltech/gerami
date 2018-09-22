import React, {Component} from 'react'

import './Flex.scss'

export class Flex extends Component<any> {
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
