import React, { Component } from 'react'

export interface ISelectProps {
  className?: string
  placeholder?: string
  options: any[]
  multiple?: boolean
}

export interface ISelectState {
  showOptions: boolean
  multipleSelectedItems: any[]
  singleSelectedItem: string
  options: any[]
}

export class Select extends Component<ISelectProps, ISelectState> {
  constructor(props: any) {
    super(props)
  }
  state = {
    options: this.props.options || [],
    showOptions: false,
    multipleSelectedItems: [],
    singleSelectedItem: this.props.placeholder || 'select any thing'
  }

  render() {
    const { className, placeholder, options, multiple, ...rest } = this.props
    return (
      <div className={'gerami-select-container'} {...rest}>
        <div className={'gerami-select-header'}>
          <div className={'gerami-select-placeholder'} onClick={this.handleShow}>
            {multiple ? (
              this.state.multipleSelectedItems.map((option, key) => (
                <div key={key} className={'gerami-multi'}>
                  <span
                    className={'gerami-dis-select'}
                    onClick={() => this.handleDisSelect(option)}
                  />
                  {option}
                </div>
              ))
            ) : (
              <div>{this.state.singleSelectedItem}</div>
            )}
          </div>
          <div className={'gerami-arrow-container'} onClick={this.dropDown}>
            {this.state.showOptions ? (
              <i className={'fa fa-chevron-up'} />
            ) : (
              <i className={'fa fa-chevron-down'} />
            )}
          </div>
        </div>
        <div
          className={'gerami-options-container'}
          style={{
            display: this.state.showOptions ? 'block' : 'none'
          }}
        >
          {this.props.options.map((option, key) => (
            <div key={key} onClick={() => this.handleSelectedOption(option)}>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  handleShow = () => {
    this.setState({
      showOptions: true
    })
  }
  dropDown = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }))
  }
  handleSelectedOption = (option: any) => {
    this.props.multiple
      ? this.setState({
          multipleSelectedItems: this.state.multipleSelectedItems.concat(option)
        })
      : this.setState({
          singleSelectedItem: option
        })
  }

  handleDisSelect = (option: any) => {
    this.setState({
      multipleSelectedItems: this.state.multipleSelectedItems.filter(item => item !== option)
    })
  }
}
