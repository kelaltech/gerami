import React, {Component} from 'react'
import {render} from 'react-dom'

import {Sample} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>gerami Demo</h1>
      <Sample/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
