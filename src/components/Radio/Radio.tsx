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

    // delete rest.checked

    return (
      <label className={'gerami-radio'}>
        <input
          className={`gerami-radio${className ? ' ' + className : ''}  `}
          type={'radio'}
          name={name}
          value={value}
          defaultChecked={this.state.status}
          {...rest as any}
        />
        <span className={'checkmark'} />
        &emsp;&emsp;
        {children}
        {name ? '' : null}
      </label>
    )
  }
}
