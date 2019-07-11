import React, { Component } from 'react';
import DatePickers from './Datepickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPlusCircle, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import RouteList from './RouteList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      routelist: [{ name: "13:30 Vardiyası", vehicle: "Fenertepe", time: "13:12", driver: "Tanır Nalbant", helper: "-", performance: "66/103", status: "Dispatched" },
      { name: "13:30 Vardiyası", vehicle: "Boğazköy", time: "13:11", driver: "Selçuk Yurt", helper: "-", performance: "58/85", status: "Finished" },
      { name: "07:30 Vardiyası", vehicle: "Başakşehir", time: "07:30", driver: "Emri Akça", helper: "-", performance: "108/148", status: "Finished" }]
    }
  }

  render() {
    return (
      <div className="App" style={{ margin: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon color="dimgray" size="lg" icon={faMap} />
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
    );
  }
}

export default App;
