$(document).ready(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.to("#footer", 0.3, {y: -46})
    .to("#tag", 1, {opacity: 1})
    .add("wait", "+=0.4")
    .to("#overlay", 1.8, {opacity: 0.3}, "wait")
    .add("wait", "+=1.2")
    .to("#tag", 0.5, {opacity: 0}, "wait")

    .to("#tag-2", 0.5, {opacity: 1})
    .add("wait", "+=2.6")
    .to("#tag-2", 0.5, {opacity: 0}, "wait")
    
    .to("#tag-3", 0.5, {opacity: 1, y: 20})
    .add("wait", "+=1.8")
    
    .to("#tag-4", 0.3, {opacity: 1}, "wait")
    .add("wait", "+=1.2")

    .to("#tag-5", 0.5, {opacity: 1}, "wait")
    .add("wait", "+=1.1")
    .to("#tag-5 .button", 0.3, {scale: 1.2}, 'wait')
    .add("wait", "+=0.001")
    .to("#tag-5 .button", 0.3, {scale: 1}, 'wait')

    .add("wait", "+=5")
    .to("#tag-5 .button", 0.2, {scale: 1}, 'wait')
  

    t2.to(".background-image", 7, {scale: 1.1});

  function onComplete() {
    tl.restart();
  }

//End Ready
});
