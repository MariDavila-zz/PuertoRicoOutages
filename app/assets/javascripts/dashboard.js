/**
 * Created by mari on 1/8/18.
 */
function initMap() {
  var uluru = {lat: 18.37481, lng: -66.06836849999999};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}