import React, { Component } from 'react'

import img1 from '../img/001.png'
import img2 from '../img/002.png'
import img3 from '../img/003.png'
import TimelineMax from "gsap/TimelineMax";
import TweenMax from "gsap/TweenMax";
import {  Power2 } from "gsap";

import './Principles.css'

export default class Principles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numberOfSlides: null,
            activeSlide: 0,
            disabled: false
        }

        this.titles = []
        this.imgs = []
        this.texts = []
        this.principles = []
        this.scaledown = 0.94

        /* Bindings
        --------------------------------------------------------- */
        this.nextSlide = this.nextSlide.bind(this)
        this.finishedTL = this.finishedTL.bind(this)
    }

    componentDidMount() {
        const numberOfSlides = document.querySelectorAll('.principle__content').length

        this.setState({ numberOfSlides })

        this.imgs.forEach(img => {
            TweenMax.set(img, {scale: this.scaledown, opacity: 0})
        })
        this.titles.forEach(title => {
            TweenMax.set(title, {y:'-40%', scale: .94, opacity: 0})
        })
        this.texts.forEach(text => {
            TweenMax.set(text, {y:'-40%', scale: .94, opacity: 0})
        })

        TweenMax.set(this.principles[0], {display: 'flex'})
        TweenMax.set(this.imgs[0], {scale: 1, opacity:1})
        TweenMax.set(this.titles[0], {y: '0%', scale: 1, opacity:1})
        TweenMax.set(this.texts[0], {y: '0%', scale: 1, opacity:1})
        
    }

    render() {
    return (
      <div className='principle ctn' id='principles'>
        <h2 className='principle__title subtitle'>Comment ça marche</h2>  
        <div ref={ref => this.principles[0] = ref} className={`principle__content ${this.state.activeSlide === 0 ? 'principle__content--active' : ''}`}>
            <div className='principle__img__ctn col col-6'>
                <img ref={ref => this.imgs[0] = ref} className='principle__img' src={img1} alt=""/>
            </div>
            <div className='principle__desc col col-6'>
                <h3 ref={ref => this.titles[0] = ref} className='principle__subtitle'>La Belgique, ton nouveau terrain de jeu.</h3>
                <p ref={ref => this.texts[0] = ref} >Visualise en temps réel tous les endroits visités. Déplace-toi et regarde la carte se dévoiler.</p>
            </div>
        </div>
        <div ref={ref => this.principles[1] = ref} className={`principle__content ${this.state.activeSlide === 1 ? 'principle__content--active' : ''}`}>
            <div className='principle__img__ctn col col-6'>
                <img ref={ref => this.imgs[1] = ref} className='principle__img' src={img2} alt=""/>
            </div>
            <div className='principle__desc col col-6'>
                <h3 ref={ref => this.titles[1] = ref} className='principle__subtitle'>Suis ta progression, commune par commune.</h3>
                <p ref={ref => this.texts[1] = ref}>Chaque zone possède des informations détaillées te permettant de savoir où tu en es à tout moment.</p>
            </div>
        </div>
        <div ref={ref => this.principles[2] = ref} className={`principle__content ${this.state.activeSlide === 2 ? 'principle__content--active' : ''}`}>
            <div className='principle__img__ctn col col-6'>
                <img ref={ref => this.imgs[2] = ref} className='principle__img' src={img3} alt=""/>
            </div>
            <div className='principle__desc col col-6'>
                <h3 ref={ref => this.titles[2] = ref} className='principle__subtitle'>Explore et gagne des centaines de badges.</h3>
                <p ref={ref => this.texts[2] = ref}>Les succès te permettent d'avoir des objectifs à court, moyen et long terme. Diversifie ton exploration et sois-en récompensé.</p>
            </div>
        </div>
        {/* <button onClick={this.nextSlide} disabled={this.state.disabled}>Next</button> */}
        <ul className='principle__nav'>
            <li className={`principle__nav__el ${this.state.activeSlide === 0 ? 'principle__nav__el--active' : ''}`} onClick={this.nextSlide.bind(this, 0)}></li>
            <li className={`principle__nav__el ${this.state.activeSlide === 1 ? 'principle__nav__el--active' : ''}`} onClick={this.nextSlide.bind(this, 1)}></li>
            <li className={`principle__nav__el ${this.state.activeSlide === 2 ? 'principle__nav__el--active' : ''}`} onClick={this.nextSlide.bind(this, 2)}></li>
        </ul>
      </div>
    )
  }

  nextSlide(index) {
      const previousSlide = this.state.activeSlide
      const activeSlide = index

      if(previousSlide === index) return

      this.setState({ activeSlide, disabled: true })    
      
      const principlePrev = this.principles[previousSlide]
      const principle = this.principles[activeSlide]

      const imgPrev = this.imgs[previousSlide]
      const img = this.imgs[activeSlide]

      const titlePrev = this.titles[previousSlide]
      const title = this.titles[activeSlide]

      const textPrev = this.texts[previousSlide]
      const text = this.texts[activeSlide]

      const TL = new TimelineMax({delay:0.5, onComplete:this.finishedTL.bind(this, index)});
      const dur = .4;

        TL
            .to(imgPrev, dur, {
                scale: this.scaledown,
                opacity: 0,
                display: 'flex',
                ease: Power2.ease
                
            }, 0)
            .to(titlePrev, dur, {
                y: '-40%',
                opacity: 0,
                scale: .98,
                ease: Power2.ease
            }, 0+.2)
            .to(textPrev, dur, {
                y: '-40%',
                opacity: 0,
                scale: .98,
                ease: Power2.ease
            }, 0+.4)
            .to(principlePrev, 0, {
                display: 'none',
            })
            .to(principle, 0, {
                display: 'flex',
            })
            .to(img, dur, {
                scale: 1,
                opacity: 1,
                ease: Power2.ease
            }, dur)
            .to(title, dur, {
                y: '0%',
                opacity: 1,
                scale: 1,
                ease: Power2.ease
            }, dur+.2)
            .to(text, dur, {
                y: '0%',
                opacity: 1,
                scale: 1,
                ease: Power2.ease
            }, dur+.4)

  }

  finishedTL(activeSlide) {
    this.setState({ disabled: false, activeSlide })        
  }
}
