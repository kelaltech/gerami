import React, { Component, InputHTMLAttributes } from 'react'

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  type?: string
  name?: string
}

interface IRadioState {
  status: boolean
}

export class Radio extends Component<IRadioProps, IRadioState> {
  state = {
    status: false
  }

  render() {
    const { className, value, name, children, ...rest } = this.props

    delete rest.checked

    return (
      <div>
        <input
          className={`gerami-radio${className ? ' ' + className : ''}  `}
          type={'radio'}
          name={name}
          value={value}
          defaultChecked={this.state.status}
          onClick={this.toggle}
          {...rest as any}
        />
        {name ? '' : null}
        {children}
      </div>
    )
  }

  toggle = () => {
    this.setState(old => ({ status: !old.status }))
  }
}
