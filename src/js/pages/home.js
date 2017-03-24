
// Drawing surface
var hGraph = Snap('#skills-graphic');
var skill = Snap.select('.skill');
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
var webD = Snap.select('.webD');
//digital
var playbtn = Snap.select('.play');
var frame = Snap.select('.frame');
hGraph.mousemove(function(e){
    skill.addClass('move').removeClass('under');
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
  skill.addClass('under').removeClass('move');
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
