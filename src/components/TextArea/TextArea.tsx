import React, { Component, createRef } from 'react'
import './TextArea.scss'

interface props {
  className?: string
  label?: string
  placeholder?: string
}

export class TextArea extends Component<props> {
  textarea: any = createRef()
  placeholder: any = createRef()

  constructor(props: any) {
    super(props)

    this.updateFloat = this.updateFloat.bind(this)
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
          {...rest}
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

  updateFloat() {
    this.placeholder.current.className = `gerami-placeholder${
      this.textarea.current.value ? ' gerami-float' : ''
    }`
  }

  get value() {
    return this.textarea.current.value
  }
}
