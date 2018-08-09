import React from 'react'

import './FlexSpacer.scss'

export const FlexSpacer = ({ className, ...rest }) => (
  <span
    className={`flex-spacer${className ? ' ' + className : ''}`}
    {...rest}
  />
)
