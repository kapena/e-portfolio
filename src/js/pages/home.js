// Drawing surface
var hGraph = Snap('#skills-graphic');
// text
var graphicT = Snap.select('.graph');
var webT = Snap.select('.web-d');
var digitalT = Snap.select('.digital-d');

var graphictext = Snap.select(".graphic-text");

var graphic = Snap.select('.graphic');
var web = Snap.select('.webD');
var digital = Snap.select('.motionD');

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
// about graphics
var servicesGraphic = Snap.select('.service');
var three = Snap.select('.three');
var two = Snap.select('.two');
var one = Snap.select('.one');


hGraph.mousemove(function(e){
	graphicT.addClass('moveUp').removeClass('under');
    webT.addClass('moveUp').removeClass('under');
    digitalT.addClass('moveUp').removeClass('under');
    // circle and triangle graphic
    gC.addClass('playGc').removeClass('gC');
    gT.addClass('playGt').removeClass('gT');
    // nav and footer web graphic
    nav.addClass('playwN').removeClass('wN');
    footer.addClass('playwF').removeClass('wF');
    // content web graphic
    p1.addClass('playP1').removeClass('p1');
    img.addClass('playImg').removeClass('img');
    p2.addClass('playP2').removeClass('p2');
    webD.addClass('move-L').removeClass('webD');
    // digital graphic
    playbtn.addClass('movePlay').removeClass('play');
    frame.addClass('skewFrame').removeClass('frame');
});

hGraph.mouseout(function(){
  graphicT.addClass('under').removeClass('moveUp');
  webT.addClass('under').removeClass('moveUp');
  digitalT.addClass('under').removeClass('moveUp');
  gC.addClass('gC').removeClass('playGc');
  gT.addClass('gT').removeClass('playGt');
  nav.addClass('wN').removeClass('playwN');
  footer.addClass('wF').removeClass('playwF');
  p1.addClass('p1').removeClass('playP1');
  img.addClass('img').removeClass('playImg');
  p2.addClass('p2').removeClass('playP2');
  webD.addClass('webD').removeClass('move-L');
  playbtn.addClass('play').removeClass('movePlay');
  frame.addClass('frame').removeClass('skewFrame');
});

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    // timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
