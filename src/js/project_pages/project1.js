// Sick carousel
$(document).ready(function(){
    // initalize slick
    $('.img-slider').slick({
        centerMode:true,
        arrows:true,
        dots:true,
        accessibility:true,
        slidesToShow:1,
        slideToScroll:1
    });
    // Containers
    var image1 = $('.image1');
    var image2 = $('.image2');
    var image3 = $('.image3');
    var image4 = $('.image4');
    // Content
    var img1_discript = $('<div class="box_1"><p class="discript1">Lorem ipsum dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img2_discript = $('<div class="box_2"></div>' +'<p class="discript2"></p>');

    // when image1 class is hovered on
    $(image1).hover(function(){
        // append img1_discript to .image1 container
        $(image1).append(img1_discript);
        // set opacity property to 0 on box_1 div
        $(img1_discript).css('opacity','0');
        // get the opacity style property from the box_1 div
        $(img1_discript).css('opacity');
        // set opacity property to 1 on box_1 div
        $(img1_discript).css('opacity','1','transition:opacity 0.5s');
    },
        function() {
            // remove the box_1 div that was appened to the DOM
            $(image1).find('div:last').remove();
            $(image1).find('p:last').remove();
        }
    );

// ADJUST LATER

    // $(image2).hover(function(){
    //     // append a div with the class of on to `.image1` container
    //     $(image2).append('<div class="on_2"></div>');
    //     },
    //     function() {
    //         // remove the div that was appened to the DOM
    //         $(image2).find('div:last').remove();
    //     }
    // );
    //
    //
    // $(image3).hover(function(){
    //     // append a div with the class of on to `.image1` container
    //     $(image3).append('<div class="on_3"></div>');
    //     },
    //     function() {
    //         // remove the div that was appened to the DOM
    //         $(image3).find('div:last').remove();
    //     }
    // );
    //
    //
    // $(image4).hover(function(){
    //     // append a div with the class of on to `.image1` container
    //     $(image4).append('<div class="on_4"></div>');
    //     },
    //     function() {
    //         // remove the div that was appened to the DOM
    //         $(image4).find('div:last').remove();
    //     }
    // );
});
