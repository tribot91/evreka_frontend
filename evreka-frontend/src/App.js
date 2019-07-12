import React, { Component } from 'react';
import DatePickers from './Datepickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPlusCircle, faArrowCircleRight, faBars, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import RouteList from './RouteList';
import Slider from './DiscreteSlider';
import Leaflet from './Leaflet';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      mapview: false,
      routelist: [
        { name: "13:30 Vardiyası", vehicle: "Fenertepe", time: "13:12", driver: "Tanır Nalbant", helper: "-", performance: "66/103", status: "Dispatched" },
        { name: "13:30 Vardiyası", vehicle: "Boğazköy", time: "13:11", driver: "Selçuk Yurt", helper: "-", performance: "58/85", status: "Finished" },
        { name: "07:30 Vardiyası", vehicle: "Başakşehir", time: "07:30", driver: "Emri Akça", helper: "-", performance: "108/148", status: "Finished" }
      ],
      play: false,
      selectedFrame: 0,
      selectedTime: 1562900000,
      dummyVehicleData: [
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
              data: { position: [39.883, 32.789], collected: 9, remaining: 8 }
            },
          ]
        },
        {
          time: 1562907200,
          vehicles: [
            {
              name: 'Fenertepe',
              data: { position: [39.894, 32.788], collected: 12, remaining: 21 }
            },
            {
              name: 'Kayaşehir',
              data: { position: [39.895, 32.787], collected: 9, remaining: 8 }
            },
          ]
        },
        {
          time: 1562909000,
          vehicles: [
            {
              name: 'Fenertepe',
              data: { position: [39.895, 32.786], collected: 12, remaining: 21 }
            },
            {
              name: 'Kayaşehir',
              data: { position: [39.891, 32.783], collected: 9, remaining: 8 }
            },
          ]
        }
      ]
    }
  }

  render() {
    var marks = this.state.dummyVehicleData.map((dataPerTime, index) => {
      return { key: index, value: dataPerTime.time, label: moment.unix(dataPerTime.time).format("HH:mm") }
    })

    return (
      <div className="App" style={{ margin: '10px' }}>
        {this.state.mapview ? <div style={{ padding: '8px 0', background: 'white', overflowY: 'hidden' }}>
          <Leaflet
            dummyVehicleData={this.state.dummyVehicleData}
            selectedFrame={this.state.selectedFrame}
          >
          </Leaflet>
          <div style={{ position: 'absolute', top: 28, left: 40, zIndex: 500, display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon className='pr-10' icon={faBars} onClick={() => this.setState({ mapview: false })} />
            <DatePickers defaultValue={this.state.date} ></DatePickers>
            <FontAwesomeIcon color="dimgray" size="lg" icon={faArrowCircleRight} />
          </div>
          <div style={{ position: 'absolute', bottom: 35, left: 26, zIndex: 500 }}>
            <div style={{ width: '200px', height: '75px', backgroundColor: "rgb(250, 250, 250, 0.85)", boxShadow: '0 0 5px gray', borderRadius: '3px' }}>
              <div>
                12 Collected
              </div>
              <div>
                38 Remaining
              </div>
            </div>
            <div style={{ width: '200px', height: '40px', backgroundColor: "rgb(250, 250, 250, 0.85)", marginTop: '5px', boxShadow: '0 0 5px gray', borderRadius: '3px' }}>
              Map
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: 35, left: 286, zIndex: 500 }}>
            <div style={{ display: 'flex', width: '103%', height: '58px', backgroundColor: "rgb(250, 250, 250, 0.85)", padding: '10px', boxShadow: 'grey 0px 0px 5px', borderRadius: '3px' }}>
              <FontAwesomeIcon className='pr-10' color="dimgray" size="lg" icon={!this.state.play ? faPlay : faPause} onClick={() => this.setState({ play: !this.state.play })} style={{ padding: '0 30px 0 10px' }} />
              <Slider
                dummyVehicleData={this.state.dummyVehicleData}
                marks={marks}
                selectedFrame={this.state.selectedFrame}
                selectedTime={this.state.selectedTime}
                play={this.state.play}

                // Called when user manually use the slider
                handleSliderChange={(newValue) => {
                  var newFrame;
                  this.state.dummyVehicleData.forEach((element, index) => {
                    if (element.time === newValue) {
                      newFrame = index
                      this.setState({ selectedFrame: newFrame })
                    }
                  });
                  this.setState({ selectedTime: newValue })
                }}
                handleFrameChange={(newValue) => this.setState({ selectedFrame: newValue })}
                handlePlayChange={() => this.setState({ play: !this.state.play })}
              ></Slider>
            </div>
          </div>

        </div> : null}
        {!this.state.mapview ? <div style={{ margin: '10px' }}>
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
        </div> : null}
      </div>
    );
  }
}

export default App;