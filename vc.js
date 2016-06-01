window.addEventListener("DOMContentLoaded", function() {
  document.body.style.backgroundColor="#EEE";
  document.getElementById('col5').style.backgroundColor="#EEE";
  document.getElementById('col4_content').style.backgroundColor="#EEE";

  // remove "Personal Homepage" link
  var links = document.getElementsByTagName("a");
  var i;
  for(i = 0; i < links.length; ++i) {
    if(links[i].href == "#"){
      links[i].parentElement.removeChild(links[i]);
    }
  }

  // move all into cube
  var full = document.getElementById("col4_content");

  // replace umlaut (dah!)
  oldHTML = full.innerHTML.replace(/\u00fc/g, "ue");

  full.innerHTML = '<div id="experiment"> \
    <div id="cube"> \
        <div class="face one"> \
            \
        </div> \
        <div class="face two" > \
            ' + oldHTML + ' \
        </div> \
        <div class="face three"> \
            <img alt="VCard" src="https://rawgit.com/ax3l/js_snippets/master/vcard.png" style="width: 300px; display: block; margin-left: auto; margin-right:auto; margin-top: 50px;" /> \
        </div> \
        <div class="face four"> \
            \
        </div> \
        <div class="face five"> \
            <iframe width="360" height="250" src="https://www.youtube-nocookie.com/embed/nwZuG-XtUDE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe> \
        </div> \
        <div class="face six"> \
            \
        </div> \
    </div> \
    <style type="text/css"> \
img { \
  width: 120px; \
} \
#experiment {\
  -webkit-perspective: 800px; \
  -webkit-perspective-origin: 50% 200px; \
  -moz-perspective: 800px; \
  -moz-perspective-origin: 50% 200px; \
  perspective: 800px; \
  perspective-origin: 50% 200px; \
} \
\
#cube { \
  position: relative; \
  margin: 100px auto; \
  height: 400px; \
  width: 400px; \
  -webkit-transition: -webkit-transform 2s linear; \
  -webkit-transform-style: preserve-3d; \
  -moz-transition: -moz-transform 2s linear; \
  -moz-transform-style: preserve-3d; \
  transition: transform 2s linear; \
  transform-style: preserve-3d; \
} \
\
.face { \
  position: absolute; \
  height: 360px; \
  width: 360px; \
  padding: 20px; \
  background-color: rgba(230, 230, 230, 0.85); \
  font-size: 85%; \
  line-height: 1em; \
  border: 1px solid #555; \
  border-radius: 3px; \
} \
\
#cube .one  { \
  -webkit-transform: rotateX(90deg) translateZ(200px); \
  -moz-transform: rotateX(90deg) translateZ(200px); \
  transform: rotateX(90deg) translateZ(200px); \
} \
\
#cube .two { \
  -webkit-transform: translateZ(200px); \
  -moz-transform: translateZ(200px); \
  transform: translateZ(200px); \
} \
\
#cube .three { \
  -webkit-transform: rotateY(90deg) translateZ(200px); \
  -moz-transform: rotateY(90deg) translateZ(200px); \
  transform: rotateY(90deg) translateZ(200px); \
} \
\
#cube .four { \
  -webkit-transform: rotateY(180deg) translateZ(200px); \
  -moz-transform: rotateY(180deg) translateZ(200px); \
  transform: rotateY(180deg) translateZ(200px); \
} \
\
#cube .five { \
  -webkit-transform: rotateY(-90deg) translateZ(200px); \
  -moz-transform: rotateY(-90deg) translateZ(200px); \
  transform: rotateY(-90deg) translateZ(200px); \
} \
\
#cube .six { \
  -webkit-transform: rotateX(-90deg) rotate(180deg) translateZ(200px); \
  -moz-transform: rotateX(-90deg) rotate(180deg) translateZ(200px); \
  transform: rotateX(-90deg) rotate(180deg) translateZ(200px); \
} \
    </style>';
}, false);


// Cube CSS Awesomeness: thanks Paul Hayes!
//   http://paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/
//   source: https://github.com/fofr/paulrhayes.com-experiments/tree/master/cube-3d
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;
document.body.addEventListener("keydown", function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;

        case 38: // up
            xAngle += 90;
            evt.preventDefault();
            break;

        case 39: // right
            yAngle += 90;
            break;

        case 40: // down
            xAngle -= 90;
            evt.preventDefault();
            break;
    };
    document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});
