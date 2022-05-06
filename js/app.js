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

// request a basemap tile layer and add to the map
// L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
L.tileLayer('https://api.mapbox.com/styles/v1/zacstanley/cl26t5a9k001e15o319at3jeh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//jQuery method using AJAX request for GeoJSON data
// load, filter, and style the state outline 
$.getJSON("data/cdps_svis_whp_ctr.json", function (data) {
    var pts = L.geoJson(data, {
      style: function (feature) {
        return {
          color: '#20282e', // Gray
          // Make line weight larger than the county outline
          weight: 1.5,
          fillOpacity: 0,
          // This property allows us control interactivty of layer
          interactive: false
        };
      }
    });

    // Add layer to map!
    pts.addTo(map)

});
})();