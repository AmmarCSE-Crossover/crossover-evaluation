import { zoomToLocation, getUserPosition } from './utils'
import { attachClickHandler } from './events'

export function initMap(clickHandler) {
    window.require([
        "esri/map",
        "esri/dijit/Search",
        "esri/geometry/Point",
        "dojo/domReady!"
    ],
    function(Map, Search, Point) {
        let map
        getUserPosition(location => {
            let point = new Point(location.coords.longitude, location.coords.latitude)
            map = new Map("map", {
                    basemap: "streets",
                    center: point,
                    zoom: 10
                })

            attachClickHandler(map, clickHandler)

            let search = new Search({
                map: map,
                showInfoWindowOnSelect: false,
                enableInfoWindow: false
             }, "search");
             search.startup();
        })
    })
}
