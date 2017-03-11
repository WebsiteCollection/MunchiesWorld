function myMap() {
  var myLatLng = {lat: 36.04, lng: -115.25};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Munchies World'
  });
}
