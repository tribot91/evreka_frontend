import React from 'react';
import L from 'leaflet';
import Icon from './NumberedCustomIcon';
import ReactDOMServer from 'react-dom/server';

const truck = new L.Icon({
    iconUrl: require('./img/truck.png'),
    iconRetinaUrl: require('./img/truck.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

let icon = (digit, collected) => L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon digit={digit} collected={collected} />)
});

export { truck, icon };