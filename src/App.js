import React, { Component } from 'react'
import axios from 'axios';

import MapContainer from './MapContainer';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
            lng: '',
            lat: '',
            error : null,
    }
  }
  componentDidMount() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              error: null,
              
            });
            console.log(this.state.lat, this.state.lng)
          },
          (error) => this.setState(
            {error: error.message}
          )
        );
      }
   
}
  render() {
    // const center = [18.9289952, 72.8337327];
    const center = [this.state.lat,this.state.lng];
        const zoom = 16;
    return (
      <div className = "container">
        <MapContainer 
              center = {center}
              zoom = {zoom}
              />
       
    
    </div>
    )
  }
}
export default App;


