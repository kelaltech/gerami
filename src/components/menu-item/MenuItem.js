import React from 'react'

import './MenuItem.scss'
import { Anchor } from '../anchor/Anchor'

export const MenuItem = ({ children, className, ...rest }) => (
  <Anchor
    button
    {...rest}
    className={`menu-item${className ? ' ' + className : ''}`}
  >
    {children}
  </Anchor>
)
