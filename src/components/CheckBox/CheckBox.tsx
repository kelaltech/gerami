import React, { Component, InputHTMLAttributes } from 'react'

export interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
}

interface ICheckBoxState {
  status: boolean
}

export class CheckBox extends Component<ICheckBoxProps, ICheckBoxState> {
  state = {
    status: this.props.checked || false
  }

  get value(): boolean {
    return this.state.status
  }

  render() {
    const { className, children, ...rest } = this.props
    const { status } = this.state

    delete rest.checked

    return (
      <div className={`gerami-checkbox ${className || ''}`} onClick={this.toggle}>
        <input
          className="gerami-checkbox-input"
          type="checkbox"
          checked={status}
          onChange={this.toggle}
          {...rest as any}
        />
        <span className="gerami-checkbox-span" />
        <span className="gerami-checkbox-child">{children}</span>
      </div>
    )
  }

  toggle = (): void => {
    this.setState(old => ({ status: !old.status }))
  }
}
