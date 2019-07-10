import React from 'react';
import DatePickers from './Datepickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faMap} />
          <DatePickers></DatePickers>
        </div>

      </div>
    </div>
  );
}

export default App;
