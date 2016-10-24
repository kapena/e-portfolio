// DOM ready function
$(window).load(function(){
// Drawing surface
var circleCanvas = Snap('.circle-canvas');
    // viewbox of svg
    circleCanvas.attr({
        id:"mixer",
        viewBox:"0 0 460 400",
        width: '450px',
        height:'400px'
    });

// circles
var circle1 = circleCanvas.circle(210,120,70);
    circle1.attr({
        id:"cir1",
        fill:"cyan"
    });
var circle2 = circleCanvas.circle(260,200,70);
    circle2.attr({
        id:"cir2",
        fill:"yellow"
    });

var circle3 = circleCanvas.circle(160,200,70);
    circle3.attr({
        id:"cir3",
        fill:"magenta"
    });

    // grouped circles
var circleGroup = circleCanvas.g(circle1,circle2,circle3).attr({
    opacity:0,
    id:"cir"
});

// select cir id
var circles = circleCanvas.select('#cir');

// animate opacity of circles to 0.5 at 3000 milloseconds
setTimeout (function(){
        circles.animate({
            opacity:0.5
        },1000);
    }, 10000);

// setTimeout to rotate circles 360 deg
setTimeout (function (){
    // animation function
    animation();
    function animation () {
        circles.stop().animate({
        // rotate circles 360 deg
        transform:'r360, t20, t20' }, 10000);
        }
    }, 9000);

// initalize snap on skill-spect svg
var skillSpect = Snap('.skill-spect');
var skilz3 = Snap(".skilz-3"); // init svg2
var circleSet = Snap.selectAll("#roygbiv-circles");
var roygbiv = Snap.selectAll('#roygbiv');
// select icons
var icons = Snap.select('#icons');
// select text
var text = Snap.select('#web-print-film');
// newton wheel just colors
var newton = Snap.select('#newton');
// newton wheel black lines
var newtonWheel = Snap.select('#newtonwheel');
// circles
var cyan = Snap.select('#cyan');
var yellow  = Snap.select('#yellow');
var magenta = Snap.select("#magenta");
// reveal newton illustration
newton.mouseover(function(){
    newtonWheel.animate({
        opacity:1
    },800);
});
// trigger click event on newton
newton.click(function(){
        // animate opacity of icons to 0
    icons.animate({
        opacity:0
    },200);

    // animate opacity of text to 1]
    text.animate({
        opacity:1
    },300);
    // set stroke attr to circles
    // set stroke attr of circles
    cyan.attr({
        stroke:'red',
        "stroke-opacity":0
    });
    yellow.attr({
        "stroke-opacity":0,
        stroke:'lime'
    });
    magenta.attr({
        "stroke-opacity":0,
        stroke:'blue'
    });
    // animate stroke-opacity
    // animate fill-opacity
    // animate dashoffset of circles to get stroke animation
    cyan.animate({
        "stroke-opacity":1,
        "fill-opacity":"0.5"
    },800);
    yellow.animate({
        "stroke-opacity":1,
        "fill-opacity":"0.5"
    },800);
    magenta.animate({
        "stroke-opacity":1,
        "fill-opacity":"0.5"
    },800);

// animate each hex's opacity
circleSet.animate([{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500]);

roygbiv.animate([{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500],[{opacity:1},500]);
    });
});
