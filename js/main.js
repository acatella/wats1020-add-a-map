
$(document).ready(function() {

  //Map embed
  var map = L.map('map-container').setView([46.851249, -121.764438],13);

  var satLayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    subdomains:['otile1','otile2','otile3','otile4']
  });

  var drawLayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    subdomains:['otile1','otile2','otile3','otile4']
  });

  var mpLayers = {
    "Satellite": satLayer,
    "Drawn Map": drawLayer
  }

  L.control.layers(mpLayers).addTo(map);
  satLayer.addTo(map);

  //marker layers
  var marker = L.marker([46.851249, -121.764438]).addTo(map);
  marker.bindPopup('Mt. Rainier\'s summit. Only the brave make it here.');

  //polygon layer
  var avalancheZone = L.polygon([
    [46.868029, -121.749300],
    [46.876789, -121.737155],
    [46.862947, -121.694200],
    [46.850282, -121.724704]
  ], {
    color: 'green'
  }).addTo(map);
  avalancheZone.bindPopup('Great ski area. Lots of avalanches, but worth it.');

  //circle for bear country
  var bearCountry = L.circle([46.862474, -121.856354], 500, {
    color: "red",
  }).addTo(map);
  bearCountry.bindPopup('Careful. This here\'s bear country.');


  //enable header buttons to work
  $('.nav-item').click(function(e) {
    var button = e.target;
    var buttonText = button.innerHTML;
    buttonText = buttonText.toLowerCase();

    //Smooth scrolling
    // $(".nav-item").click(function() {
      // $.smoothScroll({
      //   scrollElement: $(document.body),
      //   scrollTarget: "#about"
      // });
    // });

    $("[aria-controls='"+buttonText+"']").trigger("click");
  });
});
