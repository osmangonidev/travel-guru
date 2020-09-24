import React, { Component, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from './assets/data.json';
import Markers from './VenueMarkers';
import './MapView.css'
import HotelFakeData from '../../fakeData/HotelFakeData';


const MapView=(props)=> {
  
    const [coordinates,setCoordinates]=useState({lat:21.416955,lng:91.991743});
    const zoom=12;

    return (
      <Map center={coordinates} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues}/>
      </Map>
    );
  
}

export default MapView;
