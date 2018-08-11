import  { Component, createRef } from 'react'
import *as React from 'react'
import './Input.scss'

export class Input extends Component <any,any>{
  input:any= this.props.inputRef || createRef()
  placeholder:any = createRef();

  constructor(props) {
    super(props);
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
    } = this.props;

    //@ts-ignore
    !rest || delete rest.inputRef;
    return (
      <label className={`label${className ? ' ' + className : ''}`}>
        <input
          type={'text'}
          className={'input'}
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
        <div className={'placeholder'} ref={this.placeholder}>
          {placeholder || label}
        </div>
      </label>
    )
  }

  updateFloat() {
    this.placeholder.current.className = `placeholder${
      this.input.current.value ? ' float' : ''
    }`
  }

  get value() {
    return this.input.current.value
  }
}
