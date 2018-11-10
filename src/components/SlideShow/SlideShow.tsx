import React, { Component, HTMLAttributes } from 'react'

export interface ISlideShowProps extends HTMLAttributes<HTMLDivElement> {
  height?: number | string
  Images?: { Image: Object | string; Caption?: string }[]
  Data?: JSX.Element[]
  interval?: number
  autoplay?: boolean
  showControls?: boolean
  animation?: 'none' | 'fade'
}

interface ISlideShowState {}

export class SlideShow extends Component<ISlideShowProps, ISlideShowState> {
  state = {}

  slideIndex = 0

  componentDidMount() {
    if (this.props.autoplay != undefined) {
      this.automatic()
    } else this.slides(this.slideIndex)
  }

  render() {
    const { height, Images, Data, showControls, animation, ...rest } = this.props

    return (
      <div {...rest as any}>
        <div className="gerami-slideShow-SlideShowContainer">
          {Images ? (
            <div>
              {Images.map((Image: any) => (
                <div className={'gerami-slideShow-slides ' + animation}>
                  <img src={Image.Image} style={{ width: '100%' }} height={height || ''} />
                  <div className="gerami-slideShow-text">{Image.Caption}</div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}

          {Data ? (
            <div>
              {Data.map((Data: any) => (
                <div
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
              {Images ? (
                <div>
                  {Images.map((Image: any, index) => (
                    <span>
                      <span style={{ display: 'none' }}>
                        {' '}
                        <img src={Image.Image} />
                      </span>
                      <span
                        className={'gerami-slideShow-dot'}
                        onClick={() => this.currentSlide(index + 1)}
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
              {Data ? (
                <div>
                  {Data.map((Image: any, index) => (
                    <span>
                      <span style={{ display: 'none' }}>
                        {' '}
                        <img src={Image.Image} />
                      </span>
                      <span
                        className={'gerami-slideShow-dot'}
                        onClick={() => this.currentSlide(index + 1)}
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
