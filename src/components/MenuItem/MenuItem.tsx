import React, { Component } from 'react'
import './MenuItem.scss'
import { Anchor } from '../Anchor/Anchor'

export class MenuItem extends Component<any, any> {
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
