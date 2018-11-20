import * as React from 'react'
import { Component, createRef, InputHTMLAttributes, RefObject } from 'react'

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

  get imageUrl(): string | null {
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
          <label htmlFor={'Cover'}>
            {this.imageUrl ?
              <img
                className={circular ? 'gerami-imageInput-image' : 'gerami-imageInput-image-input'}
                src={this.imageUrl || placeholderSrc}
                width={width || '80px'}
                height={width || '80px'}
                style={borderRadius ? { borderRadius } : {}}
                alt="Choose Image"
              /> :
              <i className={"fas fa-camera fa-5x gerami-imageInput-image-input"}></i>
            }
          </label>
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
            id="Cover"
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
