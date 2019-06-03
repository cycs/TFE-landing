import React, { Component } from 'react'
import Menu from './Menu'
import './Header.css'
import mockup from '../img/mockup-Caligo.png'
import Button from './Button';

export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            hover: false
        }

    }

    componentDidMount() {
    }

    render() {
        return (
        <div onMouseEnter={this.morph} className='header'>
            <Menu items={[
                {to:'map', title:'Explore la Belgique'},
                {to:'principles', title:'Comment ça marche'},
                {to:'download', title:'Télécharger'},
            ]}/>
            <div className='header__content ctn'>
                <div className='header__desc col col-7'>
                    <h2 className='header__title title'>Donne un sens à <br className='header__title--break'/>tes déplacements.</h2>
                    <p className='header__text'>Explore chaque commune de Belgique et visualise ta progression en temps réel. Jamais parcourir nos communes n'a été si passionnant !</p>
                    <Button text='Commence à explorer'/>
                </div>
                <div className='header__mockup col col-5'>
                    <img className='header__mockup__img' src={mockup} alt="Mockup GalaxyS10 Caligo"/>
                </div>
            </div>
        </div>
        )
    }
}
