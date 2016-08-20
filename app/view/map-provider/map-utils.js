//initially forced to do this since we are waiting on window.require in the browser
export let mapPointToCoordinates = null

if(typeof window != 'undefined'){
    window.require([
        "esri/geometry/webMercatorUtils",
        "dojo/domReady!"
        ], 
        function(webMercatorUtils)  {
            mapPointToCoordinates = (mapPoint) => {
              //the map is in web mercator but display coordinates in geographic (lat, long)
              let coordinates = webMercatorUtils.webMercatorToGeographic(mapPoint);
              //display mouse coordinates
              //lat, long
              //console.log(mp.x.toFixed(6) + ", " + mp.y.toFixed(6));
              return coordinates 
            }
        }
    )
}
