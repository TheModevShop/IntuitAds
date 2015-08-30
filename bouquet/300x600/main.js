$(window).load(function() {
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
    
    .to("#e-invoicing", 0.5, {opacity: 1, y: 40}, "-=0.8")
    .add("wait", "+=1.7")
    
    .to("#own-it", 0.3, {opacity: 1}, "wait")
    .add("wait", "+=0.5")

    .to("#button-tag", 0.5, {opacity: 1}, "wait")
    .add("wait", "+=0.5")
    .to("#button-tag .button", 0.3, {scale: 1.13}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')

    .add("wait", "+=5")
    .to("#button-tag .button", 0.2, {scale: 1}, 'wait')
  

    t2.to(".background-image", 10, {scale: 1.15});

  function onComplete() {
    t2.restart();
    tl.restart();
  }

//End Ready
});

