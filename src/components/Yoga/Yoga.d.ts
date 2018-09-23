import React, { Component } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IYogaProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Number of maximum items in a row (max number of columns).
   */
  maxCol: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  /**
   * Horizontal width (named 'geramiSizeTypes' or amount of pixels).
   */
  size?: geramiSizeTypes
}
export interface IYogaState {}
/**
 * A responsive container that does not stretch its child elements to fill vacant spaces.
 */
export declare class Yoga extends Component<IYogaProps, IYogaState> {
  render(): JSX.Element
}
