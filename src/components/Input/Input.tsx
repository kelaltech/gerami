import React, { Component, createRef, InputHTMLAttributes, RefObject } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inputRef?: RefObject<HTMLInputElement>
}

interface IInputState {}

export class Input extends Component<IInputProps, IInputState> {
  state = {}

  input = this.props.inputRef || createRef<HTMLInputElement>()
  placeholder = createRef<HTMLDivElement>()

  get value(): string | null {
    return this.input.current && this.input.current.value
  }

  componentDidMount() {
    this.updateFloat()
  }

  render() {
    const {
      className,
      label,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      ...rest
    } = this.props

    delete rest.inputRef

    return (
      <label className={`gerami-input-label ${className || ''}`}>
        <input
          type={'text'}
          className={'gerami-input'}
          {...(rest as any)}
          onBlur={e => {
            this.updateFloat()
            !(typeof onBlur === 'function') || onBlur(e)
          }}
          onChange={e => {
            this.updateFloat()
            !(typeof onChange === 'function') || onChange(e)
          }}
          onFocus={e => {
            this.updateFloat()
            !(typeof onFocus === 'function') || onFocus(e)
          }}
          onKeyDown={e => {
            this.updateFloat()
            !(typeof onKeyDown === 'function') || onKeyDown(e)
          }}
          onKeyUp={e => {
            this.updateFloat()
            !(typeof onKeyUp === 'function') || onKeyUp(e)
          }}
          placeholder={''}
          ref={this.input}
        />
        <div className={'gerami-input-placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }

  updateFloat() {
    this.placeholder.current &&
      (this.placeholder.current.className = `gerami-input-placeholder ${this.value &&
        'gerami-input-float'}`)
  }
}
