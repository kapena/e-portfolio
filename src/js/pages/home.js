// DOM ready function
$(window).load(function(){
    // change opacity of char4 when page loads.
    $('.char4').delay( 600 ).animate({
        opacity:1
    }, 6000, function(){
    });
    // var s = Snap(".multiply");
    // // select circle group and apply attribute of opacity 0
    // var circles = s.select("#cir").attr({
    //     opacity:0
    // });
    // create circle drawing surface
    var paper = Snap(500,400);
    // viewbox of svg
    paper.attr({
        viewbox:"0 -200 1 500"
    });
    // id of svg
    paper.node.id = 'mixer';
    // circles
    var circle1 = paper.circle(100,-250,70);
    circle1.attr({
        fill:"cyan"
    });
    var circle2 = paper.circle(200,-200, 70);
    circle2.attr({
        fill:"yellow"
    });

    var circle3 = paper.circle(200, -300, 70);
    circle3.attr({
        fill:"magenta"
    });
});
