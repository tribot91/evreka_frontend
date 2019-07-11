import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

const Route = ({ name, vehicle, time, driver, helper, performance, status }) => {
  return (
    <div className="route" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="w-20 mr-10 b">{name}</div>
      <div className="w-10 mr-10">{vehicle}</div>
      <div className="w-10 mr-10">{time}</div>
      <div className="w-20 mr-10">{driver}</div>
      <div className="w-20 mr-10">{helper}</div>
      <div className="w-10 mr-10">{performance}</div>
      <div className="w-20 mr-10">{status}</div>
      <div style={{width:'5%'}}>
        <FontAwesomeIcon size="lg" icon={faBus} />
      </div>
    </div>
  );
}

export default Route;
