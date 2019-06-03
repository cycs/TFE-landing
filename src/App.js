import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Map from './components/Map'
import Principles from './components/Principles'
import Download from './components/Download';
import Footer from './components/Footer';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        // setTimeout(() => this.setState({ isLoading: false }), 3000)
        
    }

  render() {
    // if (this.state.isLoading) return <Loading />

    return (
        <div className="App">
            <Header />
            <Map />
            <Principles />
            <Download />
            <Footer />
        </div>
    )
  }
}

