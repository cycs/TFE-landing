import React, { Component } from 'react'

import './Button.css'

export default class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    
    render() {
        return (
            <button className='button'> 
                <a className='externalLink' href="https://www.dropbox.com/s/vtt29g1wmui54ok/caligo-v1.2.0.apk?dl=0">
                    {this.props.text}
                </a>
            </button>
        )
    }
}
