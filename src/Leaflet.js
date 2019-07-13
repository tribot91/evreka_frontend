import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { bus, icon } from './CustomIcon';
import 'leaflet/dist/leaflet.css';

export default class Leaflet extends Component {
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
          this.props.selectedVehicle == null || this.props.selectedVehicle === vehicle.name ? <Marker
            key={index}
            position={vehicle.data.position}
            ref={this.refmarker}
            icon={bus(vehicle.active === 'move' ? 'green' : (vehicle.active === 'pending' ? 'red' : 'gray'))}>
            <Popup>{vehicle.name}</Popup>
          </Marker> : null) : null
        }

        {this.props.dummyVehicleData[this.props.selectedFrame].dummyPackageData.map((pack, index) =>
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