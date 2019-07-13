import React from 'react';
import L from 'leaflet';
import Icon from './NumberedCustomIcon';
import ReactDOMServer from 'react-dom/server';

const bus = (color) => new L.Icon({
    iconUrl: require(`./img/bus-${color}.png`),
    iconRetinaUrl: require(`./img/bus-${color}.png`),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    className: 'leaflet-div-icon'
});

let icon = (digit, collected) => L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon digit={digit} collected={collected} />)
});

export { bus, icon };