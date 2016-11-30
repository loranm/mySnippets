function intervalTrigger() {
  return window.setInterval( function() {
    if (timedCount >= markers.length) {
       timedCount = 0;
    }
    google.maps.event.trigger(markers[timedCount], "click");
    timedCount++;
  }, 5000 );
};
var id = intervalTrigger();


window.clearInterval(id);
