import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { icon } from './CustomIcon';

// lat: 39.896,
// lng: 32.7976
export default class Leaflet extends Component {
  dummyData = [
    {
      time: '12:00',
      vehicles: [
        {
          device: 'Fenertepe',
          data: { lat: 39.888, lng: 32.796, collected: 10, remaining: 23 }
        },
        {
          device: 'Kayaşehir',
          data: { lat: 39.893, lng: 32.789, collected: 5, remaining: 12 }
        },
      ]
    },
    {
      time: '12:10',
      vehicles: [
        {
          device: 'Fenertepe',
          data: { lat: 39.893, lng: 32.789, collected: 10, remaining: 23 }
        },
        {
          device: 'Kayaşehir',
          data: { lat: 39.893, lng: 32.789, collected: 5, remaining: 12 }
        },
      ]
    }
  ]

  state = {
    center: {
      lat: 39.893894,
      lng: 32.789437
    },
    marker: {
      lat: 39.888,
      lng: 32.796
    },
    zoom: 15,
    draggable: true,
  }
  refmarker = createRef()

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]
    setTimeout(() => {
      this.setState({ readyToRender: true });
    }, 0);
    return (
      <Map center={position} zoom={this.state.zoom} ref="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={markerPosition}
          ref={this.refmarker}
          icon={icon}>
          <Popup minWidth={90}></Popup>
        </Marker>
      </Map>
    )
  }
}