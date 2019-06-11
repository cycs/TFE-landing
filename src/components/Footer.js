import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../svg/logo-footer.svg'

import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__ctn ctn'>
            <img className='footer__img' src={logo} alt="logo Caligo with underline"/>
            <ul className='footer__links'>
                <li className='footer__links__el'><a className='oldLace' href="https://github.com/cycs/Caligo">Github App</a></li>
                <li className='footer__links__el'><a className='oldLace' href="https://github.com/cycs/TFE-landing">Github Landing</a></li>
                <li className='footer__links__el'><Link className='oldLace' to="/about">&Agrave; Propos</Link></li>
                <li className='footer__links__el'><Link className='oldLace' to="/credits">Crédits</Link></li>
                <li className='footer__links__el'><a className='oldLace' href="https://medium.com/@christophersaenen/tfe-story-1-bb25f3f53680">Case Study</a></li>
                <li className='footer__links__el'><a className='oldLace' href="http://dwm.re/">DWM.re</a></li>    
            </ul>
        </div>
      </div>
    )
  }
}
