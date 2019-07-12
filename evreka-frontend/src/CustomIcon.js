import L from 'leaflet';

const marker = new L.Icon({
    iconUrl: require('./img/marker.png'),
    iconRetinaUrl: require('./img/marker.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 35),
    className: 'leaflet-div-icon'
});

const truck = new L.Icon({
    iconUrl: require('./img/truck.png'),
    iconRetinaUrl: require('./img/truck.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

export { marker, truck };