/*
    This is an example implementation of the Leaflet.js map to fulfill the
    requirements for this assignment. This is provided as an aid to help you get
    unstuck. This example does not implement the full set of requirements, so
    you cannot just copy/paste this example into your `main.js` file to
    successfully complete the assignment.

    Use this to learn and help yourself get unstuck. There is confusing
    info online about the map layers, so these examples are known to work with
    no additional registration or joining of third-party services.
*/

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',

});

var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
}

var map = L.map('map-container').setView([46.852, -121.760], 13);

L.control.layers(mapLayers).addTo(map);
satLayer.addTo(map);

var marker = L.marker([46.852, -121.760]).addTo(map);
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
