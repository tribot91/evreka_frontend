import React from 'react';
import DatePickers from './Datepickers';

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>Map Icon</div>
          <DatePickers></DatePickers>
        </div>

      </div>
    </div>
  );
}

export default App;
