// About Us Slide
let mission = document.getElementById("missionBtn");
let vision = document.getElementById("visionBtn");
let situation = document.getElementById("situationBtn");
let exMile = document.getElementById("extraMileBtn");

//Event Listeners
mission.addEventListener("click", contentLink);
vision.addEventListener("click", contentLink);
situation.addEventListener("click", contentLink);
exMile.addEventListener("click", contentLink);

//Function
function contentLink() {
  var allContent = document.querySelectorAll(".valuesContent section");
  for (var i = 0; i < allContent.length; i++) {
    allContent[i].className = "hidden";
  }
  var contentId = this.attributes["data-type"].value;
  var content = document.getElementById(contentId);
  if (content.className === "hidden") {
    content.className = "";
  } else {
    content.className = "hide";
  }
}
//Open Consultation Form
let conOpened = document.getElementById("consultBtn");

conOpened.addEventListener("click", openconsultForm);

function openconsultForm() {
  const conMod = document.getElementById("conModule");
  conMod.style.display = "block";
}
//Close Consultation Modal
let conClosed = document.getElementById("modClose");

conClosed.addEventListener("click", closeconsultForm);

function closeconsultForm() {
  const conMod = document.getElementById("conModule");
  conMod.style.display = "";
}
