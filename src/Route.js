import React from 'react';
import CustomContext from './CustomContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

const Route = ({ name, vehicle, time, driver, helper, performance, status }) => {
  return (
    <div className="route flex-sb">
      <div className="w-20 mr-10 b lc">{name}</div>
      <div className="w-10 mr-10 lc">
        <CustomContext vehicle={vehicle} name={name} driver={driver}></CustomContext>
      </div>
      <div className="w-10 mr-10 lc">{time}</div>
      <div className="w-20 mr-10 lc">{driver}</div>
      <div className="w-20 mr-10 lc">{helper}</div>
      <div className="w-10 mr-10 lc">{performance}</div>
      <div className="w-20 mr-10 lc">{status}</div>
      <div style={{ width: '5%', alignSelf: 'center' }}>
        <FontAwesomeIcon size="lg" icon={faBus} />
      </div>
    </div>
  );
}

export default Route;
