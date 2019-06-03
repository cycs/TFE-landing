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
                <a className='externalLink' href="https://www.dropbox.com/s/dtka2lhxbw59fjs/caligo-beta-v1.3.apk?dl=0">
                    {this.props.text}
                </a>
            </button>
        )
    }
}
