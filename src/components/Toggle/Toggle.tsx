import React, { Component, InputHTMLAttributes } from 'react'

export interface IToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  value?: string
  selected?: boolean
}

interface IToggleState {
  status: boolean
}

export class Toggle extends Component<IToggleProps, IToggleState> {
  state = {
    status: this.props.selected || false
  }

  get value(): boolean {
    return this.state.status
  }

  render() {
    const { className, children, ...rest } = this.props

    return (
      <label className={'gerami-toggle-switch'}>
        {children}&nbsp;&nbsp;
        <span className={'gerami-toggle-left'}> </span>
        <input
          type={'checkbox'}
          {...(rest as any)}
          defaultChecked={this.value}
          onChange={this.toggle}
        />
        <span
          className={`gerami-toggle-span${className ? ' ' + className : ''}  ${
            this.state.status ? 'gerami-toggle-span-selected' : ''
          }`}
        >
          {' '}
        </span>
        <span className={'gerami-toggle-right'}> </span>
      </label>
    )
  }

  toggle = () => {
    this.setState(state => ({ status: !state.status }))
  }
}
