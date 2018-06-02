// $(window).scroll(function(){
// using throttle debounce to throttle bck scroll events
$(function(){
    // select slide nav
    function scrollDown(e){
    var slideNavtrigger = $('.slide-nav-trigger');
    // if user scrolls past 500px show nav
    if($(window).scrollTop() > 500){
        // see scroll events in console
        // console.log($(window).scrollTop(),e.timeStamp);
        slideNavtrigger.css('visibility','visible');
        $('.slide-nav-trigger').addClass('show');
    }else if($(window).scrollTop() < 600){
      // remove show class
        slideNavtrigger.removeClass('show');
        // add hide - fade out nav when scrolling back to top
        slideNavtrigger.addClass('hide');
        slideNavtrigger.css('visibility','hidden');
    }
  }
  // $(window).scroll(scrollDown);
  $(window).scroll($.throttle(450,scrollDown));
});
