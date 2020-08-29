function copyElemText(id) {
  var p = document.getElementById(id);
  var text = p.textContent;
  var textArea = document.createElement("textarea");
  elem = document.body.appendChild(textArea);
  textArea.value = text;
  textArea.select();
  document.execCommand("copy");
  elem.remove();
  
  // p.style.backgroundColor = 'blue';
  
  var transitionEnd = whichTransitionEvent();
  
  p.classList.add('anim-copied');
  // $(this).one(transitionEnd, p.classList.remove('copied-anim'))
  setTimeout(() => {  
    p.classList.remove('anim-copied');
  }, 150); // same time as animation in class
  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  // https://www.sitepoint.com/delay-sleep-pause-wait/
}

// browser specific transition type
function whichTransitionEvent(){
  var t;
  var el = document.createElement('fakeelement');
  var transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  }
  
  for(t in transitions){
    if( el.style[t] !== undefined ){
      return transitions[t];
    }
  }
}

$(document).ready(function(){
  // play video on hover
  var vid = $('.vidLink').children();
  vid.on('mouseenter focus', function() {
    vid.get(0).play();
  })
  vid.on('mouseout blur', function() {
    vid.get(0).pause();
  })
});

