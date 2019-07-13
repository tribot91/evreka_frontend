import React from 'react';
import CustomContext from './CustomContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

const Route = ({ name, vehicle, time, driver, helper, performance, status, changeVehicle }) => {
  return (
    <div className="route flex-sb">
      <div className="w-20 mr-10 b lc name">{name}</div>
      <div className="w-10 mr-10 lc">
        <CustomContext changeVehicle={changeVehicle} vehicle={vehicle} name={name} driver={driver}></CustomContext>
      </div>
      <div className="w-10 mr-10 lc time">{time}</div>
      <div className="w-20 mr-10 lc driver">{driver}</div>
      <div className="w-20 mr-10 lc helper">{helper}</div>
      <div className="w-10 mr-10 lc performance">{performance}</div>
      <div className="w-20 mr-10 lc status">{status}</div>
      <div style={{ width: '5%', alignSelf: 'center' }}>
        <FontAwesomeIcon size="lg" icon={faBus} />
      </div>
    </div>
  );
}

export default Route;
