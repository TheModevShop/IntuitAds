$(document).ready(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.to("#footer", 0.5, {x: -46})
    .to("#footer-extension", 1, {x: 360}, "-=0.4")
    .to("#logo", 0.1, {css:{borderLeftColor:'rgba(0, 0, 0, 0.13)'}})
    .to("#tag", 1, {opacity: 1})
    // .add("wait", "+=0.4")
    // .to("#overlay", 1.8, {opacity: 0.3}, "wait")

    .add("wait", "+=2.4")
    .to("#tag", 0.5, {opacity: 0}, "wait")

    .to("#switched-to-quickbooks", 0.5, {opacity: 1})
    .add("wait", "+=2")
    .to("#switched-to-quickbooks", 0.5, {opacity: 0}, "wait")

    .to("#overlay", 1.4, {opacity: 0.4}, "wait")
    
    .to("#e-invoicing", 0.5, {opacity: 1, x: 40}, "-=0.8")
    .add("wait", "+=1.2")
    
    .to("#own-it", 0.3, {opacity: 1}, "wait")
    .add("wait", "+=0.5")

    .to("#button-tag", 0.5, {opacity: 1}, "wait")
    .add("wait", "+=0.5")
    .to("#button-tag .button", 0.3, {scale: 1.13}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')

    .add("wait", "+=5")
    .to("#button-tag .button", 0.2, {scale: 1}, 'wait')
  

    t2.to(".background-image", 1.3, {css:{width:'450px'}});

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