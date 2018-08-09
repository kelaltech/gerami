import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './_styles/index.scss'
import App from './_app/App'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#demo')
)
