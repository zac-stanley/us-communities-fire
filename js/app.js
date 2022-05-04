(function(){
// initial Leaflet map options
const options = {
    zoomSnap: .1,
    center: [40, -90], 
    zoom: 4,
    zoomControl: false
}
// create Leaflet map and apply options
const map = L.map('map', options);
new L.control.zoom({ position: "bottomright" }).addTo(map)

// create Leaflet map and apply options
//	const map = L.map('map'); //options);

// request a basemap tile layer and add to the map
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
})();