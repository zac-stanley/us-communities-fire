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

    // jQuery method using AJAX request for GeoJSON point data
    // add sviPoint data
    $.getJSON("data/cdps_svis_whp_ctr.json", function (sviPoints) {
        console.log(sviPoints)
        drawMap(sviPoints);

        function drawMap(sviPoints) {
            var options = {

                pointToLayer: pointToLayer,
                style: style,
                onEachFeature: onEachFeature
            }
            L.geoJson(sviPoints, options) .addTo(map);
            
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
                color: "whitesmoke",
                weight: .1
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
                        color: "yellow",
                        weight: 3
                    });

                },
                mouseout: function () {

                    layer.setStyle({
                        fillOpacity: .6,
                        color: "whitesmoke",
                        weight: .1
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
            L.geoJson(sviPolys, options).addTo(map);
        }

        function style(feature) {

            var styleOptions = {

                fillOpacity: .6,
                color: "whitesmoke",
                weight: .1
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
    });
})();