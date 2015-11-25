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

var linegradient = ('l(0, 1, 1, 1)#00ffff-#ff00ff-#ffff00');
var line = circleCanvas.rect(0,355,450,1.8);
line.attr({
    id:'subtractive',
    fill:linegradient
});

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
});
