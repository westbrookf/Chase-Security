// Home Service Slide
let BlockOne = document.getElementById("slideBlockOne");
let BlockTwo = document.getElementById("slideBlockTwo");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", SlideLeft);
next.addEventListener("click", SlideRight);

function SlideRight() {
  BlockOne.style.marginLeft = "-1000px";
  BlockOne.style.opacity = "0";
  BlockTwo.style.opacity = "1";
}
function SlideLeft() {
  BlockOne.style.marginLeft = "0px";
  BlockOne.style.opacity = "1";
  BlockTwo.style.opacity = "0";
}

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
