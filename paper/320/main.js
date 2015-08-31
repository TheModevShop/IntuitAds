$(window).load(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.add("wait", "+=0.2")
    .to("#footer", 0.5, {y: -90}, 'wait')

    .add("wait", "+=0.4")
    .to("#logo", 0.5, {opacity: 1}, 'wait')
    .to("#paper", 0.5, {opacity: 1}, 'wait')

    .add("wait", "+=1.5")
    .to("#paper", 0.3, {opacity: 0}, 'wait')
    .add("wait", "+=0.2")

    .to("#paper-work", 0.3, {opacity: 1}, 'wait')
    .add("wait", "+=1.5")
    .to("#paper-work", 0.3, {opacity: 1}, 'wait')

    .to("#logo", 0.3, {opacity: 0}, 'wait')
    .to("#paper-work", 0.5, {opacity: 0}, 'wait')

    .add("wait", "+=0.3")
    .to("#footer", 0.3, {y: -250}, 'wait')

    .add("wait", "+=0.3")
    .to("#going-paperless", 0.5, {opacity: 1}, 'wait')

    .add("wait", "+=1.5")
    .to("#body-logo", 0.5, {opacity: 1}, 'wait')
    .to("#own-it", 0.5, {opacity: 1}, 'wait')
    .to("#ipad", 0.5, {y: -120}, 'wait')


    .add("wait", "+=1.7")
    .to("#own-it", 0.5, {opacity: 0}, 'wait')
    .to("#going-paperless", 0.5, {opacity: 0}, 'wait')
    .to("#ipad", 0.5, {opacity: 0}, 'wait')
    .to("#button-tag", 0.5, {opacity: 1}, 'wait')
    .to("#body-logo", 0.5, {opacity: 0}, 'wait')
    .to("#footer", 0.5, {css: {backgroundColor: 'transparent'}}, 'wait')
    .to(".background-image", 0.5, {opacity: 0}, 'wait')
    .to("#solid-green", 0.5, {opacity: 1}, 'wait')

    .add("wait", "+=0.7")
    .to("#button-tag .button", 0.3, {scale: 1.2}, 'wait')
    .add("wait", "+=0.001")
    .to("#button-tag .button", 0.3, {scale: 1}, 'wait')

    t2.to(".background-image", 10, {scale: 1.1})


  function onComplete() {
    // tl.restart();
    // t2.restart();
  }

});
