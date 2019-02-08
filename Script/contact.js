//Google Maps
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 38.3993, lng: -90.3859914 }
  });

  var beachMarker = new google.maps.Marker({
    position: { lat: 38.3993, lng: -90.3859914 },
    map: map,
    url: "imgs/icon.png",
    icon: ""
  });
}
