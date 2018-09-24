import React, { Component } from 'react'

export class Toggle extends Component {
  render() {
    return (
      <label className={'switch'}>
        <input type={'checkbox'} />
        <div className={'slider'} />
      </label>
    )
  }
}
