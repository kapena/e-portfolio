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
