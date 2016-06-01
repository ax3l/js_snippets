window.addEventListener("DOMContentLoaded", function() {
  document.body.style.backgroundColor="#EEE";
  document.getElementById('col4_content').style.backgroundColor="#EEE";

  // add PIConGPU logo
  var content = document.getElementById("col4_content");
  content.innerHTML += "<img alt='PIConGPU' target='_blank' src='https://raw.githubusercontent.com/ComputationalRadiationPhysics/picongpu/dev/doc/logo/pic_logo_320x140.png' />";
}, false);
