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
    var img1_discript = $('<div class="box_1"><p class="discript1">BOX1 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img2_discript = $('<div class="box_2"><p class="discript2">BOX2 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img3_discript = $('<div class="box_3"><p class="discript3">BOX3 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img4_discript = $('<div class="box_4"><p class="discript4">BOX4 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    // image1 hover
    $(image1).hover(function(){
            // append img1_discript to .image1 container
            $(image1).append(img1_discript);
            // set opacity property to 0 on box_1 div
            $(img1_discript).css('opacity','0');
            // get the opacity style property from the box_1 div
            $(img1_discript).css('opacity');
            // set opacity property to 1 on box_1 div
            $(img1_discript).css('opacity','0.8');
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
        $(img2_discript).css('opacity','0.8');
        },
        function() {
            // remove the div that was appened to the DOM
            $(image2).find('div:last').remove();
            $(image2).find('p:last').remove();
        }
    );
    // img2_discript media query
    $(window).resize(function(){
        // Modernizr.mq allows me to programmatically check if the current browser window state matches a media query.
        var top_img2_discript = Modernizr.mq('only screen and (max-width:960px)');
        // if top_img2_discript is true
        if (top_img2_discript) {
            // smaller screen
            $(img2_discript).css('top','597px');
        // if top_img2_discript is false
        } else{
            // larger screen
            $(img2_discript).css('top','224px');
    }
    }).resize();

    // image3 hover
    $(image3).hover(function(){
        $(image3).append(img3_discript);
        // set opacity to 0 on box_3 div
        $(img3_discript).css('opacity','0');
        // get opacity property from box_3 div
        $(img3_discript).css('opacity');
        // set opacity to 1 on box_3 div
        $(img3_discript).css('opacity','0.8');
        },
        function() {
            // remove the div that was appened to the DOM
             $(image3).find('div:last').remove();
             $(image3).find('div:last').remove();
        }
    );
    // img3_discript media query
    $(window).resize(function(){
        var sm_box3_img3_discript = Modernizr.mq('only screen and (max-width:960px)');

        // if browser window is larger than 960px
        if (sm_box3_img3_discript){
            $(img3_discript).css('bottom','394px');
        } else {
            $(img3_discript).css('bottom','21px');
        }

    }).resize();

    // image4 hover
    $(image4).hover(function(){
        $(image4).append(img4_discript);
        $(img4_discript).css('opacity','0');
        $(img4_discript).css('opacity');
        $(img4_discript).css('opacity','0.8');
        },
        function() {
            // remove the div that was appened to the DOM
            $(image4).find('div:last').remove();
            $(image4).find('div:last').remove();
        }
    );
});
