$(function(){
// assign click event to slide-nav-trigger
var slideNav = $('.slide-nav');
$('.slide-nav-trigger').click(function(e){
    e.preventDefault(); // cancel the default action

    // when user clicks slide-nav-trigger toggleClass navigation-is-open to body
    $('body').toggleClass('navigation-is-open');
    // if body hasClass of navigation-is-open toggled on
    if ($('body').hasClass('navigation-is-open')){
        // animate opacity on slide-nav from 0 to 1
        slideNav.animate({
            opacity:1 }, 2000, function(){});
        // if navigation-is-open is toggled off
        } else {
            // animate opacity from 1 to 0
            slideNav.animate({
                opacity:0 },1000, function(){});
        }
    });
});
