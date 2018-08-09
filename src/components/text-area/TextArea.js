import React, { Component, createRef } from 'react'

import './TextArea.scss'

export class TextArea extends Component {
  textarea = createRef()
  placeholder = createRef()

  constructor(props) {
    super(props)

    this.updateFloat = this.updateFloat.bind(this)
  }

  componentDidMount() {
    this.updateFloat()
  }

  render() {
    const { className, label, placeholder, ...rest } = this.props

    return (
      <label className={`label${className ? ' ' + className : ''}`}>
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
        <div className={'placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }

  updateFloat() {
    this.placeholder.current.className = `placeholder${
      this.textarea.current.value ? ' float' : ''
    }`
  }

  get value() {
    return this.textarea.current.value
  }
}
