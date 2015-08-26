$(document).ready(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  tl.to("#footer", 0.5, {x: -96})    
    .to("#logo", 0.6, {opacity: 1}, "-=0.6")
    .to("#logo", 0.1, {css:{borderLeftColor:'rgba(0, 0, 0, 0.13)'}})
    .to("#tag", 0.6, {opacity: 1})
    // .add("wait", "+=0.4")
    // .to("#overlay", 1.8, {opacity: 0.3}, "wait")

    .add("wait", "+=1.5")
    .to("#tag", 0.3, {opacity: 0}, "wait")

    .to("#switched-to-quickbooks", 0.3, {opacity: 1})
    .add("wait", "+=2")
    .to("#switched-to-quickbooks", 0.3, {opacity: 0}, "wait")

    .to("#overlay", 1.4, {opacity: 0.4}, "wait")
    
    .to("#e-invoicing", 0.5, {opacity: 1, x: 40}, "-=0.8")
    .add("wait", "+=0.5")
    
    .to("#own-it", 0.3, {opacity: 1}, "wait")
    .add("wait", "+=0.5")

    .to("#button-tag", 0.5, {opacity: 1}, "wait")
    .add("wait", "+=0.5")
    .to("#button-tag .button", 0.3, {scale: 1.13}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')

    .add("wait", "+=5")
    .to("#button-tag .button", 0.2, {scale: 1}, 'wait')


  function onComplete() {
    tl.restart();
  }

//End Ready
});

