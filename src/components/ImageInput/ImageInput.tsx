import * as React from 'react'
import { Component, createRef, InputHTMLAttributes, RefObject } from 'react'
import { Button } from '../Button/Button.js'
import defaultPlaceholderSrc from './3.jpg' // replace this with a font-awesome icon

export interface IImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  innerRef?: RefObject<HTMLInputElement>
  placeholderSrc?: string
  className?: string
  width?: number | string
  circular?: boolean
  borderRadius?: string | number
}

interface IImageInputState {
  image?: string
}

export class ImageInput extends Component<IImageInputProps, IImageInputState> {
  state = {
    image: undefined
  }

  innerRef = this.props.innerRef || createRef<HTMLInputElement>()

  get dataUrl(): string | null {
    return this.state.image || null
  }

  render() {
    const {
      circular,
      placeholderSrc,
      width,
      borderRadius,
      className,
      onChange,
      ...rest
    } = this.props

    return (
      <div>
        <div className={'gerami-imageInput-Camera-Image'}>
          <Button onClick={() => this.innerRef.current && this.innerRef.current.click()}>
            <img
              className={circular ? 'gerami-imageInput-image' : 'gerami-imageInput-image-input'}
              src={this.dataUrl || placeholderSrc || defaultPlaceholderSrc}
              width={width || '80px'}
              height={width || '60px'}
              style={borderRadius ? { borderRadius } : {}}
              alt="Choose Image"
            />
          </Button>
          <input
            name={'image'}
            {...rest as any}
            ref={this.innerRef}
            className={`gerami-imageInput-File gerami-imageInput-none ${className || ''}`}
            onChange={e => {
              this.changeImg(e)
              onChange && onChange(e)
            }}
            type="file"
            data-url={this.dataUrl}
          />
        </div>
      </div>
    )
  }

  private changeImg = (e: any): void => {
    const file = e.target.files[0] as Blob
    if (!file) {
      this.setState({ image: undefined })
      return
    }

    const reader = new FileReader()
    reader.onload = ev =>
      this.setState({
        image: (ev.target as any).result
      })
    reader.readAsDataURL(file)
  }
}
