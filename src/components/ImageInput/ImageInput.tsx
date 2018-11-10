import * as React from 'react'
import defaultPlaceholderSrc from './3.jpg'
import { Component, HTMLAttributes } from 'react'

export interface IImageInputProps extends HTMLAttributes<HTMLDivElement> {
  placeholderSrc?: string
  className?: string
  width?: number | string
  circular?: boolean
  borderRadius?: string | number
}

interface IImageInputState {}

export class ImageInput extends Component<IImageInputProps, IImageInputState> {
  state = {}

  render() {
    const { circular, placeholderSrc, width, borderRadius, ...rest } = this.props

    return (
      <div {...rest as any}>
        <div className={'gerami-imageInput-Camera-Image'}>
          <label htmlFor={'Cover'}>
            <img
              className={circular ? 'gerami-imageInput-image' : 'gerami-imageInput-image-input'}
              src={placeholderSrc || defaultPlaceholderSrc}
              width={width ? width : '100px'}
              height={width ? width : '100px'}
              style={borderRadius ? { borderRadius } : {}}
              alt="Insert image"
            />
          </label>
          <input
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

  private changeImg(e: any) {
    const file = e.target.files[0] as Blob
    if (!file) {
      //this.setState({ image: this.props.image?this.props.image:icon})
      return
    }
    const reader = new FileReader()
    reader.onload = ev => this.setState({ image: (ev.target as any).result })
    reader.readAsDataURL(file)
  }
}
