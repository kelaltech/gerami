import React, { Component } from 'react'

interface IRadio {
  status: boolean
}

interface props {
  className?: string
  value?: string
  type?: string
  name?: string
}

export class Radio extends Component<props, any> {
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
    const { className, value, name, children } = this.props
    return (
      <div>
        <input
          className={`gerami-radio${className ? ' ' + className : ''}  `}
          type={'radio'}
          name={name}
          value={value}
          checked={this.state.status}
          onClick={this.f.bind(this)}
        />
        {name ? '' : null}
        {children}
      </div>
    )
  }
}
