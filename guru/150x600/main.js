$(document).ready(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.to("#logo", 0.1, {css:{borderTopColor:'rgba(0, 0, 0, 0.13)'}})
    .add("wait", "+=1.4")
    .to("#tag", 1, {opacity: 1}, "wait")

    .add("wait", "+=2.4")
    .to("#tag", 0.5, {opacity: 0}, "wait")

    .to("#switched-to-quickbooks", 0.5, {opacity: 1})
    .add("wait", "+=2")
    .to("#switched-to-quickbooks", 0.5, {opacity: 0}, "wait")

    .to("#overlay", 1.4, {opacity: 0.4}, "wait")
    
    .to("#e-invoicing", 0.5, {opacity: 1, y: 30}, "-=0.8")
    .add("wait", "+=1.8")
    
    .to("#own-it", 0.3, {opacity: 1}, "wait")
    .add("wait", "+=0.5")

    .to("#button-tag", 0.5, {opacity: 1}, "wait")
    .add("wait", "+=0.5")
    .to("#button-tag .button", 0.3, {scale: 1.13}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')

    .add("wait", "+=5")
    .to("#button-tag .button", 0.2, {scale: 1}, 'wait')
  

    t2.to(".background-image", 6, {y: -170});

  function onComplete() {
    t2.restart();
    tl.restart();
  }

//End Ready
});






// tl.to("#footer", 0.3, {y: -46})
//     .to("#tag", 1, {x: 90})
//     .add("blueGreenSpin", "+=0.2")
//     .to("#tag", 2, {y: 20, rotation: 360}, "blueGreenSpin")
//     .add("opacity", "+=0.4")
//     .to("#tag", 0.3, {opacity: 0}, "opacity");