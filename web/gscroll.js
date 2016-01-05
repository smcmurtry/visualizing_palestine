// from http://www.bloomberg.com/graphics/2015-auto-sales/js/gscroll.js
function gscroll() {
  var windowHeight,
      dispatch = d3.dispatch("scroll", "active"),
      _sections = d3.select('null'),
      i = NaN,
      sectionPos = [],
      n;
      fixed = d3.select('null'),
      isFixed = null,
      container = d3.select('body'),
      containerStart = 0;

  //start emiting events on
  function rv(els){
    _sections = els
    n = _sections.size()

    d3.select(window)
        .on("scroll.gscroll", reposition)
        .on('resize.gscroll', resize)
        .on('keydown.gscroll', keydown)

    d3.select('#scroll-button')
      .on('click', function(d) {
        scroll_by(1);
      })

    resize()
    d3.timer(function() {
      reposition();
      return true;
    });
  }


  function reposition(){
    var i1 = d3.bisect(sectionPos, pageYOffset - 10 - containerStart) // was -10
    i1 = Math.min(n - 1, i1)
    if (i != i1){
      _sections.classed('gscroll-active', function(d, i){ return i === i1 })
      dispatch.active(i1)
      i = i1

    }
  }

  function resize(){
    sectionPos = []
    var startPos
    _sections.each(function(d, i){
      if (!i) startPos = this.getBoundingClientRect().top
      sectionPos.push(this.getBoundingClientRect().top -  startPos + 0) })

    containerStart = container.node().getBoundingClientRect().top + pageYOffset
  }


  function keydown(forceDown) {

    var delta;
    if (d3.event && !forceDown){
      switch (d3.event.keyCode) {
        case 39: // right arrow
        if (d3.event.metaKey) return;
        case 40: // down arrow
        case 34: // page down
        delta = d3.event.metaKey ? Infinity : 1; break;
        case 37: // left arrow
        if (d3.event.metaKey) return;
        case 38: // up arrow
        case 33: // page up
        delta = d3.event.metaKey ? -Infinity : -1; break;
        case 32: // space
        delta = d3.event.shiftKey ? -1 : 1;
        break;
        default: return;
      }      
    }
    if (forceDown) delta = 1

    scroll_by(delta);

  }
  
  function scroll_by(delta) {

    var i1 = Math.max(0, Math.min(i + delta, n - 1))

    console.log('pageYOffset: ' + pageYOffset)
    console.log('sectionPos[i1]: ' + sectionPos[i1])
    console.log('containerStart: ' + containerStart)

    d3.select(document.documentElement)
        .interrupt()
      .transition()
        .duration(700)
        .tween("scroll", function() {
          var i = d3.interpolateNumber(pageYOffset, sectionPos[i1] + containerStart);
          return function(t) { scrollTo(0, i(t)); };
        })

    d3.event.preventDefault();

  }

  rv.container = function(_x){
    if (!_x) return container

    container = _x
    return rv
  }

  d3.rebind(rv, dispatch, "on");

  return rv;
}