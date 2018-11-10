import React, { Component, createRef, TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  placeholder?: string
}

interface ITextAreaState {}

export class TextArea extends Component<ITextAreaProps, ITextAreaState> {
  state = {}

  textarea = createRef<HTMLTextAreaElement>()
  placeholder = createRef<HTMLDivElement>()

  get value(): string | null {
    return this.textarea.current && this.textarea.current.value
  }

  componentDidMount() {
    this.updateFloat()
  }

  render() {
    const { className, label, placeholder, ...rest } = this.props

    return (
      <label className={`gerami-label${className ? ' ' + className : ''}`}>
        <textarea
          className={'textarea'}
          {...rest as any}
          onBlur={this.updateFloat}
          onChange={this.updateFloat}
          onFocus={this.updateFloat}
          onKeyDown={this.updateFloat}
          onKeyUp={this.updateFloat}
          placeholder={''}
          ref={this.textarea}
        />
        <div className={'gerami-placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }

  updateFloat = (): void => {
    this.placeholder.current &&
      (this.placeholder.current.className = `gerami-placeholder ${this.value && 'gerami-float'}`)
  }
}
