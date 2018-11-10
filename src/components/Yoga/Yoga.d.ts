import { Component, HTMLAttributes } from 'react'
import { geramiSizeTypes } from '../../index'
export interface IYogaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of maximum items in a row (max number of columns).
   */
  maxCol: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  /**
   * Horizontal width (named 'geramiSizeTypes' or amount of pixels).
   */
  size?: geramiSizeTypes
}
interface IYogaState {}
/**
 * A responsive container that does not stretch its child elements to fill vacant spaces.
 */
export declare class Yoga extends Component<IYogaProps, IYogaState> {
  state: {}
  render(): JSX.Element
}
export {}
