document.addEventListener('DOMContentLoaded', function(){
  // year
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // add touch/mouse interactions so buttons stay 'pressed' during touch/click
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(btn){
    // touch
    btn.addEventListener('touchstart', function(e){
      btn.classList.add('pressed');
    }, {passive:true});
    btn.addEventListener('touchend', function(e){
      // small timeout so user sees the effect
      setTimeout(function(){ btn.classList.remove('pressed'); }, 140);
    });

    // mouse
    btn.addEventListener('mousedown', function(){ btn.classList.add('pressed'); });
    btn.addEventListener('mouseup', function(){ setTimeout(function(){ btn.classList.remove('pressed'); }, 120); });
    btn.addEventListener('mouseleave', function(){ btn.classList.remove('pressed'); });
  });
});
