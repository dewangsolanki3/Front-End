import React, { Component } from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
const hereCredentials = {
    id: 'z546CZ6cCDEN8pnO5p9x',
    code: 'tZwok2DSs_uuWpy5qHSJGA'
  }

  
class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    

    render() {
        const hereTileURL = `https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/512/png8?app_id=${hereCredentials.id}&app_code=${hereCredentials.code}&ppi=320`;
        console.log(this.props.center);
        if(!this.props.center[0] || !this.props.center[1]) {
            return null;
        }
        console.log('this is the coord', this.props.center);
        return (
            
            <Map 
        center = {this.props.center}
        zoom = {this.props.zoom}
     >   
        <TileLayer
          attribution='&copy; Here 2019'
          url={hereTileURL}
        />
        
        <Marker position = {this.props.center} />
        <Marker position = {[18.932149, 72.834192]} />
        <Marker position = {[18.929048, 72.831527]} />
        </Map>
            
        )
    }

}
export default MapContainer;