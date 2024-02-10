var littleton = L.marker([5.340749,-3.987468]).bindPopup('Cocody espace UFHB: Disponible' ),
    denver    = L.marker([5.345075998359758, -3.989137594967888]).bindPopup('Espace 2: non disponible'),
    aurora    = L.marker([5.3574, -3.9776]).bindPopup('Eden Espace'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]);
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [5.344, -3.988],
    zoom: 10,
    layers: [osm, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "Cities": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;