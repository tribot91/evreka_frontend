import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { truck, icon } from './CustomIcon';
import 'leaflet/dist/leaflet.css';

export default class Leaflet extends Component {
  dummyPackageData = [
    {
      name: 'Package 1',
      amount: 1,
      position: [39.888, 32.796],
      collected: false
    },
    {
      name: 'Package 2',
      amount: 3,
      position: [39.894, 32.788],
      collected: false
    },
    {
      name: 'Package 3',
      amount: 5,
      position: [39.895, 32.787],
      collected: true
    },
    {
      name: 'Package 4',
      amount: 2,
      position: [39.896, 32.794],
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

    return (
      <Map center={position} zoom={this.state.zoom} ref="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {this.props.dummyVehicleData[this.props.selectedFrame] ? this.props.dummyVehicleData[this.props.selectedFrame].vehicles.map((vehicle, index) =>
          <Marker
            key={index}
            position={vehicle.data.position}
            ref={this.refmarker}
            icon={truck}>
            <Popup>{vehicle.name}</Popup>
          </Marker>) : null
        }

        {this.dummyPackageData.map((pack, index) =>
          <Marker
            key={index}
            position={pack.position}
            ref={this.refmarker}
            icon={pack.collected ? icon(pack.amount, false) : icon(pack.amount, true)}>
            <Popup>{pack.name}</Popup>
          </Marker>)
        }
      </Map>
    )
  }
}