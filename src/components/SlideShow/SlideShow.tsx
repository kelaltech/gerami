import * as React from 'react'

interface props {
  className?: string
  height?: number | string
  Images?: { Image: Object | string; Caption?: string }[]
  Data?: JSX.Element[]
  interval?: number
  autoplay?: boolean
  showControls?: boolean
  animation?: 'none' | 'fade'
}

class SlideShow extends React.Component<props> {
  slideIndex = 0
  componentDidMount() {
    if (this.props.autoplay != undefined) {
      this.automatic()
    } else this.slides(this.slideIndex)
  }

  movement = (n: number) => {
    this.slides((this.slideIndex += n))
  }

  currentSlide = (n: number) => {
    this.slides((this.slideIndex = n))
  }

  automatic = () => {
    let x = document.getElementsByClassName('slides') as HTMLCollectionOf<HTMLElement>
    let dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    this.slideIndex++
    if (this.slideIndex > x.length) {
      this.slideIndex = 1
    }
    x[this.slideIndex - 1].style.display = 'block'
    dots[this.slideIndex - 1].className += ' active'
    if (this.props.interval != undefined) setTimeout(this.automatic, this.props.interval)
    else setTimeout(this.automatic, 2000)
  }

  slides = (n: number) => {
    let slides = document.getElementsByClassName('slides') as HTMLCollectionOf<HTMLElement>
    let dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }

    slides[this.slideIndex - 1].style.display = 'block'
    dots[this.slideIndex - 1].className += ' active'
  }

  render() {
    return (
      <div>
        <div className="SlideShowContainer">
          {this.props.Images ? (
            <div>
              {this.props.Images.map((Image: any) => (
                <div className={'slides ' + this.props.animation}>
                  <img
                    src={Image.Image}
                    style={{ width: '100%' }}
                    height={this.props.height ? this.props.height : ''}
                  />
                  <div className="text">{Image.Caption}</div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}

          {this.props.Data ? (
            <div>
              {this.props.Data.map((Data: any) => (
                <div ref={'slides'} className={'mySlides fade'}>
                  <div style={{ width: '100%' }}>{Data}</div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
          {this.props.showControls ? (
            <span>
              <a className={'prev'} onClick={() => this.movement(-1)}>
                {' '}
                &#10094;{' '}
              </a>
              <a className={'next'} onClick={() => this.movement(1)}>
                {' '}
                &#10095;
              </a>
            </span>
          ) : (
            ''
          )}
          {this.props.showControls ? (
            <div className={'dot-style'} style={{ textAlign: 'center' }}>
              {this.props.Images ? (
                <div>
                  {this.props.Images.map((Image: any, index) => (
                    <span>
                      <span style={{ display: 'none' }}>
                        {' '}
                        <img src={Image.Image} />
                      </span>
                      <span className={'dot'} onClick={() => this.currentSlide(index + 1)}>
                        {' '}
                      </span>
                    </span>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          ) : (
            <div className={'dot-style'} style={{ textAlign: 'center' }}>
              {this.props.Data ? (
                <div>
                  {this.props.Data.map((Image: any, index) => (
                    <span>
                      <span style={{ display: 'none' }}>
                        {' '}
                        <img src={Image.Image} />
                      </span>
                      <span className={'dot'} onClick={() => this.currentSlide(index + 1)}>
                        {' '}
                      </span>
                    </span>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
        <br />
      </div>
    )
  }
}
export { SlideShow }
