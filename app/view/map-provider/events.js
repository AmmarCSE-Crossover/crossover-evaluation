import {ajax, toQueryString} from '../../utils'
//sorry for the 'utils' ambiguity, the bottom one is 'map-utils'
import {addGraphic, clearGraphics} from './utils'

export function attachClickHandler(map, handler){
    map.on('click', event => (event.map = map, handler(event)))
}

export function setUpExtentChange(map){
    map.on("extent-change", (event) => extentChangeHandler(event, map));
}

let extentChangeHandler = null
if (typeof window != 'undefined') {
    window.require([
            "esri/geometry/webMercatorUtils",
            "esri/geometry/Point",
            "dojo/domReady!"
        ],
        function(webMercatorUtils, Point) {
            extentChangeHandler = (event, map) => {
                let geographic = webMercatorUtils.webMercatorToGeographic(event.extent);

                ajax('GET', '/donors'+toQueryString(geographic), response => {
                        const {status, donors} = JSON.parse(response)
                        if(status == true){
                            clearGraphics(map)
                            donors.forEach(donor => {
                                let point = new Point(donor.coordinates[1], donor.coordinates[0])
                                addGraphic(point, map)
                            })
                        }
                    } 
                )
            }
        }
    )
}
