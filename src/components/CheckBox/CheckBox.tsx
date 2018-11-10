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

  render() {
    const { className, ...rest } = this.props
    const { status } = this.state

    return (
      <div className={`gerami-checkbox ${className || ''}`}>
        <input
          type="checkbox"
          checked={status}
          onClick={this.toggle}
          {...rest as any}
          className={'input-element'}
        />
        <span className="check-mark" onClick={this.toggle} />
      </div>
    )
  }

  toggle = (): void => {
    this.setState(old => ({ status: !old.status }))
  }
}
