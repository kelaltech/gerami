import React, { Component } from 'react'

import './Container.scss'

interface IContainer {
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  id: number
}

export class Container extends Component<any> {
  state: IContainer = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    id: Math.random()
  }

  constructor(props: any) {
    super(props)

    this.setState({
      paddingTop: this.props.top,
      paddingBottom: this.props.bottom,
      paddingLeft: this.props.left,
      paddingRight: this.props.right
    })
  }

  render() {
    return (
      <div
        className={
          this.props.className == undefined
            ? 'gerami-container'
            : this.props.className + ' gerami-container'
        }
        style={Object.assign(
          {
            paddingTop: this.state.paddingTop,
            paddingBottom: this.state.paddingBottom,
            paddingLeft: this.state.paddingLeft,
            paddingRight: this.state.paddingRight
          },
          this.props.style
        )}
      >
        {this.props.children}
      </div>
    )
  }
}
