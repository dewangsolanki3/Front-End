import React, { Component } from 'react'
import {Map, TileLayer, Marker, Circle, CircleMarker, Popup} from 'react-leaflet';

import axios from 'axios';
const hereCredentials = {
    id: 'z546CZ6cCDEN8pnO5p9x',
    code: 'tZwok2DSs_uuWpy5qHSJGA'
  }

  
class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location1: [18.932149, 72.834192],
            location2: [18.929048, 72.831527]
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
            
            <div>
            <div className= "mobile-container">
            <Map 
        center = {this.props.center}
        zoom = {this.props.zoom}
     >   
        <TileLayer
          attribution='&copy; Here 2019'
          url={hereTileURL}
        />
        <CircleMarker center={this.props.center} color="red" radius={10}></CircleMarker>
        <CircleMarker center={this.state.location1} color="black" radius={10}></CircleMarker>
        <CircleMarker center={this.state.location2} color="black" radius={10}></CircleMarker>
        <Circle center={this.props.center} fillColor="blue" radius={400} />
        {/* <Circle center={this.state.location1} fillColor="blue" radius={30} />
        <Circle center={this.state.location2} fillColor="blue" radius={30} /> */}
        <Circle center={this.props.center} fillColor="blue" radius={1000} />
        
        <Marker position = {this.props.center} />
        {/* <Marker position = {this.state.location1} />
        <Marker position =  {this.state.location2}/> */}
        </Map>

        <div id= "Project" >
        <p>Hello! We have found a match for you :)</p>
        <div className = "btns">
        <button>Accept</button>
        <button style = {{marginLeft: '20px'}}>Reject</button>
        </div>
    </div>
        </div >
        
        </div>
        
        
    
        )
    }

}
export default MapContainer;