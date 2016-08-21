import { attachClickHandler, setUpExtentChange } from './events'
import { getUserPosition } from './utils'

export let map = null

export function initMap(userType, clickHandler) {
    window.require([
        "esri/map",
        "esri/dijit/Search",
        "esri/geometry/Point",
        "dojo/domReady!"
    ],
    function(Map, Search, Point) {
        getUserPosition(location => {
            let point = new Point(location.coords.longitude, location.coords.latitude)
            map = new Map("map", {
                    basemap: "streets",
                    center: point,
                    zoom: 10
                })

            //I have no idea why I decoupled the code this way
            //there is no use currently of having a separate events module
            //sigh, oh well, time is running short
            attachClickHandler(map, clickHandler)

            if(userType == 'patient'){
                setUpExtentChange(map)
            }

            let search = new Search({
                map: map,
                showInfoWindowOnSelect: false,
                enableInfoWindow: false
             }, "search");
             search.startup();
        })
    })
}
