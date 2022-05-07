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

// create styles common to all points
const commonStyles = {
    weight: 1,
    stroke: 1,
    fillOpacity: .8
}

//jQuery method using AJAX request for GeoJSON data
// 
$.getJSON("data/cdps_svis_whp_ctr.json", function (sviPoints) {
    var moderate = L.geoJson(sviPoints, {
        pointToLayer: function (feature, latlng) {
            // Draw circle marker based on pointToLayer function
            return L.circleMarker(latlng, commonStyles);
        },
        // // filter layer to display only class value of moderate
		// 			filter: function (feature) {
		// 				if (feature.properties.WHP_CLASS.Moderate) {
		// 					return feature;
		// 				}
		// 			},
        //             // style stroke and fill
		// 			style: function (feature) {
		// 				return {
		// 					color: '#FF4000',
		// 					fillColor: '#FF4000',
		// 					// call function get radius from overall svi weighted mean
		// 					radius: getRadius(feature.properties.OVERALL_WM)
		// 				}
        //             },
		// 			onEachFeature: function (feature, layer) {
		// 				// on mouseover change color to darker shade of orange
		// 				layer.on('mouseover', function () {
		// 					layer.setStyle({
		// 						fillColor: '#401000'
		// 					});
		// 				});
		// 				// return to original fill color when not hovering with mouse
		// 				layer.on('mouseout', function () {
		// 					layer.setStyle({
		// 						fillColor: '#FF4000'
		// 					});
		// 				});

		// 				var popup = `<h4>${feature.properties.CDP_STATE}</h4>
        //                 <p><b>Overall SVI:</b> ${feature.properties.OVERALL_WM}<br>
        //                 <p><b>Wildfire Hazard Potential:</b> ${feature.properties.WHP_CLASS}<br>`

		// 				// // Loop through all fuel sources in plants that split atoms
		// 				// for (var fuelSource in feature.properties.fuel_source) {
		// 				// 	// View the source
		// 				// 	console.log(fuelSource)
		// 				// 	//  Concat all fuel sources 
		// 				// 	popup += `<br>${fuelSource}: ${feature.properties.fuel_source[fuelSource]} MW`
		// 				// }

		// 				layer.bindPopup(popup)
		// 			}
				}).addTo(map);

});
})();