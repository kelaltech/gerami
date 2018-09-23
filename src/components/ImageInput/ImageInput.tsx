import * as React from 'react'
import './ImageInput.scss'
import icon from './3.jpg'
interface props {
  image?: Object
  className?: string
  width?: number | string
  circular?: boolean
  borderRadius?: string | number
}

export class ImageInput extends React.Component<props> {
  state = {
    image: this.props.image ? this.props.image : icon
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

  render() {
    return (
      <div>
        <div className={'Camera-Image'}>
          <label htmlFor={'Cover'}>
            <img
              className={this.props.circular ? 'image' : 'image-input'}
              src={this.state.image}
              width={this.props.width ? this.props.width : '100px'}
              height={this.props.width ? this.props.width : '100px'}
              style={this.props.borderRadius ? { borderRadius: this.props.borderRadius } : {}}
              alt="Insert image"
            />
          </label>
          <input
            className={'File none'}
            id="Cover"
            name="picture"
            onChange={(e: any) => {
              this.changeImg(e)
            }}
            type="file"
            required
          />
        </div>
      </div>
    )
  }
}
