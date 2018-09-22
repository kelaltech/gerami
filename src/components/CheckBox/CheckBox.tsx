import React from 'react'

import './CheckBox.scss'

interface ICheckBox {
  status : false,
  checkMark : any
}

export class CheckBox extends React.Component<any>{
  state: ICheckBox = {
    status : false,
    checkMark : null
  }

  constructor (props:any) {
    super(props);
    this.state = {
      status : false,
      checkMark : null
    }

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

    console.log(this.props.checked);
  }

  componentDidMount() {
    this.setState({checkMark : document.getElementById(this.props.className + 'check-mark')})
  }


  toggleCheckbox () { //TODO Figure out a way to enable and disable the checkboxes
    const checkMark = this.state.checkMark

    if (checkMark.style.backgroundColor === "rgb(238, 238, 238)") {
      console.log("Checkbox clicked when on true");
      checkMark.style.backgroundColor = "rgb(0, 180, 120)";
      this.setState({
        status: true
      });
    }
    else {
      this.setState({
        status: false
      });
      checkMark.style.backgroundColor = "#eee";
    }
  }

  render () {
    return (
      <div className={this.props.className + " button-container"} style={this.props.style}>
        <input type="checkbox" checked={this.props.checked} onClick={this.toggleCheckbox.bind(this)} className={"input-element"}/>
        <span className="check-mark" id={this.props.className + "check-mark"} onClick={this.toggleCheckbox.bind(this)}></span>
      </div>
    )
  }
}
