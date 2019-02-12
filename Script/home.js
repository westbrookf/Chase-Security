//Testimonials Slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("testimonial");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
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
