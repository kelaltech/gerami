import React, { Component, createRef } from 'react'

interface props {
  className?: string
  label?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  inputRef?: any
}

export class Input extends Component<props> {
  input = this.props.inputRef || createRef()
  placeholder: any = createRef()

  constructor(props: any) {
    super(props)
    this.updateFloat = this.updateFloat.bind(this)
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

    //@ts-ignore
    !rest || delete rest.inputRef
    return (
      <label className={`gerami-label${className ? ' ' + className : ''}`}>
        <input
          type={'text'}
          className={'gerami-Input'}
          {...rest}
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
        <div className={'gerami-placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }

  updateFloat() {
    this.placeholder.current.className = `gerami-placeholder${
      this.input.current.value ? ' gerami-float' : ''
    }`
  }

  get value() {
    return this.input.current.value
  }
}
