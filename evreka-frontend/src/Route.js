import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

const Route = ({ name, vehicle, time, driver, helper, performance, status }) => {
  return (
    <div style={{marginRight: '10px', display:'flex', justifyContent:'space-between'}}>
        <div>{name}</div>
        <div>{vehicle}</div>
        <div>{time}</div>
        <div>{driver}</div>
        <div>{helper}</div>
        <div>{performance}</div>
        <div>{status}</div>
        <FontAwesomeIcon size="lg" icon={faBus} />
    </div>
  );
}

export default Route;
