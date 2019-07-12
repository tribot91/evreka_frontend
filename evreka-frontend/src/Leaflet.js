import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { marker, truck } from './CustomIcon';

export default class Leaflet extends Component {
  selectedTime = 1562900000;

  dummyData = [
    {
      time: 1562900000,
      vehicles: [
        {
          device: 'Fenertepe',
          data: { position: [39.888, 32.796], collected: 10, remaining: 23 }
        },
        {
          device: 'Kayaşehir',
          data: { position: [39.893, 32.789], collected: 5, remaining: 12 }
        },
      ]
    },
    {
      time: 1562903600,
      vehicles: [
        {
          device: 'Fenertepe',
          data: { position: [39.893, 32.789], collected: 12, remaining: 21 }
        },
        {
          device: 'Kayaşehir',
          data: { position: [39.893, 32.789], collected: 9, remaining: 8 }
        },
      ]
    }
  ]

  state = {
    center: {
      lat: 39.893894,
      lng: 32.789437
    },
    zoom: 15,
    draggable: true,
  }
  refmarker = createRef()

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    setTimeout(() => {
      this.setState({ readyToRender: true });
    }, 0);
    return (
      <Map center={position} zoom={this.state.zoom} ref="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {this.dummyData[0].vehicles.map((vehicle, index) =>
          <Marker
            key={index}
            position={vehicle.data.position}
            ref={this.refmarker}
            icon={truck}>
            <Popup minWidth={90}></Popup>
          </Marker>)
        }
        
        {this.dummyData[0].vehicles.map((vehicle, index) =>
          <Marker
            key={index}
            position={vehicle.data.position}
            ref={this.refmarker}
            icon={truck}>
            <Popup minWidth={90}></Popup>
          </Marker>)
        }
      </Map>
    )
  }
}