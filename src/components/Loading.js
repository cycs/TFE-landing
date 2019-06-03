import React, { Component } from 'react'
import './Loading.css'

// import logo from '../svg/logo-caligo.svg'

export default class Loading extends Component {
  render() {
    return (
      <div className='loading'>
        <svg className='loading__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
            <path d="M42.026 24.333c-1.448 5.792-4.155 18.6-15.719 16.168-8.5-1.789-13.473-7.635-15.719-16.168-2.273-8.635 7.635-13.923 15.72-16.168 8.363-2.324 17.885 7.505 15.718 16.168z" style={{fill:"#ffc400", opacity:".7"}}/>
            <path className="loading__logo__arrow" d="M14.816 31.305l2.312-1.539a2.631 2.631 0 0 0 1.013-1.287l.991-2.71a2.631 2.631 0 0 1 .526-.869l1.07-1.178a1.917 1.917 0 0 1 .981-.609 1.928 1.928 0 0 0 1.491-2.166 1.917 1.917 0 0 1 .218-1.134l.718-1.422a2.63 2.63 0 0 1 .623-.8l2.18-1.893a2.632 2.632 0 0 0 .84-1.406l.612-2.708-.627-.432-2.31 1.54a2.632 2.632 0 0 0-1.014 1.286l-.99 2.711a2.631 2.631 0 0 1-.527.868l-1.07 1.177a1.917 1.917 0 0 1-.982.61 1.928 1.928 0 0 0-1.49 2.165 1.917 1.917 0 0 1-.219 1.134l-.718 1.422a2.632 2.632 0 0 1-.623.8l-2.179 1.893a2.632 2.632 0 0 0-.84 1.406l-.613 2.708z" style={{fill:"#333"}}/>
            <circle cx="21.362" cy="21.055" r="15" style={{stroke:"#333", strokeMmiterlimit:"10", strokeWidth:"3", fill:"none"}}/>
            <path style={{fill:"none"}} d="M0 0h43v43H0z"/>
        </svg>
      </div>
    )
  }
}
