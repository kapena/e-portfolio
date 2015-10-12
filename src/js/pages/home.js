// DOM ready function
$(window).load(function(){
    // change opacity of char4 when page loads.
    $('.char4').delay(800).animate({
        opacity:1
    }, 5000, function(){
    });
// Drawing surface
var paper = Snap(500,400);
    // viewbox of svg
    paper.attr({
        id:"mixer",
        viewbox:"0 -150 1 500"
    });

// circles
var circle1 = paper.circle(210,120,70);
    circle1.attr({
        id:"cir1",
        fill:"cyan"
    });
var circle2 = paper.circle(260,200,70);
    circle2.attr({
        id:"cir2",
        fill:"yellow"
    });

var circle3 = paper.circle(160,200,70);
    circle3.attr({
        id:"cir3",
        fill:"magenta"
    });

    // grouped circles
var circleGroup = paper.g(circle1,circle2,circle3).attr({
    opacity:0,
    id:"cir"
});

// select cir id
var circles = paper.select('#cir');

// animate opacity of circles to 0.5 at 3000 milloseconds
setTimeout (function(){
        circles.animate({
            opacity:0.5
        },1000);
    }, 3000);

// setTimeout to rotate circles 360 deg
setTimeout (function (){
    // animation function
    animation();
    function animation () {
        circles.stop().animate({
        // rotate circles 360 deg
        transform:'r360, t20, t20' }, 10000);
        }
    }, 4000);
});
