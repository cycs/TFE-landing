import React, { Component } from 'react'
import logo from '../img/logo-loading-stepped.gif'
import { Link, animateScroll as scroll } from "react-scroll";
import TweenMax from 'gsap/TweenMax'
import { Link as LinkRouter } from 'react-router-dom'


import './Menu.css'

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }

        this.ref = null
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentDidMount() {
    }

    render() {
        const Links = this.props.items.map((item, i) => {
            return (
                <li key={i}>
                    <Link onClick={this.toggleMenu} to={item.to} spy smooth offset={-70}>{item.title}</Link>
                </li>
            )
        })

        const isNavEmpty = this.props.items.length === 0;

        return (
        <div className='menu ctn'>
            <h1 className='menu__title'>
                Caligo
                <LinkRouter className='menu__logo__cont externalLink' to="/">
                    <img className='menu__logo' src={logo} alt="logo Caligo"/>
                </LinkRouter>
            </h1>
            {!isNavEmpty && <nav className={`menu__nav ${this.state.menuOpen ? 'menu__nav--active' : ''}`}>
                <button className='menu__button' onClick={this.toggleMenu}>
                    Menu
                    <span className="menu__button__icon">
                        <span className="menu__button__icon__bar"></span>
                        <span className="menu__button__icon__bar"></span>
                        <span className="menu__button__icon__bar"></span>
                    </span>
                </button>
                <ul className='menu__links'>
                    { Links }
                </ul>
            </nav>}
        </div>
        )
    }

    toggleMenu() {
        this.setState({ menuOpen : !this.state.menuOpen })
    }
}
