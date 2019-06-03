import React, { Component } from 'react'

import './Credits.css'

import Menu from './Menu'
import Footer from './Footer';

export default class Credits extends Component {
    render() {
        return (
            <div className='credits'>
                <Menu items={[]}/>
                <main className='credits__main ctn'>
                    <h2 className='credits__title col-6 t-col-8 m-col-12 ctr'>Crédits</h2>
                    
                    <div className='credits__links col-6 t-col-8 m-col-12 ctr'>
                        <h3 className='credits__subtitle'>Outils</h3>
                        <ul className='credits__links__cont'>
                            <li>
                                <a href="https://reactjs.org/">React</a>
                            </li>
                            <li>
                                <a href="https://facebook.github.io/react-native/">React-Native</a>
                            </li>
                            <li>
                                <a href="https://redux.js.org/">Redux</a>
                            </li>
                            <li>
                                <a href="https://graphql.org/learn/">GraphQL</a>
                            </li>
                            <li>
                                <a href="https://www.adobe.com/be_fr/products/illustrator.html">Illustrator</a>
                            </li>
                            <li>
                                <a href="https://www.adobe.com/be_fr/products/xd.html">Adobe XD</a>
                            </li>
                            <li>
                                <a href="https://www.adobe.com/be_fr/products/photoshop.html">Photoshop</a>
                            </li>
                            <li>
                                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                            </li>
                            <li>
                                <a href="https://www.mapbox.com/">Mapbox</a>
                            </li>
                            <li>
                                <a href="https://greensock.com/gsap">GSAP</a>
                            </li>
                        </ul>
                    </div>
                    <div className='credits__thanks col-6 t-col-8 m-col-12 ctr'>
                        <h3 className='credits__subtitle'>Remerciements</h3>
                        <p>Merci à tous les professeurs de l'<a className='credits__link externalLink' href="https://www.heaj.be/">HEAJ</a> de première, deuxième et troisième années qui ont rendu ce TFE possible. Je tiens à remercier particulièrement <a className='credits__link externalLink' href="http://www.lipelip.be/">Philippe Thronte</a> qui a été mon professeur référent pour ce projet.</p>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
