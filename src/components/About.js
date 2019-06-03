import React, { Component } from 'react'

import './About.css'

import Menu from './Menu'
import Footer from './Footer';

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <Menu items={[]}/>
                <main className='about__main ctn'>
                    <h2 className='about__title col-6 t-col-8 m-col-12 ctr'>&Agrave; Propos</h2>
                    <div className='about__desc col-6 t-col-8 m-col-12 ctr'>
                        <h3 className='about__subtitle'>Ma vision d'un TFE en web</h3>
                        <p>Trois années pour en arriver à ce point final, le TFE. Ce travail, c'est ce qui résume notre parcours, ce sont tous nos acquis mis en un seul projet et qui démontre ce dont on est capable.</p>
                        <p>Mais c'est aussi l'occasion d'apprendre, de se donner des défis et de se démarquer de la masse. Je ne voulais pas simplement faire un site, je voulais aller vers de nouveaux horizons. Le web d'aujourd'hui est de plus en plus axé mobile, que ce soit via les Progressive Web App ou les applications natives.</p>
                        <p>C'est pourquoi j'ai cherché à développer une application native, surtout avec la hype qu'il y a autour de React-Native et son potentiel d'employabilité.</p>
                    </div>
                    <div className='about__desc col-6 t-col-8 m-col-12 ctr'>
                        <h3 className='about__subtitle'>Dépasser ses faiblesses et s'adapter</h3>
                        <p>Je suis axé front-end, très largement. J'aime pouvoir donner vie à un site, le rendre attractif, jouer avec les animations. J'aime moins le back-end que je trouve austère et un peu rébarbatif. J'aime moins le design où je me sens moins à l'aise, c'est un domaine beaucoup plus artistique qui me convient moins.</p>
                        <p>Mais il faut un équilibre. On ne peut pas se contenter de rester dans sa zone de confort. J'ai travaillé sur les trois aspects et je m'en suis sorti, j'ai appris et j'en suis ressorti plus confiant en mes capacités.</p>
                        <p>J'ai aussi pu montrer que j'étais capable de m'adapter à de nouvelles technologies rapidement et de rendre une copie propre d'un projet pourtant complexe.</p>
                    </div>
                    <div className='about__desc col-6 t-col-8 m-col-12 ctr'>
                        <h3 className='about__subtitle'>La fin et le début</h3>
                        <p>La fin d'un cycle. Caligo, c'est le résumé de ce que j'ai appris et acquis. J'ai fait le maximum pour que tout soit à un niveau de finition que j'estime suffisant.</p>
                        <p>J'espère que vous apprécierez autant Caligo que j'ai aimé le développer. </p>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
