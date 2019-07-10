import React from 'react';
import Route from './Route';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const RouteList = ({ }) => {
    return (
        <div>
            <div style={{display:'flex', marginBottom: '10px'}}>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="name">Name</InputLabel>
                    <Input id="name"></Input>
                </div>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="vehicle">Vehicle</InputLabel>
                    <Input id="vehicle"></Input>
                </div>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="time">Time</InputLabel>
                    <Input id="time"></Input>
                </div>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="driver">Driver</InputLabel>
                    <Input id="driver"></Input>
                </div>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="helper">Helper</InputLabel>
                    <Input id="helper"></Input>
                </div>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="performance">Performance</InputLabel>
                    <Input id="performance"></Input>
                </div>
                <div style={{marginRight: '10px'}}>
                    <InputLabel shrink="true" htmlFor="status">Status</InputLabel>
                    <Input id="status"></Input>
                </div>
            </div>
            <div>
                <Route name="13:30 Vardiyası" vehicle="Fenertepe" time="13:12" driver="Tanır Nalbant" helper="-" performance="66/103" status="Dispatched"></Route>
                <Route name="13:30 Vardiyası" vehicle="Boğazköy" time="13:11" driver="Selçuk Yurt" helper="-" performance="58/85" status="Finished"></Route>
                <Route name="07:30 Vardiyası" vehicle="Başakşehir" time="07:30" driver="Emri Akça" helper="-" performance="108/148" status="Finished"></Route>
            </div>
        </div>
    );
}

export default RouteList;