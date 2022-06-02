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
    let points, polygons;
    const url = "data/cdps_svis_whp.json"
    const arr = [];
    const arr1 = [];
    new L.control.zoom({ position: "topleft" }).addTo(map)

    // request a basemap tile layer and add to the map
    var lightBase = L.tileLayer('https://api.mapbox.com/styles/v1/zacstanley/cl26t5a9k001e15o319at3jeh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        maxZoom: 19
    });

    // request an imagery basemap tile layer and add to the map
    var imagery = L.tileLayer('https://api.mapbox.com/styles/v1/zacstanley/cl3w9wmw3000115p9l95auy7q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        maxZoom: 19
    });

    lightBase.addTo(map); //initial layer according to initial zoom

    map.on("zoomend", function (e) {
        console.log("Zoom level: ", map.getZoom());
        if (map.getZoom() > 10) { //Level 10 is the treshold 
            map.removeLayer(lightBase);
            imagery.addTo(map);
        } else {
            map.removeLayer(imagery);
            lightBase.addTo(map);
        }
    });



    // fit bounds to continental United States
    map.fitBounds([[24.396308, -124.848974], [51.384358, -66.885444]]);

    // create styles common to all points
    const commonStyles = {
        weight: 1,
        stroke: 1,
        fillOpacity: .8
    }

    // add sidebar
    var sidebar = L.control.sidebar('sidebar').addTo(map);
    map.addControl(sidebar);


    // jQuery method using AJAX request for GeoJSON point data
    // add sviPoint data
    $.getJSON("data/cdps_svis_whp_ctr.json", function (sviPoints) {
        console.log('svipoints', sviPoints)
        drawMap(sviPoints);

        function drawMap(sviPoints) {
            var options = {

                pointToLayer: pointToLayer,
                style: style,
                onEachFeature: onEachFeature
            }
            points = L.geoJson(sviPoints, options);
            points.addTo(map)
            points.on('click', e => {
                console.log('e', e.layer.feature.properties.CDP_STATE);
                polySelect(e.layer.feature.properties.CDP_STATE);
            })

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

                fillOpacity: .7,
                color: "black",
                weight: .2
            }

            if (feature.properties.WHP_CLASS === 'Very High') {
                styleOptions.fillColor = '#941000';
            }

            if (feature.properties.WHP_CLASS === 'Moderate') {
                styleOptions.fillColor = '#E68900';
            }

            if (feature.properties.WHP_CLASS === 'High') {
                styleOptions.fillColor = '#BD4400';
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
                        color: "#300133",
                        weight: 3
                    });

                },
                mouseout: function () {

                    layer.setStyle({
                        fillOpacity: .7,
                        color: "black",
                        weight: .2
                    });
                }
            });

            var tooltipInfo = `<h4><b>${feature.properties.CDP_STATE}</b> has <b>${feature.properties.WHP_CLASS}</b> wildfire hazard potential <br> and an overall social vulnerability ranking of <b>${feature.properties.OVERALL_WM}<br></b></h4>`


            layer.bindTooltip(tooltipInfo);

        }

    });

    var highlight = {
        color: '#300133',
        weight: 3,
        opacity: 500,
        dashArray: 6
    };

    function forEachFeature(feature, layer) {
        // Tagging each CDP polygon with their name for the search control.
        layer._leaflet_id = feature.properties.CDP_STATE;

        var popupContent = `<h3>${feature.properties.CDP_STATE}</h3><br>
         <h5><b>${feature.properties.WHP_CLASS}</b> wildfire hazard potential 
         and the social vulnerability rankings are:</h5><br>
         <h4>Socioeconomic Status: <b>${feature.properties.SE_WM}</b></h4><br>
         <h4>Housing Composition & Disability: <b>${feature.properties.HCD_WM}</b></h4><br>
         <h4>Minority Status & Language: <b>${feature.properties.M_WM}</b></h4><br>
         <h4>Housing Type & Transportation: <b>${feature.properties.HTT_WM}</b></h4><br>
         <h4>Overall: <b>${feature.properties.OVERALL_WM}</b></h4><br>`


        layer.bindPopup(popupContent);

        layer.on("click", function (e) {
            polygons.setStyle(style); //resets layer colors
            layer.setStyle(highlight);  //highlights selected.
        });
    }

    function style(feature) {

        var styleOptions = {

            fillOpacity: .7,
            color: "black",
            weight: .2
        }

        if (feature.properties.WHP_CLASS === 'Very High') {
            styleOptions.fillColor = '#941000';
        }

        if (feature.properties.WHP_CLASS === 'High') {
            styleOptions.fillColor = '#BD4400';
        }

        if (feature.properties.WHP_CLASS === 'Moderate') {
            styleOptions.fillColor = '#E68900';
        }

        return styleOptions;
    };

    // jQuery method using AJAX request for GeoJSON polygon data
    // add sviPolys data
    $.getJSON("data/cdps_svis_whp.json", function (sviPolys) {
        console.log(sviPolys)
        drawMap(sviPolys);

        // Initialize autocomplete with empty source.
        $("#autocomplete").autocomplete();

        function drawMap(sviPolys) {
            var options = {

                // pointToLayer: pointToLayer,
                style,
                onEachFeature: forEachFeature
            }
            polygons = L.geoJson(sviPolys, options)
        }


        for (i = 0; i < sviPolys.features.length; i++) {  //for loop that loads cdp name into an array for searching
            arr1.push({ label: sviPolys.features[i].properties.CDP_STATE, value: "" }); // push values into empty array
        }

        addDataToAutocomplete(arr1);  // passes array for sorting and to load search control.

        //cdpState.addTo(map);

        // Autocomplete search funtion
        function addDataToAutocomplete(arr) {

            arr.sort(function (a, b) { // sort object by Name
                var nameA = a.label, nameB = b.label
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })

            // The source for autocomplete.  https://api.jqueryui.com/autocomplete/#method-option
            $("#autocomplete").autocomplete("option", "source", arr);

            $("#autocomplete").on("autocompleteselect", function (event, ui) {
                polySelect(ui.item.label);  // grabs selected CDP name
                ui.item.value = '';
            });
        }	// Autocomplete search end

        // fire off click event and zoom to polygon  

        // END...fire off click event and zoom to polygon

        polygons.on("click", function (e) {
            map.fitBounds(e.layer.getBounds().pad(.1));
        });
    });

    function polySelect(a) {
        polygons && polygons.addTo(map);
        map._layers[a].fire('click');  // 'clicks' on CDP name from search
        var layer = map._layers[a];
        map.fitBounds(layer.getBounds().pad(.1));  // zooms to selected poly, creates space around poly using pad method
    }

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