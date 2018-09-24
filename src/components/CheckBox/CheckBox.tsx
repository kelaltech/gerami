import React from 'react'
import './CheckBox.scss'

interface ICheckBox {
  status: boolean
  checkMark: any
}

interface props {
  className: string
  checked?: string | boolean | number
}

export class CheckBox extends React.Component<props> {
  state: ICheckBox = {
    status: false,
    checkMark: null
  }

  constructor(props: any) {
    super(props)
    this.state = {
      status: false,
      checkMark: null
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this)

    const checked = this.props.checked
    let status

    switch (typeof checked) {
      case 'number':
        if (checked === 0) status = true
        else status = true
        break
      case 'string':
        if (checked === 'true') status = true
        else if (checked === 'false') status = false
        break
      case 'boolean':
        status = checked
        break
      default:
        status = false
        break
    }

    this.setState({
      status: status
    })

    console.log(this.props.checked)
  }

  componentDidMount() {
    this.setState({
      status: this.props.checked,
      checkMark: document.getElementById(this.props.className + 'check-mark')
    })
  }

  toggleCheckbox() {
    const checkMark = this.state.checkMark

    if (!this.state.status) {
      checkMark.style.backgroundColor = 'rgb(0, 180, 120)'
      this.setState({
        status: true
      })
    } else {
      this.setState({
        status: false
      })
      checkMark.style.backgroundColor = '#eee'
    }
  }

  render() {
    return (
      <div
        className={
          this.props.className == undefined
            ? 'gerami-checkbox'
            : this.props.className + ' gerami-checkbox'
        }
      >
        <input
          type="checkbox"
          checked={this.state.status}
          onClick={this.toggleCheckbox.bind(this)}
          className={'input-element'}
        />
        <span
          className="check-mark"
          id={this.props.className + 'check-mark'}
          onClick={this.toggleCheckbox}
        />
      </div>
    )
  }
}
