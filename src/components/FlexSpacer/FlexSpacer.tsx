import React, { Component } from 'react'

export class FlexSpacer extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { className, ...rest } = this.props
    return <span className={`gerami-flex-spacer${className ? ' ' + className : ''}`} {...rest} />
  }
}
