$(document).ready(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.add("wait", "+=1.5")   
    .to("#logo", 0.6, {opacity: 1}, "wait")
    .to("#logo", 0.1, {css:{borderLeftColor:'rgba(0, 0, 0, 0.13)'}})
    .to("#tag", 0.6, {opacity: 1})
    
    .add("wait", "+=1.5")
    .to("#tag", 0.3, {opacity: 0}, "wait")

    .to("#switched-to-quickbooks", 0.3, {opacity: 1})
    .add("wait", "+=2")
    .to("#switched-to-quickbooks", 0.3, {opacity: 0}, "wait")

    .to("#overlay", 1.4, {opacity: 0.4}, "wait")
    
    .to("#e-invoicing", 0.5, {opacity: 1, x: 40}, "-=0.8")
    .add("wait", "+=1.5")
    
    .to("#own-it", 0.3, {opacity: 1}, "wait")
    .add("wait", "+=0.5")

    .to("#button-tag", 0.5, {opacity: 1}, "wait")
    .add("wait", "+=0.5")
    .to("#button-tag .button", 0.3, {scale: 1.13}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')

    .add("wait", "+=5")
    .to("#button-tag .button", 0.2, {scale: 1}, 'wait')

    t2.to(".background-image", 4, {y: -60});

  function onComplete() {
    tl.restart();
    t2.restart();
  }

//End Ready
});

