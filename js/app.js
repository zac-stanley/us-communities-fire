(function () {
    // initial Leaflet map options
    const options = {
        zoomSnap: .1,
        center: [39, -98.58],
        zoom: 5.3,
        zoomControl: false
    }
    // create Leaflet map and apply options
    const map = L.map('map', options);
    let points,polygons;
    const url = "data/cdps_svis_whp.json"
    const arr = [];
    const arr1 = [];
    new L.control.zoom({ position: "topleft" }).addTo(map)

    // request a basemap tile layer and add to the map
    // L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    L.tileLayer('https://api.mapbox.com/styles/v1/zacstanley/cl26t5a9k001e15o319at3jeh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // fit bounds to continental United States
    map.fitBounds ([[ 24.396308, -124.848974],[51.384358, -66.885444]]);

    // create styles common to all points
    const commonStyles = {
        weight: 1,
        stroke: 1,
        fillOpacity: .8
    }

    // jQuery method using AJAX request for GeoJSON point data
    // add sviPoint data
    $.getJSON("data/cdps_svis_whp_ctr.json", function (sviPoints) {
        console.log('svipoints',sviPoints)
        drawMap(sviPoints);

        function drawMap(sviPoints) {
            var options = {

                pointToLayer: pointToLayer,
                style: style,
                onEachFeature: onEachFeature
            }
            points=L.geoJson(sviPoints, options);
            points.addTo(map)
            
        }

        function pointToLayer(feature, latlng) {
            // function will take Point Feature geometry
            // and convert to a Leaflet layer by returning
            // a Leaflet marker or SVG such as circle or circleMarker

            return L.circleMarker(latlng, {

                radius: calcRadius(feature.properties.OVERALL_WM)

            });
        }

        function style(feature) {

            var styleOptions = {

                fillOpacity: .6,
                color: "black",
                weight: .2
            }

            if (feature.properties.WHP_CLASS === 'Very High') {
                styleOptions.fillColor = '#ffc937';
            }

            if (feature.properties.WHP_CLASS === 'Moderate') {
                styleOptions.fillColor = '#384051';
            }

            if (feature.properties.WHP_CLASS === 'High') {
                styleOptions.fillColor = '#f05449';
            }

            return styleOptions;
        }

        function calcRadius(val) {

            var radius = Math.sqrt(val / Math.PI);
            return radius * 25;

        }

        function onEachFeature(feature, layer) {

            layer.on({
                mouseover: function () {

                    layer.setStyle({
                        color: "whitesmoke",
                        weight: 3
                    });

                },
                mouseout: function () {

                    layer.setStyle({
                        fillOpacity: .6,
                        color: "black",
                        weight: .2
                    });
                }
            });

            var popupInfo = `<h3>${feature.properties.CDP_STATE}</h3>
        <h4>Overall SVI Score: <b>${feature.properties.OVERALL_WM}</b></h4>
        <h4>Wildfire Hazard Potential: <b>${feature.properties.WHP_CLASS}</b></h4>`


            layer.bindPopup(popupInfo);

        }

    });

    // jQuery method using AJAX request for GeoJSON polygon data
    // add sviPolys data
    $.getJSON("data/cdps_svis_whp.json", function (sviPolys) {
        console.log(sviPolys)
        drawMap(sviPolys);

        function drawMap(sviPolys) {
            var options = {

                // pointToLayer: pointToLayer,
                 style: style,
                // onEachFeature: onEachFeature
            }
           polygons= L.geoJson(sviPolys, options)
        }

        function style(feature) {

            var styleOptions = {

                fillOpacity: .6,
                color: "black",
                weight: 1.5
            }

            if (feature.properties.WHP_CLASS === 'Very High') {
                styleOptions.fillColor = '#ffc937';
            }

            if (feature.properties.WHP_CLASS === 'Moderate') {
                styleOptions.fillColor = '#384051';
            }

            if (feature.properties.WHP_CLASS === 'High') {
                styleOptions.fillColor = '#f05449';
            }

            return styleOptions;
        }

        $( "#autocomplete" ).autocomplete();

        // Set style function that sets fill color property
        function style(feature) {
            return {
                fillColor: 'green',
                fillOpacity: 0.5,
                weight: 2,
                opacity: 1,
                color: '#ffffff',
                dashArray: '3'
            };
        }
        var highlight = {
            'fillColor': 'yellow',
            'weight': 2,
            'opacity': 1
        };

        function forEachFeature(feature, layer) {
            // Tagging each state poly with their name for the search control.
            layer._leaflet_id = feature.properties.CDP_STATE;

            // var popupContent = "<p><b>STATE: </b>"+ feature.properties.STATE_NAME +
            //     "</br>REGION: "+ feature.properties.SUB_REGION +
            //     "</br>STATE ABBR: "+ feature.properties.STATE_ABBR +
            //     "</br>POP2010: "+ feature.properties.POP2010.toLocaleString() +
            //     "</br>Pop 2010 per SQMI: "+ feature.properties.POP10_SQMI.toLocaleString() +
            //     "</br>Males: "+ feature.properties.MALES.toLocaleString() +
            //     "</br>Females: "+ feature.properties.FEMALES.toLocaleString() +
            //     "</br>SQ Miles: "+ feature.properties.SQMI.toLocaleString() +'</p>';

            // layer.bindPopup(popupContent);

             layer.on("click", function (e) { 
            //     stateLayer.setStyle(style); //resets layer colors
                layer.setStyle(highlight);  //highlights selected.
             }); 
		}

         // Null variable that will hold layer
var cdpState = L.geoJson(null, {onEachFeature: forEachFeature});

$.getJSON(url, function(data) {
        cdpState.addData(data);
	
        for (i = 0; i < data.features.length; i++) {  //loads cdp name into an array for searching
            arr1.push({label:data.features[i].properties.CDP_STATE, value:""});
        }
       addDataToAutocomplete(arr1);  //passes array for sorting and to load search control.
    });

    cdpState.addTo(map);

    // Autocomplete search
	function addDataToAutocomplete(arr) {
                 
        arr.sort(function(a, b){ // sort object by Name
            var nameA=a.label, nameB=b.label
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        })

   		// The source for autocomplete.  https://api.jqueryui.com/autocomplete/#method-option
		$( "#autocomplete" ).autocomplete("option", "source", arr); 
	
		$( "#autocomplete" ).on( "autocompleteselect", function( event, ui ) {
			polySelect(ui.item.label);  //grabs selected state name
			ui.item.value='';
		});
	}	// Autocomplete search end

    // fire off click event and zoom to polygon  
  	function polySelect(a){
		map._layers[a].fire('click');  // 'clicks' on state name from search
		var layer = map._layers[a];
		map.fitBounds(layer.getBounds());  // zooms to selected poly
        }
// END...fire off click event and zoom to polygon
    });

   

    // get element from map
    map.on('zoom', () => {
        const currentZoom = map.getZoom();
        if (currentZoom >= 10) {
            // if polygons and points are present add to the map
            polygons && polygons.addTo(map);
            points && points.removeFrom(map);
        }
        else {
            points && points.addTo(map)
            polygons && polygons.removeFrom(map)
        }
    })

    

})();