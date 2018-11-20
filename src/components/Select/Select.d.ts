import { Component, HTMLAttributes } from 'react'
export interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  placeholder?: string
  options: {
    name: string
    value: string
  }[]
  multiple?: boolean
  selectedValue?: any
  size?: number | string
}
interface ISelectState {
  showOptions: boolean
  multipleSelectedItems: {
    name: string
    value: string
  }[]
  singleSelectedItem: {
    name: string
    value: string
  }
  options: {
    name: string
    value: string
  }[]
  showPlaceholder: boolean
}
export declare class Select extends Component<ISelectProps, ISelectState> {
  state: {
    options: {
      name: string
      value: string
    }[]
    showOptions: boolean
    multipleSelectedItems: never[]
    singleSelectedItem: {
      name: string
      value: string
    }
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
