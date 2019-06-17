import React, { Component, HTMLAttributes } from 'react'

export interface ISlideShowProps extends HTMLAttributes<HTMLDivElement> {
  height?: number | string
  images?: { image: string; caption?: string }[]
  data?: JSX.Element[]
  interval?: number
  autoPlay?: boolean
  showControls?: boolean
  animation?: 'none' | 'fade'
}

interface ISlideShowState {}

export class SlideShow extends Component<ISlideShowProps, ISlideShowState> {
  state = {}

  slideIndex = 0

  componentDidMount() {
    if (this.props.autoPlay != undefined) this.automatic()
    else this.slides(this.slideIndex)
  }

  render() {
    const { height, images, data, showControls, animation, ...rest } = this.props

    delete rest.inlist
    delete rest.autoPlay

    return (
      <div {...(rest as any)}>
        <div className="gerami-slideShow-SlideShowContainer">
          {images ? (
            <div>
              {images.map((Image, i) => (
                <div
                  key={i}
                  className={'gerami-slideShow-slides ' + animation}
                  style={{
                    backgroundImage: `url(${Image.image})`,
                    height: height || '600px'
                  }}
                >
                  <div className="gerami-slideShow-text">{Image.caption}</div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}

          {data ? (
            <div>
              {data.map((Data, i) => (
                <div
                  key={i}
                  ref={'gerami-slideShow-slides'}
                  className={'gerami-slideShow-mySlides gerami-slideShow-fade'}
                >
                  <div style={{ width: '100%' }}>{Data}</div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
          {showControls ? (
            <span>
              <a className={'gerami-slideShow-prev'} onClick={() => this.movement(-1)}>
                {' '}
                &#10094;{' '}
              </a>
              <a className={'gerami-slideShow-next'} onClick={() => this.movement(1)}>
                {' '}
                &#10095;
              </a>
            </span>
          ) : (
            ''
          )}
          {showControls ? (
            <div className={'gerami-slideShow-dot-style'} style={{ textAlign: 'center' }}>
              {images ? (
                <div>
                  {images.map((Image, i) => (
                    <span key={i}>
                      <span style={{ display: 'none' }}>
                        {' '}
                        <img src={Image.image} />
                      </span>
                      <span
                        className={'gerami-slideShow-dot'}
                        onClick={() => this.currentSlide(i + 1)}
                      >
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
            <div className={'gerami-slideShow-dot-style'} style={{ textAlign: 'center' }}>
              {data ? (
                <div>
                  {data.map((Image, i) => (
                    <span key={i}>
                      <span style={{ display: 'none' }}>
                        {' '}
                        <img src={(Image as any).image} /> {/* todo: test this line */}
                      </span>
                      <span
                        className={'gerami-slideShow-dot'}
                        onClick={() => this.currentSlide(i + 1)}
                      >
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

  movement = (n: number) => {
    this.slides((this.slideIndex += n))
  }

  currentSlide = (n: number) => {
    this.slides((this.slideIndex = n))
  }

  automatic = () => {
    let x = document.getElementsByClassName('gerami-slideShow-slides') as HTMLCollectionOf<
      HTMLElement
    >
    let dots = document.getElementsByClassName('gerami-slideShow-dot') as HTMLCollectionOf<
      HTMLElement
    >
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('gerami-slideShow-active', '')
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
    let slides = document.getElementsByClassName('gerami-slideShow-slides') as HTMLCollectionOf<
      HTMLElement
    >
    let dots = document.getElementsByClassName('gerami-slideShow-dot') as HTMLCollectionOf<
      HTMLElement
    >
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
      dots[i].className = dots[i].className.replace('gerami-slideShow-active', '')
    }

    slides[this.slideIndex - 1].style.display = 'block'
    dots[this.slideIndex - 1].className += ' active'
  }
}
