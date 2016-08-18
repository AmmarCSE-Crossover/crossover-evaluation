export function initMap(){
    let map;

console.log('initing in here')
console.log(require)
    window.require([
        "esri/map", 
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/graphic", 
        "esri/layers/GraphicsLayer" 
        ], 
        function(Map, Point, SimpleMarkerSymbol, Graphic, GraphicsLayer) {
console.log('initing in there')
            map = new Map("map", {
              basemap: "streets",
              center: [-88.21,42.21],
              zoom: 10
            });
            map.on("load", function() {
              var gl = new GraphicsLayer();
              var p = new Point(-88.380801, 42.10560);
              var s = new SimpleMarkerSymbol().setSize(60);
              var g = new Graphic(p, s);
              gl.add(g);
              map.addLayer(gl);
            });
        })
}
