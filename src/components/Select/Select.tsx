import React, { Component, HTMLAttributes } from 'react'

export interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  placeholder?: string
  options: any[]
  multiple?: boolean
  selectedValue?: any
  minWidth?: number | string
  maxWidth?: number | string
  size?: number | string
}

interface ISelectState {
  showOptions: boolean
  multipleSelectedItems: any[]
  singleSelectedItem: any
  options: any[]
  showPlaceholder: boolean
}

export class Select extends Component<ISelectProps, ISelectState> {
  state = {
    options: this.props.options || [],
    showOptions: false,
    multipleSelectedItems: [],
    singleSelectedItem: null,
    showPlaceholder: true
  }

  render() {
    const { className, placeholder, multiple, maxWidth, minWidth, size, ...rest } = this.props
    const { options } = this.state

    return (
      <div
        style={{
          width: size ? size : '',
          minWidth: minWidth ? minWidth : '230px',
          maxWidth: maxWidth ? maxWidth : '300px'
        }}
        className={`gerami-select-container ${className || ''}`}
        {...rest as any}
      >
        <div className={'gerami-select-header'}>
          <div className={'gerami-select-placeholder'} onClick={this.handleShow}>
            <span className={'gerami-selected-options-container'}>
              {multiple ? (
                this.state.multipleSelectedItems.map((option, key) => (
                  <span
                    key={key}
                    style={{
                      display: `${this.state.showPlaceholder ? 'none' : 'inline'}`
                    }}
                    className={'gerami-multi-option-container'}
                  >
                    <span className={'gerami-multi-option'}>
                      {option}
                      <i className={'fa fa-times'} onClick={() => this.handleDisSelect(option)} />
                    </span>
                  </span>
                ))
              ) : (
                <span
                  className={'gerami-single-option-container'}
                  onClick={() => this.handleDisSelect(this.state.singleSelectedItem)}
                  style={{
                    display: `${this.state.showPlaceholder ? 'none' : 'inline'}`
                  }}
                >
                  {this.state.singleSelectedItem}
                </span>
              )}
              <span>{this.state.showPlaceholder ? `${placeholder || 'Select...'}` : ''}</span>
            </span>
          </div>
          <div className={'gerami-arrow-container'}>
            {this.state.showPlaceholder ? null : (
              <i className={'fa fa-times gerami-cancel-all'} onClick={this.clearAllSelection} />
            )}
            {this.state.showOptions ? (
              <i className={'fa fa-chevron-up'} onClick={this.dropDown} />
            ) : (
              <i className={'fa fa-chevron-down'} onClick={this.dropDown} />
            )}
          </div>
        </div>

        {/*option container*/}
        <div
          className={'gerami-options-container'}
          style={{
            width: size ? size : '',
            display: this.state.showOptions ? 'block' : 'none'
          }}
        >
          {options.map((option, key) => (
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

  clearAllSelection = () => {
    this.setState({
      options: this.props.options || [],
      showOptions: false,
      multipleSelectedItems: [],
      singleSelectedItem: null,
      showPlaceholder: true
    })
    this.props.selectedValue()
  }

  dropDown = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }))
  }

  handleDisSelect = (option: any) => {
    if (this.props.multiple) {
      let arr = this.state.multipleSelectedItems.filter(item => item !== option)
      arr.length == 0 && this.state.singleSelectedItem == null
        ? (this.state.showPlaceholder = true)
        : (this.state.showPlaceholder = false)
      this.setState({
        multipleSelectedItems: arr
      })

      this.setState({
        options: this.state.options.concat(option)
      })
      this.props.selectedValue(arr)
    }
  }

  handleSelectedOption = (option: any) => {
    this.state.showPlaceholder = false
    if (this.props.multiple) {
      let selectedItems: any = this.state.multipleSelectedItems.concat(option)
      this.setState({
        multipleSelectedItems: selectedItems
      })
      this.props.selectedValue(selectedItems)

      this.setState({
        options: this.state.options.filter(item => item !== option)
      })
    } else {
      this.setState({
        singleSelectedItem: option
      })
      this.props.selectedValue(option)
    }

    //comment
    /*   this.props.multiple
      ? ( this.setState({
          multipleSelectedItems: this.state.multipleSelectedItems.concat(option)
        }),
      this.props.selectedValue(this.state.multipleSelectedItems)
      )
      : (this.setState({
          singleSelectedItem: option
        }),
    this.props.selectedValue(option)
      )*/
  }
}
