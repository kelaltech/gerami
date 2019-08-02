import React, { Component, createRef, RefObject, TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  placeholder?: string
  innerRef?: RefObject<HTMLInputElement>
}

interface ITextAreaState {}

export class TextArea extends Component<ITextAreaProps, ITextAreaState> {
  state = {}

  textarea = this.props.innerRef || createRef<HTMLTextAreaElement>()
  placeholder = createRef<HTMLDivElement>()

  get value(): string | null {
    return this.textarea.current && this.textarea.current.value
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

    delete rest.innerRef

    return (
      <label className={`gerami-textarea-label${className ? ' ' + className : ''}`}>
        <textarea
          className={'gerami-textarea'}
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
          ref={this.textarea}
        />
        <div className={'gerami-textarea-placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }

  updateFloat = (): void => {
    this.placeholder.current &&
      (this.placeholder.current.className = `gerami-textarea-placeholder ${this.value &&
        'gerami-textarea-float'}`)
  }
}
