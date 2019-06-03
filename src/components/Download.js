import React, { Component } from 'react'
import TimelineMax from "gsap/TimelineMax";
import { Back } from "gsap";


import './Download.css'
import Button from './Button';

// import cloud from '../svg/cloud-reverse-gradient.svg'

export default class Download extends Component {
    constructor(props) {
        super(props)

        this.needle = null
    }
    componentDidMount() {
        const TL = new TimelineMax({delay: 5, repeat:-1});

        TL
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
            .to(this.needle, 2, {rotation: "+=30", transformOrigin:'center center', ease: Back.easeOut.config(1), delay:1})
    }

  render() {

    return (
      <div className='download' id='download'>
        <div className='download__ctn ctn'>
            {/* <h2 className='col-12'>Télécharge l'application</h2> */}
            <div className='download__content'>
            <svg className='download__clock' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
                <path d="M42.026 24.333c-1.448 5.792-4.155 18.6-15.719 16.168-8.5-1.789-13.473-7.635-15.719-16.168-2.273-8.635 7.635-13.923 15.72-16.168 8.363-2.324 17.885 7.505 15.718 16.168z" fill="#ffc400" opacity=".7"/>
                <path ref={ref => this.needle = ref} d="M14.816 31.305l2.312-1.539a2.631 2.631 0 0 0 1.013-1.287l.991-2.71a2.631 2.631 0 0 1 .526-.869l1.07-1.178a1.917 1.917 0 0 1 .981-.609 1.928 1.928 0 0 0 1.491-2.166 1.917 1.917 0 0 1 .218-1.134l.718-1.422a2.63 2.63 0 0 1 .623-.8l2.18-1.893a2.632 2.632 0 0 0 .84-1.406l.612-2.708-.627-.432-2.31 1.54a2.632 2.632 0 0 0-1.014 1.286l-.99 2.711a2.631 2.631 0 0 1-.527.868l-1.07 1.177a1.917 1.917 0 0 1-.982.61 1.928 1.928 0 0 0-1.49 2.165 1.917 1.917 0 0 1-.219 1.134l-.718 1.422a2.632 2.632 0 0 1-.623.8l-2.179 1.893a2.632 2.632 0 0 0-.84 1.406l-.613 2.708z" fill="#333"/>
                <circle cx="21.362" cy="21.055" r="15" stroke="#333" strokeMiterlimit="10" strokeWidth="3" fill="none"/><path fill="none" d="M0 0h43v43H0z"/>
            </svg>
                <p className='download__desc col-8 ctr'>Envie de commencer à explorer&nbsp;?</p>
                <p className='download__desc download__desc--down col-8 ctr'>Essaie Caligo dès maintenant&nbsp;!</p>
                <Button class='ctr' text="Télécharger" />
            </div>
        </div>
      </div>
    )
  }
}
