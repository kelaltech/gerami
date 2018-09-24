import React, { Component } from 'react'

interface props {
  className?: string
  value?: string
  checked?: boolean
  type?: string | 'group'
}

export class Radio extends Component<props, any> {
  render() {
    const { className, checked, value, children } = this.props
    return (
      <div className={`gerami-radio${className ? ' ' + className : ''}  `}>
        <input type={'radio'} value={value} checked={checked} />
        {children}
      </div>
    )
  }
}
