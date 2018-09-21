import React, { Component } from 'react'
export interface IYogaProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  maxCol: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  size?:
    | 'XXS'
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | '3XL'
    | '4XL'
    | '5XL'
    | '6XL'
    | '7XL'
    | '8XL'
    | '9XL'
    | number
}
export interface IYogaState {}
export declare class Yoga extends Component<IYogaProps, IYogaState> {
  render(): JSX.Element
}
