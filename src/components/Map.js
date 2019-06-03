import React, { Component } from 'react'
import MapBox from './MapBox'
import './Map.css'


export default class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                name: ''
            },
            mapUpdate: false,
            IsMapVisible: false,
        }

        /* Event binding
        --------------------------------------------------------- */
        this.toggleMap = this.toggleMap.bind(this)
        this.turnOffMap = this.turnOffMap.bind(this)
    }


    render() {  
        return (
            <div onMouseLeave={this.turnOffMap} className='map ctn' id='map'>
                <h2 className='map__title subtitle'>Explore la Belgique</h2>
                <p>Dévoile la carte en te déplaçant et débloque des bonus en atteignant les différents points d'intérêt.</p>
                <p>Chaque bonus t'octroie des moyens d'accélérer ton exploration.</p>
                <div onClick={this.toggleMap} className={`map__map col col-12 ${this.state.IsMapVisible ? '' : 'map__map--visible'}`}>
                    <MapBox/>
                </div>
            </div>
        )
    }

    toggleMap() {
        console.log("click");
        this.setState({IsMapVisible: true});
    }

    turnOffMap() {
        this.setState({IsMapVisible: false});

    }
    // _renderPopup() {
    //     const {data} = this.state;

    //     return popupInfo && (
    //         <Popup
    //         coordinates={[popupInfo.longitude, popupInfo.latitude]}
    //         offset={{
    //             'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
    //         }}>
    //         <h1>Popup</h1>
    //         </Popup>
    //     )
    // }
}
