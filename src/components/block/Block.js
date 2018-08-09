import React from 'react'

import './Block.scss'

export const Block = ({ children, className, first, last, ...rest }) => (
  <div
    style={{
      paddingTop: first ? 30 : 10,
      paddingBottom: last ? 30 : 10
    }}
    {...rest}
    className={`block${className ? ' ' + className : ''}`}
  >
    {children}
  </div>
)
