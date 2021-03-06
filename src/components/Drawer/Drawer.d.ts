import React, { Component, CSSProperties } from 'react'
import { geramiSizeTypes } from '../../index'
import { Content, IContentProps } from '../Content/Content.js'
export interface IDrawerProps extends IContentProps {
  /**
   * Decides whether the dialog opens from the left or the right.
   */
  align: 'left' | 'right'
  /**
   * CSS style for the darkened background.
   */
  backgroundStyle?: CSSProperties
  /**
   * CSS style for the container of the entire Drawer.
   * The container holds the darkened background and the Drawer content in it.
   */
  containerStyle?: CSSProperties
  /**
   * Decides whether the Drawer is visible or hidden.
   */
  open?: boolean
  /**
   * To prevent closing the Drawer by clicking the darkened background.
   */
  noClose?: boolean
  /**
   * An function that gets called back when the Drawer is closed.
   */
  onClose?: Function
  /**
   * Horizontal width (named 'geramiSizeTypes' or amount of pixels).
   */
  size?: geramiSizeTypes
}
interface IDrawerState {
  closed: boolean
}
/**
 * A Drawer gerami components. (sometimes a.k.a side bar). It hides and shows.
 */
export declare class Drawer extends Component<IDrawerProps, IDrawerState> {
  state: {
    closed: boolean
  }
  drawerRef: React.RefObject<Content>
  componentDidUpdate(): void
  render(): JSX.Element | null
  close: () => void
}
export {}
