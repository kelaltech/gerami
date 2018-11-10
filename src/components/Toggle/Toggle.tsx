import React, { Component, LabelHTMLAttributes } from 'react'

export interface IRadioProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  value?: string
  selected?: boolean
}

interface IRadioState {
  status: boolean
}

export class Toggle extends Component<IRadioProps, IRadioState> {
  state = {
    status: this.props.selected || false
  }

  get value(): boolean {
    return this.state.status
  }

  render() {
    const { className, children, ...rest } = this.props

    return (
      <label className={'switch'} {...rest as any}>
        <input type={'checkbox'} defaultChecked={this.value} onChange={this.toggle} />
        <span className={`span${className ? ' ' + className : ''}  `}>{children}</span>
      </label>
    )
  }

  toggle = () => {
    this.setState(state => ({ status: !state.status }))
  }
}
