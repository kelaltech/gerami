import React, { Component, HTMLAttributes } from 'react'
import { MenuItem } from '../MenuItem/MenuItem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  placeholder?: string
  options: { name: string; value: string }[]
  multiple?: boolean
  selectedValue?: any
  size?: number | string
  name?: string
}

interface ISelectState {
  showOptions: boolean
  multipleSelectedItems: { name: string; value: string }[]
  singleSelectedItem: { name: string; value: string }
  options: { name: string; value: string }[]
  showPlaceholder: boolean
}

export class Select extends Component<ISelectProps, ISelectState> {
  state = {
    options: this.props.options || [],
    showOptions: false,
    multipleSelectedItems: [],
    singleSelectedItem: { name: '', value: '' },
    showPlaceholder: true
  }

  render() {
    const { className, placeholder, multiple, size, name, ...rest } = this.props
    const {
      options,
      showOptions,
      multipleSelectedItems,
      showPlaceholder,
      singleSelectedItem
    } = this.state

    delete rest.selectedValue

    return (
      <div
        style={{
          width: size ? size : ''
        }}
        className={`gerami-select-container ${className || ''}`}
        {...(rest as any)}
      >
        {/*select header*/}
        <div className={'gerami-select-header'} tabIndex={0}>
          <div className={'gerami-select-placeholder'} onClick={this.handleShow}>
            <span className={'gerami-selected-options-container'}>
              {multiple ? (
                multipleSelectedItems.map((option: { name: string; value: string }, i) => (
                  <span
                    key={i}
                    style={{
                      display: `${showPlaceholder ? 'none' : 'inline'}`
                    }}
                    className={'gerami-multi-option-container'}
                  >
                    <span className={'gerami-multi-option'}>
                      {option.name}
                      <span onClick={() => this.handleDisSelect(option)}>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </span>
                  </span>
                ))
              ) : (
                <span
                  className={'gerami-single-option-container'}
                  onClick={() => this.handleDisSelect(singleSelectedItem)}
                  style={{
                    display: `${showPlaceholder ? 'none' : 'inline'}`
                  }}
                >
                  {singleSelectedItem.name}
                </span>
              )}
              <span>{showPlaceholder ? `${placeholder || 'Select...'}` : ''}</span>
            </span>
          </div>
          <div className={'gerami-arrow-container'}>
            {showPlaceholder ? null : (
              <i className={'fa fa-times gerami-cancel-all'} onClick={this.clearAllSelection} />
            )}
            {showOptions ? (
              <i className={'fa fa-chevron-up'} onClick={this.dropDown} />
            ) : (
              <i className={'fa fa-chevron-down'} onClick={this.dropDown} />
            )}
          </div>
        </div>

        {/*input field*/}
        <input
          type={'hidden'}
          name={name ? name : ''}
          value={multiple ? '' : singleSelectedItem.value}
        />

        <div
          onClick={this.dropDown}
          style={{
            display: showOptions ? 'block' : 'none'
          }}
          className={'gerami-background-container'}
        />
        {/*option container*/}

        <div
          className={'gerami-options-container-big'}
          style={{
            display: showOptions ? 'block' : 'none'
          }}
        >
          <div className={'gerami-options-container'}>
            {options.map((option, i) => (
              <MenuItem key={i} onClick={() => this.handleSelectedOption(option)}>
                {option.name}
              </MenuItem>
            ))}
          </div>
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
      singleSelectedItem: { name: '', value: '' },
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

      this.setState({
        multipleSelectedItems: arr
      })
      if (arr.length == 0) {
        this.setState({
          showPlaceholder: true
        })
      }

      this.setState({
        options: this.state.options.concat(option)
      })
      this.props.selectedValue(arr)
    }
  }

  handleSelectedOption = (option: any) => {
    this.state.showPlaceholder = false
    if (this.props.multiple) {
      let selectedItems: {
        name: string
        value: string
      }[] = this.state.multipleSelectedItems.concat(option)
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
      this.dropDown()
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
