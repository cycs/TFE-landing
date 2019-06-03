import React, { Component } from 'react'
import ReactMapboxGl, { Layer, GeoJSONLayer, Popup } from "react-mapbox-gl";
import communes from '../json/communes-minify.json'
import markers from '../json/markers.json'

export default class MapBox extends Component {
    shouldComponentUpdate() {
        return false;
    }
    
    render() {
        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1IjoiY3ljcyIsImEiOiJjanN1anA2OWYwMGZtNGJrN3Y0ejJqOXpiIn0.q5gDP42dUSpQrUY0FyJiuw"
        });

        return (
            <div>
                 <Map
                    style="mapbox://styles/cycs/cjv5es9ui1tv91ftgut7t84bk"
                    center={['4.856387665236815', '50.465550770154636']}
                    zoom={[6]}
                    containerStyle={{
                        height: "400px",
                        width: "100%"
                    }}>
                    <GeoJSONLayer
                    data={communes}
                    fillPaint={{
                        "fill-color": '#FEFAF3',
                        'fill-outline-color' : '#472C0E'
                    }}/>
                    <GeoJSONLayer
                        id='source_id'
                        data={markers}
                        sourceOptions={{
                            cluster: true,
                            clusterMaxZoom: 14,
                            clusterRadius: 50
                        }}
                    />
                    <Layer
                        id='cluster_layer'
                        sourceId='source_id'
                        onMouseEnter={(data) => {
                            // const name = data.features[0].properties.NAMN
                            
                            // this.setState({ 
                            //     data: {
                            //        name
                            //     },
                            // })

                            // console.log(this.state.data.name)

                        }}
                        layerOptions={{
                            filter: [
                            'has', 'point_count'
                            ]
                        }}
                        paint={{
                            'circle-color': {
                            property: 'point_count',
                            type: 'interval',
                            stops: [
                                [0, '#FFCB51'],
                            ]
                            },
                            'circle-radius': {
                            property: 'point_count',
                            type: 'interval',
                            stops: [
                                [0, 20],
                                [100, 30],
                                [750, 40]
                            ]
                            }
                        }}
                        type='circle'
                    />
                    <Layer
                        id='pointCount'
                        sourceId='source_id'
                        layerOptions={{
                            filter: [
                            'has', 'point_count'
                            ]
                        }}
                        layout={
                           { "text-field": '{point_count}'}
                        }
                        type='symbol' 
                    />
                     {/* {this._renderPopup()} */}

                    </Map>
            </div>
        )
    }
}
