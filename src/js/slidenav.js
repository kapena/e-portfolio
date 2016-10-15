$(window).scroll(function(){
    // select slide nav
    var slideNavtrigger = $('.slide-nav-trigger');
    // if user scrolls past 200px show slide-nav-trigger
    if($(window).scrollTop() > 500){
        slideNavtrigger.css('visibility','visible');
        $('.slide-nav-trigger').addClass('show');
    }else if($(window).scrollTop() < 600){
        slideNavtrigger.css('visibility','hidden');
    }
});

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
        slideNav.addClass('animate-opacity');
        // if navigation-is-open is toggled off
        } else {
            // animate opacity from 1 to 0
        slideNav.removeClass('animate-opacity');
        }
    });
});
