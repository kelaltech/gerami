import React from 'react'
interface ICheckBox {
  status: boolean
  checkMark: any
}
interface props {
  className: string
  checked?: string | boolean | number
}
export declare class CheckBox extends React.Component<props> {
  state: ICheckBox
  constructor(props: any)
  componentDidMount(): void
  toggleCheckbox(): void
  render(): JSX.Element
}
export {}
