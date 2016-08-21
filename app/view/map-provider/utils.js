import {map} from './agent'
//initially forced to do this since we are waiting on window.require in the browser
export let mapPointToCoordinates = null
export let addGraphic = null
export let clearGraphics = null
export let coordinatesToPin = null
export let getUserPosition = null

if (typeof window != 'undefined') {
    window.require([
            "esri/geometry/webMercatorUtils",
            "esri/geometry/Point",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/graphic",
            "esri/Color",
            "esri/layers/GraphicsLayer",
            "dojo/domReady!"
        ],
        function(webMercatorUtils, Point, SimpleMarkerSymbol, SimpleLineSymbol, Graphic, Color, GraphicsLayer) {
            mapPointToCoordinates = (mapPoint) => {
                //the map is in web mercator but display coordinates in geographic (lat, long)
                let geographic = webMercatorUtils.webMercatorToGeographic(mapPoint);
                return {
                    latitude: geographic.x.toFixed(6),
                    longitude: geographic.y.toFixed(6)
                }
            }

            addGraphic = (point, map) => {
                let symbol = new SimpleMarkerSymbol(
                    SimpleMarkerSymbol.STYLE_CIRCLE,
                    12,
                    new SimpleLineSymbol(
                        SimpleLineSymbol.STYLE_SOLID,
                        new Color([210, 105, 30, 0.5]),
                        8
                    ),
                    new Color([210, 105, 30, 0.9])
                );
                let graphic = new Graphic(point, symbol);
                map.graphics.add(graphic)
            }

            clearGraphics = (map) => {
                map.graphics.clear()
            }

            coordinatesToPin = (coordinates) => {
                let point = new Point(coordinates.longitude, coordinates.latitude)
                addGraphic(point, map)
            }

            getUserPosition = callback => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(callback, locationError);
                } else {
                    alert("Browser doesn't support Geolocation. Visit http://caniuse.com to see browser support for the Geolocation API.");
                }

                let locationError = error => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("Location not provided");
                            break;

                        case error.POSITION_UNAVAILABLE:
                            alert("Current location not available");
                            break;

                        case error.TIMEOUT:
                            alert("Timeout");
                            break;

                        default:
                            alert("unknown error");
                            break;
                    }
                }
            }
        }
    )
}
