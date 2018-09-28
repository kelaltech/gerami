import React, { Component } from 'react'

interface IRadio {
  status: boolean
}

interface props {
  className?: string
  value?: string
}

export class Toggle extends Component<props, any> {
  state: IRadio = {
    status: false
  }

  constructor(props: any) {
    super(props)
    this.state = {
      status: false
    }
  }

  f() {
    if (!this.state.status) {
      this.setState({
        status: true
      })
    } else {
      this.setState({
        status: false
      })
    }
  }

  render() {
    const x = ''
    const { className } = this.props
    return (
      <label className={'switch'}>
        <input type={'checkbox'} onClick={this.f.bind(this)} />
        <span className={`span${className ? ' ' + className : ''}  `}>{x}</span>
      </label>
    )
  }
}
