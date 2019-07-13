import React, { Component } from 'react';
import DatePickers from './Datepickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPlusCircle, faArrowCircleRight, faBars, faPlay, faPause, faFileAlt } from '@fortawesome/free-solid-svg-icons'
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
        { name: "13:30 Vardiyası", vehicle: "Boğazköy", time: "13:11", driver: "Selçuk Yurt", helper: "-", performance: "78/85", status: "Finished" },
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
              data: { position: [39.888, 32.796], collected: 0, remaining: 26 }
            },
            {
              name: 'Kayaşehir',
              data: { position: [39.893, 32.789], collected: 0, remaining: 20 }
            },
          ],
          dummyPackageData: [
            {
              name: 'Package 1',
              amount: 1,
              position: [39.888, 32.796],
              collected: false
            },
            {
              name: 'Package 2',
              amount: 8,
              position: [39.894, 32.788],
              collected: false
            },
            {
              name: 'Package 3',
              amount: 25,
              position: [39.895, 32.787],
              collected: false
            },
            {
              name: 'Package 4',
              amount: 12,
              position: [39.896, 32.794],
              collected: false
            }
          ]
        },
        {
          time: 1562903600,
          vehicles: [
            {
              name: 'Fenertepe',
              data: { position: [39.893, 32.789], collected: 1, remaining: 25 }
            },
            {
              name: 'Kayaşehir',
              data: { position: [39.883, 32.789], collected: 0, remaining: 20 }
            },
          ],
          dummyPackageData: [
            {
              name: 'Package 1',
              amount: 1,
              position: [39.888, 32.796],
              collected: true
            },
            {
              name: 'Package 2',
              amount: 8,
              position: [39.894, 32.788],
              collected: false
            },
            {
              name: 'Package 3',
              amount: 25,
              position: [39.895, 32.787],
              collected: false
            },
            {
              name: 'Package 4',
              amount: 12,
              position: [39.896, 32.794],
              collected: false
            }
          ]
        },
        {
          time: 1562907200,
          vehicles: [
            {
              name: 'Fenertepe',
              data: { position: [39.894, 32.788], collected: 1, remaining: 25 }
            },
            {
              name: 'Kayaşehir',
              data: { position: [39.895, 32.787], collected: 8, remaining: 12 }
            },
          ],
          dummyPackageData: [
            {
              name: 'Package 1',
              amount: 1,
              position: [39.888, 32.796],
              collected: true
            },
            {
              name: 'Package 2',
              amount: 8,
              position: [39.894, 32.788],
              collected: true
            },
            {
              name: 'Package 3',
              amount: 25,
              position: [39.895, 32.787],
              collected: false
            },
            {
              name: 'Package 4',
              amount: 12,
              position: [39.896, 32.794],
              collected: false
            }
          ]
        },
        {
          time: 1562909000,
          vehicles: [
            {
              name: 'Fenertepe',
              data: { position: [39.895, 32.786], collected: 26, remaining: 0 }
            },
            {
              name: 'Kayaşehir',
              data: { position: [39.891, 32.783], collected: 20, remaining: 0 }
            },
          ],
          dummyPackageData: [
            {
              name: 'Package 1',
              amount: 1,
              position: [39.888, 32.796],
              collected: true
            },
            {
              name: 'Package 2',
              amount: 8,
              position: [39.894, 32.788],
              collected: true
            },
            {
              name: 'Package 3',
              amount: 25,
              position: [39.895, 32.787],
              collected: true
            },
            {
              name: 'Package 4',
              amount: 12,
              position: [39.896, 32.794],
              collected: true
            }
          ]
        }
      ]
    }
  }

  render() {
    // dummyVehicleData

    var marks = this.state.dummyVehicleData.map((dataPerTime, index) => {
      return { key: index, value: dataPerTime.time, label: moment.unix(dataPerTime.time).format("HH:mm") }
    })

    return (
      <div className="App m-10">
        {this.state.mapview ? <div style={{ padding: '8px 0', background: 'white', overflowY: 'hidden' }}>
          <Leaflet
            dummyVehicleData={this.state.dummyVehicleData}
            selectedFrame={this.state.selectedFrame}
          >
          </Leaflet>
          <div className='z-up flex-center' style={{ top: 28, left: 40 }}>
            <FontAwesomeIcon className='pr-10' icon={faBars} onClick={() => this.setState({ mapview: false })} />
            <DatePickers defaultValue={this.state.date} ></DatePickers>
            <FontAwesomeIcon color="dimgray" size="lg" icon={faArrowCircleRight} />
          </div>
          <div className="z-up" style={{ bottom: 35, left: 26 }}>
            <div className="box br1" style={{ width: '200px', height: '75px' }}>
              <div>
                12 Collected
              </div>
              <div>
                38 Remaining
              </div>
            </div>
            <div className="box br1" style={{ width: '200px', height: '40px', marginTop: '5px' }}>
              Map
            </div>
          </div>

          <div className="z-up" style={{ bottom: 35, left: 286 }}>
            <div className="box br1" style={{ display: 'flex', width: '103%', height: '70px', padding: '10px' }}>
              <FontAwesomeIcon className='pr-10' color="dimgray" size="lg" icon={!this.state.play ? faPlay : faPause} onClick={() => this.setState({ play: !this.state.play })} style={{ padding: '15px 30px 0 10px' }} />
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
        {!this.state.mapview ? <div className="m-10">
          <div className="lc" style={{ justifyContent: 'space-between' }}>
            <div className='flex-center'>
              <FontAwesomeIcon className='pr-10' color="dimgray" size="lg" icon={faMap} onClick={() => this.setState({ mapview: true })} />
              <DatePickers defaultValue={this.state.date}></DatePickers>
              <FontAwesomeIcon color="dimgray" size="lg" icon={faArrowCircleRight} />
            </div>
            <FontAwesomeIcon color="green" size="2x" icon={faPlusCircle} />
          </div>

          <div style={{ margin: '20px 0 10px' }}>
            RouteList
          </div>
          <div className='flex-center' style={{ fontSize: '11px', margin: '10px 0 20px' }}>
            <FontAwesomeIcon color="dimgray" size="lg" icon={faFileAlt} style={{ paddingRight: '2px' }} />
            Create Report
          </div>
          <RouteList routelist={this.state.routelist}></RouteList>
        </div> : null}
      </div>
    );
  }
}

export default App;