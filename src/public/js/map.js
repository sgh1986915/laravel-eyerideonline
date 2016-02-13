function initialize() {
  var myPos = { lat: 26.0663, lng: -80.2115 };
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: myPos,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var contentString = '<div id="content">' +
    '<p>4737 Orange Dr<br>' +
    'Fort Lauderdale 33314</p>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  var marker = new google.maps.Marker({
    position: myPos,
    map: map,
    title: 'EyeRide'
  });
  infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', initialize);