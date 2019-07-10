import React, { Component } from 'react';
import DatePickers from './Datepickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPlusCircle, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import RouteList from './RouteList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  render() {

    return (
      <div className="App" style={{ margin: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon size="lg" icon={faMap} />
            <DatePickers defaultValue={this.state.date}></DatePickers>
            <FontAwesomeIcon size="lg" icon={faArrowCircleRight} />
          </div>
          <FontAwesomeIcon color="green" size="2x" icon={faPlusCircle} />
        </div>
        <div style={{ margin: '20px 0' }}>
          Routes
        </div>
        <RouteList></RouteList>
      </div>
    );
  }
}

export default App;
