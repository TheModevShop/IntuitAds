$(window).load(function() {
  var tl = new TimelineLite({onComplete: onComplete});
  var t2 = new TimelineLite();
  tl.add("wait", "+=0.2")
    .to("#footer", 0.5, {y: -90}, 'wait')
    .add("wait", "+=0.4")
    .to("#logo", 0.5, {opacity: 1}, 'wait')
    .to("#paper", 0.5, {opacity: 1}, 'wait')
    .add("wait", "+=2.8")
    .to("#paper", 0.5, {opacity: 0}, 'wait')
    .add("wait", "+=0.2")
    .to("#paper-work", 0.5, {opacity: 1}, 'wait')
    .add("wait", "+=2.8")
    .to("#paper-work", 0.5, {opacity: 1}, 'wait')

    .to("#logo", 0.5, {opacity: 0}, 'wait')
    .to("#paper-work", 0.5, {opacity: 0}, 'wait')

    .add("wait", "+=0.6")
    .to("#footer", 0.5, {y: -250}, 'wait')

    .to("#going-paperless", 0.5, {opacity: 1}, 'wait')




  function onComplete() {
    // tl.restart();
    // t2.restart();
  }

});
