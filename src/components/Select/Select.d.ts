import { Component } from 'react'
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
export declare class Select extends Component<ISelectProps, ISelectState> {
  constructor(props: any)
  state: {
    options: any[]
    showOptions: boolean
    multipleSelectedItems: never[]
    singleSelectedItem: string
  }
  render(): JSX.Element
  handleShow: () => void
  dropDown: () => void
  handleSelectedOption: (option: any) => void
  handleDisSelect: (option: any) => void
}
