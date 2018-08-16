import * as React from 'react'

import './MenuItem.scss'
import { Anchor } from '../..'

export class MenuItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const { children, className, ...rest } = this.props
    return (
      <Anchor button {...rest} className={`menu-item${className ? ' ' + className : ''}`}>
        {children}
      </Anchor>
    )
  }
}
