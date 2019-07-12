import L from 'leaflet';

const icon = new L.Icon({
    iconUrl: require('./img/marker.png'),
    iconRetinaUrl: require('./img/marker.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    className: 'leaflet-div-icon'
});

export { icon };