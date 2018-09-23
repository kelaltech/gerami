import { Component } from 'react'
export interface ISelectProps {
  className?: string
  placeholder?: string
  options: any[]
  multiple?: boolean
  selectedvalue?: any
}
export interface ISelectState {
  showOptions: boolean
  multipleSelectedItems: any[]
  singleSelectedItem: any
  options: any[]
  showPlaceholder: boolean
}
export declare class Select extends Component<ISelectProps, ISelectState> {
  constructor(props: any)
  state: {
    options: any[]
    showOptions: boolean
    multipleSelectedItems: never[]
    singleSelectedItem: null
    showPlaceholder: boolean
  }
  componentDidMount(): void
  render(): JSX.Element
  handleShow: () => void
  clearAllSelection: () => void
  dropDown: () => void
  handleDisSelect: (option: any) => void
  handleSelectedOption: (option: any) => void
}
