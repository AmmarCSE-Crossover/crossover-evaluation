export function initMap(){
    let map
    let graphic
    let currLocation
    let watchId

    window.require([
        "esri/map", 
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/graphic", 
        "esri/Color", 
        "esri/layers/GraphicsLayer",
        "esri/dijit/Search",
        "esri/geometry/webMercatorUtils",
        "dojo/domReady!"
        ], 
        function(Map, Point, SimpleMarkerSymbol, SimpleLineSymbol, Graphic, Color, GraphicsLayer, Search, webMercatorUtils)  {
            map = new Map("map", {
              basemap: "streets",
              center: [-88.21,42.21],
              zoom: 10
            });
            map.on("load", initFunc);

            function orientationChanged() {
              if(map){
                map.reposition();
                map.resize();
              }
            }

            function initFunc(map) {
              if( navigator.geolocation ) {  
                navigator.geolocation.getCurrentPosition(zoomToLocation, locationError);
                watchId = navigator.geolocation.watchPosition(showLocation, locationError);
              } else {
                alert("Browser doesn't support Geolocation. Visit http://caniuse.com to see browser support for the Geolocation API.");
              }
            }

            function locationError(error) {
              //error occurred so stop watchPosition
              if( navigator.geolocation ) {
                navigator.geolocation.clearWatch(watchId);
              }
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

            function zoomToLocation(location) {
              var pt = new Point(location.coords.longitude, location.coords.latitude);
              addGraphic(pt);
              map.centerAndZoom(pt, 12);
            }

            function showLocation(location) {
              //zoom to the users location and add a graphic
              var pt = new Point(location.coords.longitude, location.coords.latitude);
              if ( !graphic ) {
                addGraphic(pt);
              } else { // move the graphic if it already exists
                graphic.setGeometry(pt);
              }
              map.centerAt(pt);
            }
            function addGraphic(pt){
              var symbol = new SimpleMarkerSymbol(
                SimpleMarkerSymbol.STYLE_CIRCLE, 
                12, 
                new SimpleLineSymbol(
                  SimpleLineSymbol.STYLE_SOLID,
                  new Color([210, 105, 30, 0.5]), 
                  8
                ), 
                new Color([210, 105, 30, 0.9])
              );
              graphic = new Graphic(pt, symbol);
              map.graphics.add(graphic);
            }

            map.on('click',(event)=> mapPointToCoordinates(event))

            let search = new Search({
                map: map,
                showInfoWindowOnSelect: false,
                enableInfoWindow: false
             }, "search");
             search.startup();

            function mapPointToCoordinates(evt) {
              //the map is in web mercator but display coordinates in geographic (lat, long)
              var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
              //display mouse coordinates
              //lat, long
              console.log(mp.x.toFixed(6) + ", " + mp.y.toFixed(6));
            }
        })
}
