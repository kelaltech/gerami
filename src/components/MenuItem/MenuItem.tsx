import React, { Component } from 'react'
import { Anchor } from '../Anchor/Anchor'

interface props {
  className?: string
}

export class MenuItem extends Component<props> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { children, className, ...rest } = this.props
    return (
      <Anchor button {...rest} className={`gerami-menu-item${className ? ' ' + className : ''}`}>
        {children}
      </Anchor>
    )
  }
}
