import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { truck, icon } from './CustomIcon';

export default class Leaflet extends Component {
  selectedTime = 1562900000;

  dummyVehicleData = [
    {
      time: 1562900000,
      vehicles: [
        {
          name: 'Fenertepe',
          data: { position: [39.888, 32.796], collected: 10, remaining: 23 }
        },
        {
          name: 'Kayaşehir',
          data: { position: [39.893, 32.789], collected: 5, remaining: 12 }
        },
      ]
    },
    {
      time: 1562903600,
      vehicles: [
        {
          name: 'Fenertepe',
          data: { position: [39.893, 32.789], collected: 12, remaining: 21 }
        },
        {
          name: 'Kayaşehir',
          data: { position: [39.893, 32.789], collected: 9, remaining: 8 }
        },
      ]
    }
  ]

  dummyPackageData = [
    {
      name: 'Package 1',
      amount: 5,
      position: [39.888, 32.796],
      collected: false
    },
    {
      name: 'Package 2',
      amount: 6,
      position: [39.894, 32.788],
      collected: false
    },
    {
      name: 'Package 3',
      amount: 6,
      position: [39.895, 32.787],
      collected: true
    },
    {
      name: 'Package 4',
      amount: 6,
      position: [39.896, 32.790],
      collected: false
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
        {this.dummyVehicleData[0].vehicles.map((vehicle, index) =>
          <Marker
            key={index}
            position={vehicle.data.position}
            ref={this.refmarker}
            icon={truck}>
            <Popup>{vehicle.name}</Popup>
          </Marker>)
        }

        {this.dummyPackageData.map((pack, index) =>
          <Marker
            key={index}
            position={pack.position}
            ref={this.refmarker}
            icon={pack.collected ? icon(5, true) : icon(5, false)}>
            <Popup>{pack.name}</Popup>
          </Marker>)
        }
      </Map>
    )
  }
}