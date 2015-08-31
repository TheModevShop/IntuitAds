$(window).load(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.add("wait", "+=0.2") 
    .to("#logo", 0.5, {opacity: 1}, 'wait')


    .add("wait", "+=0")
    .to("#paper", 0.5, {opacity: 1}, 'wait')

    .add("wait", "+=1.5")
    .to("#paper", 0.3, {opacity: 0}, 'wait')
    .add("wait", "+=0.2")

    .to("#paper-work", 0.3, {opacity: 1}, 'wait')
    .add("wait", "+=1.5")
    .to("#paper-work", 0.3, {opacity: 1}, 'wait')

    .to("#logo", 0.3, {opacity: 0}, 'wait')
    .to("#paper-work", 0.5, {opacity: 0}, 'wait')

    .add("wait", "+=0.6")

    .add("wait", "+=0.6")
    .to("#going-paperless", 0.5, {opacity: 1}, 'wait')


    .add("wait", "+=1.5")
    .to("#body-logo", 0.5, {opacity: 1}, 'wait')
    .to("#own-it", 0.5, {opacity: 1}, 'wait')
    .to("#ipad", 0.5, {y: -85}, 'wait')


    .add("wait", "+=1.7")
    .to("#own-it", 0.5, {opacity: 0}, 'wait')
    .to("#going-paperless", 0.5, {opacity: 0}, 'wait')
    .to("#solid-green", 0.5, {opacity: 1}, 'wait')

    .add("wait", "+=0.9")
    .to("#button-tag .button", 0.3, {scale: 1.2}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')
    

    t2.to(".background-image", 10, {scale: 1.1})


  function onComplete() {
    // tl.restart();
    // t2.restart();
  }

});
