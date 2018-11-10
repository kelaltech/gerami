import { Component, HTMLAttributes } from 'react'
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
export declare class Select extends Component<ISelectProps, ISelectState> {
  state: {
    options: any[]
    showOptions: boolean
    multipleSelectedItems: never[]
    singleSelectedItem: null
    showPlaceholder: boolean
  }
  render(): JSX.Element
  handleShow: () => void
  clearAllSelection: () => void
  dropDown: () => void
  handleDisSelect: (option: any) => void
  handleSelectedOption: (option: any) => void
}
export {}
