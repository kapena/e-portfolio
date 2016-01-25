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

    var img2_discript = $('<div class="box_2"><p class="discript2">Lorem ipsum dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img3_discript = $('<div class="box_3"><p class="discript3">Lorem ipsum dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img4_discript = $('<div class="box_4"><p class="discript4">Lorem ipsum dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    // image1 hover
    $(image1).hover(function(){
            // append img1_discript to .image1 container
            $(image1).append(img1_discript);
            // set opacity property to 0 on box_1 div
            $(img1_discript).css('opacity','0');
            // get the opacity style property from the box_1 div
            $(img1_discript).css('opacity');
            // set opacity property to 1 on box_1 div
            $(img1_discript).css('opacity','1');
        },
        function() {
            // remove the box_1 div that was appened to the DOM
            $(image1).find('div:last').remove();
            $(image1).find('p:last').remove();
        }
    );

    // image2 hover
    $(image2).hover(function(){
        $(image2).append(img2_discript);
        // set opacity to 0 on box_2 div
        $(img2_discript).css('opacity','0');
        // get opacity from box_2 div
        $(img2_discript).css('opacity');
        // set opacity to 1 for box_2 div
        $(img2_discript).css('opacity','1');
        // reposition repostion box_2 when viewport is less than 1160px
        if ($(window).width() < 1160) {
            $(img2_discript).css('top','573px');
        }
        },
        function() {
            // remove the div that was appened to the DOM
            $(image2).find('div:last').remove();
            $(image2).find('p:last').remove();
        }
    );
    // image3 hover
    $(image3).hover(function(){
        $(image3).append(img3_discript);
        // set opacity to 0 on box_3 div
        $(img3_discript).css('opacity','0');
        // get opacity property from box_3 div
        $(img3_discript).css('opacity');
        // set opacity to 1 on box_3 div
        $(img3_discript).css('opacity','1');
        if ($(window).width() < 1160){
            $(img3_discript).css('bottom','368px');
        }
        },
        function() {
            // remove the div that was appened to the DOM
            $(image3).find('div:last').remove();
            $(image3).find('div:last').remove();
        }
    );
    // image4 hover
    $(image4).hover(function(){
        $(image4).append(img4_discript);
        $(img4_discript).css('opacity','0');
        $(img4_discript).css('opacity');
        $(img4_discript).css('opacity','1');
        },
        function() {
            // remove the div that was appened to the DOM
            $(image4).find('div:last').remove();
            $(image4).find('div:last').remove();
        }
    );
});
