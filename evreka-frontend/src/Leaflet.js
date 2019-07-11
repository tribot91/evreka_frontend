import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Leaflet extends Component {
  dummyData = [{device:'Fenertepe', data: [{time: '12:01', lat: 39.893894, lng: 32.789437}, {time: '12:05', lat: 39.896, lng: 32.790 }]},
    {device:'Kayaşehir', data: [{time: '12:03', lat: 39.893894, lng: 32.789437}, {time: '12:08', lat: 39.896, lng: 32.790 }]},
  ]

  state = {
    center: {
        lat: 39.893894,
        lng: 32.789437
    },
    marker: {
        lat: 39.887762,
        lng: 32.796264
    },
    zoom: 16,
    draggable: true,
  }
  refmarker = createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      })
    }
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]
    // setTimeout(function(){ map.invalidateSize()}, 500);

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          draggable={this.state.draggable}
          onDragend={this.updatePosition}
          position={markerPosition}
          ref={this.refmarker}>
          <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}