export function initMap(){
    let map;

    window.require([
        "esri/map", 
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/graphic", 
        "esri/layers/GraphicsLayer",
        "esri/dijit/Search",
        "dojo/domReady!"
        ], 
        function(Map, Point, SimpleMarkerSymbol, Graphic, GraphicsLayer, Search)  {
            map = new Map("map", {
              basemap: "streets",
              center: [-88.21,42.21],
              zoom: 10
            });
            map.on("load", () => {
              let gl = new GraphicsLayer();
              let p = new Point(-88.380801, 42.10560);
              let s = new SimpleMarkerSymbol().setSize(60);
              let g = new Graphic(p, s);
              gl.add(g);
              map.addLayer(gl);
            });
            let search = new Search({
                map: map
             }, "search");
             search.startup();
        })
}
