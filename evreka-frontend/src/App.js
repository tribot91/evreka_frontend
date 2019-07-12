import React, { Component } from 'react';
import DatePickers from './Datepickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPlusCircle, faArrowCircleRight, faBars, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import RouteList from './RouteList';
import Leaflet from './Leaflet';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      mapview: false,
      routelist: [{ name: "13:30 Vardiyası", vehicle: "Fenertepe", time: "13:12", driver: "Tanır Nalbant", helper: "-", performance: "66/103", status: "Dispatched" },
      { name: "13:30 Vardiyası", vehicle: "Boğazköy", time: "13:11", driver: "Selçuk Yurt", helper: "-", performance: "58/85", status: "Finished" },
      { name: "07:30 Vardiyası", vehicle: "Başakşehir", time: "07:30", driver: "Emri Akça", helper: "-", performance: "108/148", status: "Finished" }]
    }
  }

  render() {
    return (
      <div className="App" style={{ margin: '10px' }}>
        {this.state.mapview ? <div style={{ padding: '8px 0', background: 'white', boxShadow: '0 -2px lightgray', overflowY: 'hidden' }}>
          <Leaflet></Leaflet>
          <div style={{ position: 'absolute', top: 28, left: 40, zIndex: 500, display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon className='pr-10' icon={faBars} onClick={() => this.setState({ mapview: false })} />
            <DatePickers defaultValue={this.state.date} ></DatePickers>
            <FontAwesomeIcon color="dimgray" size="lg" icon={faArrowCircleRight} />
          </div>
          <div style={{ position: 'absolute', bottom: 35, left: 26, zIndex: 500 }}>
            <div style={{ width: '200px', height: '70px', backgroundColor: "rgb(250, 250, 250, 0.85)" }}>
              <div>
                12 Collected
              </div>
              <div>
                38 Remaining
              </div>
            </div>
            <div style={{ width: '200px', height: '40px', backgroundColor: "rgb(250, 250, 250, 0.85)", marginTop: '5px' }}>
              Map
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: 28, left: 286, zIndex: 500 }}>
            <div style={{ width: '200px', height: '70px', }}> {/*backgroundColor: "rgb(250, 250, 250, 0.85)"*/}
              Test
            </div>
          </div>
        </div> : null}
        <div style={{ margin: '10px', display: !this.state.mapview ? 'block' : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon className='pr-10' color="dimgray" size="lg" icon={faMap} onClick={() => this.setState({ mapview: true })} />
              <DatePickers defaultValue={this.state.date}></DatePickers>
              <FontAwesomeIcon color="dimgray" size="lg" icon={faArrowCircleRight} />
            </div>
            <FontAwesomeIcon color="green" size="2x" icon={faPlusCircle} />
          </div>

          <div style={{ margin: '20px 0' }}>
            Routes
        </div>
          <RouteList routelist={this.state.routelist}></RouteList>
        </div>
      </div>
    );
  }
}

export default App;