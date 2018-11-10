import * as React from 'react'
import defaultPlaceholderSrc from './3.jpg'
import { Component, createRef, HTMLAttributes, RefObject } from 'react'

export interface IImageInputProps extends HTMLAttributes<HTMLDivElement> {
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

  get imageUrl(): string | null {
    return this.state.image || null
  }

  render() {
    const { circular, placeholderSrc, width, borderRadius, ...rest } = this.props

    return (
      <div {...rest as any}>
        <div className={'gerami-imageInput-Camera-Image'}>
          <label htmlFor={'Cover'}>
            <img
              className={circular ? 'gerami-imageInput-image' : 'gerami-imageInput-image-input'}
              src={this.imageUrl || placeholderSrc || defaultPlaceholderSrc}
              width={width ? width : '100px'}
              height={width ? width : '100px'}
              style={borderRadius ? { borderRadius } : {}}
              alt="Insert image"
            />
          </label>
          <input
            ref={this.innerRef}
            className={'gerami-imageInput-File gerami-imageInput-none'}
            id="Cover"
            name="picture"
            onChange={this.changeImg}
            type="file"
            required
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
