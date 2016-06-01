window.addEventListener("DOMContentLoaded", function() {
  document.body.style.backgroundColor="#EEE";
  document.getElementById('col5').style.backgroundColor="#EEE";
  document.getElementById('col4_content').style.backgroundColor="#EEE";

  // add PIConGPU logo
  var content = document.getElementById("col4_content");
  content.innerHTML += "<img alt='PIConGPU' target='_blank' src='https://rawgit.com/ax3l/js_snippets/master/vcard.png' />";

  // PIConGPU video
  // content.innerHTML += '<br /><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nwZuG-XtUDE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';

  // portrait event handler
  var portrait = document.getElementsByTagName("img")[0];
  portrait.addEventListener("dblclick", function() {
    var full = document.getElementById("col4_content");
    full.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nwZuG-XtUDE?rel=0&amp;showinfo=0&mp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
  }, false);

  // remove "Personal Homepage" link
  var links = document.getElementsByTagName("a");
  var i;
  for(i = 0; i < links.len; ++i) {
    if(links[i].href == "#"){
      links[i].parentElement.removeChild(links[i]);
    }
  }
}, false);
