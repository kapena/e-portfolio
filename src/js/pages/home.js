
// Drawing surface
var hGraph = Snap('#skills-graphic');
// text
// var graphicT = Snap.select('.graph');
// var webT = Snap.select('.web-d');
// var digitalT = Snap.select('.digital-d');


// graphic circle
var gC = Snap.select('.gC');
// graphic triangle
var gT = Snap.select('.gT');
// header footer
var nav = Snap.select('.wN');
var footer = Snap.select('.wF');
// content
var p1 = Snap.select('.p1');
var img = Snap.select('.img');
var p2 = Snap.select('.p2');
var webD = Snap.select('.elements');
//digital
var playbtn = Snap.select('.play');
var frame = Snap.select('.frame');
// visual
var btn = Snap.select('.btn');
var area = Snap.select('.area');
// front end
var inspect = Snap.select(".inspect");
var frame = Snap.select(".frame");
var target_top = Snap.select(".target-top");
// about graphics
var servicesGraphic = Snap.select('.service');
var three = Snap.select('.three');
var two = Snap.select('.two');
var one = Snap.select('.one');


hGraph.mousemove(function(e){
    // graphicT.addClass('moveUp').removeClass('under');
    // webT.addClass('moveUp').removeClass('under');
    // digitalT.addClass('moveUp').removeClass('under');
    // circle and triangle graphic
    gC.addClass('playGc').removeClass('gC');
    gT.addClass('playGt').removeClass('gT');
    // visual graphic
    btn.addClass('btn-slide-right').removeClass('btn-off');
    area.addClass('area-fill').removeClass('area-empty');
    // nav and footer web graphic
    // nav.addClass('playwN').removeClass('wN');
    // footer.addClass('playwF').removeClass('wF');
    // content web graphic
    // p1.addClass('playP1').removeClass('p1');
    // img.addClass('playImg').removeClass('img');
    // p2.addClass('playP2').removeClass('p2');
    // webD.addClass('move-L').removeClass('webD');
    // frontend graphic
    inspect.addClass('target').removeClass('invis');
    frame.addClass("frame-off").removeClass('on');
    // frame.addClass('skewFrame').removeClass('frame');
});

hGraph.mouseout(function(){
  // graphicT.addClass('under').removeClass('moveUp');
  // webT.addClass('under').removeClass('moveUp');
  // digitalT.addClass('under').removeClass('moveUp');
  gC.addClass('gC').removeClass('playGc');
  gT.addClass('gT').removeClass('playGt');
  // nav.addClass('wN').removeClass('playwN');
  // footer.addClass('wF').removeClass('playwF');
  // p1.addClass('p1').removeClass('playP1');
  // img.addClass('img').removeClass('playImg');
  // p2.addClass('p2').removeClass('playP2');
  // webD.addClass('webD').removeClass('move-L');
  // playbtn.addClass('play').removeClass('movePlay');
  // frame.addClass('frame').removeClass('skewFrame');
  btn.addClass('btn-off').removeClass('btn-slide-right');
  area.addClass('area-empty').removeClass('area-fill');
  inspect.addClass('invis').removeClass('target');
  frame.addClass("frame").removeClass('frame-off');
});
