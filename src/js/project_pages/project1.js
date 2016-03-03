// Sick carousel
$(document).ready(function(){
    // Containers
    var image1 = $('.image1');
    var image2 = $('.image2');
    var image3 = $('.image3');
    var image4 = $('.image4');
    var image5 = $('.image5');
    var image6 = $('.image6');

    // Content

    //  Desktop Hover
    var img1_discript = $('<div class="box_1"><p class="discript1">BOX1 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img2_discript = $('<div class="box_2"><p class="discript2">BOX2 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img3_discript = $('<div class="box_3"><p class="discript3">BOX3 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img4_discript = $('<div class="box_4"><p class="discript4">BOX4 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img5_discript = $('<div class="box_5"><p class="discript5">BOX5 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img6_discript = $('<div class="box_6"><p class="discript6">BOX6 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    // Mobile paragraphs
    var img1_discript_device = $('<p class="mobile-discript1">dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod</p>');

    var img2_discript_device = $('<p class="mobile-discript2">dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod </p>');

    // image1 paragraph
    // append_p_device function which is throttled back
    function append_p_image1 (){
        // modernizr media q
        var append_p_device = Modernizr.mq('only screen and (max-width:960px)');
            //  screen is smaller than 960px
            if (append_p_device){
                // append paragraph
                $(image1).append(img1_discript_device);
            }
            // screen is larger than 950px
            else{
                // remove paragraph
                $(img1_discript_device).remove();
            }
        }
        // append a paragraph to image1 when screen is smaller than 960px
        // $(image1).append(img1_discript_device);
        // throttle resize event

    $(window).resize($.throttle(350,append_p_image1)).resize();

    // resize function for image1
    // changes visibility on the resize of img discriptions
    function visibility_img1_onResize () {
        // mq
        var mobile_device = Modernizr.mq('only screen and (max-width:960px)');
        // if smaller
            if (mobile_device) {
                // hidden
                $(img1_discript).css('visibility','hidden');
            }
            // if bigger
            else{
                // visible
                $(img1_discript).css('visibility','visible');
            }
        }
    $(window).resize($.throttle(350,visibility_img1_onResize)).resize();

    // image1 hover desktop
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
        }
    );

    // image2 hover desktop
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
            // $(image2).find('div:last').remove();
        }
    );

    // changes visibility on the resize of img2_discript
    function visibility_img2_onResize(){
        // Modernizr.mq allows me to programmatically check if the current browser window state matches a media query.
        var top_img2_discript = Modernizr.mq('only screen and (max-width:960px)');

        // if top_img2_discript is true
        if (top_img2_discript) {
            // smaller screen
            $(img2_discript).css('visibility','hidden');
        // if top_img2_discript is false
        }
         else{
            // larger screen
            $(img2_discript).css('visibility','visible');
        }
    }
    // calling the resize event and throttling it back 350 milliseconds
    // an inital call of the resize event for multiple resizes
    $(window).resize($.throttle(350,visibility_img2_onResize)).resize();

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
        }
    );

    function reposition_img3_onResize (){
        var sm_box3_img3_discript = Modernizr.mq('only screen and (max-width:960px)');

        // if browser window is larger than 960px
        if (sm_box3_img3_discript){
            $(img3_discript).css('bottom','1136px');
        } else {
            $(img3_discript).css('bottom','395px');
        }
    }

    // throttle back reposition_img3_onResize 350 milliseconds
    $(window).resize($.throttle(350,reposition_img3_onResize)).resize();

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
        }
    );

    function reposition_img4_onResize (){
        var sm_box_img4_discript = Modernizr.mq(('only screen and (max-width:960px)'));

        if(sm_box_img4_discript){
            $(img4_discript).css('bottom','763px');
        } else {
            $(img4_discript).css('bottom','395px');
        }
    }

    $(window).resize($.throttle(350,reposition_img4_onResize)).resize();

    $(image5).hover(function(){
        $(image5).append(img5_discript);
        $(img5_discript).css('opacity','0');
        $(img5_discript).css('opacity');
        $(img5_discript).css('opacity','0.8');
        },
        function () {
            $(image5).find('div:last').remove();
        }
    );
    function reposition_img5_onResize (){
        var sm_box_img5_discript = Modernizr.mq(('only screen and (max-width:960px)'));

        if(sm_box_img5_discript){
            $(img5_discript).css('bottom','395px');
        } else {
            $(img5_discript).css('bottom','20px');
        }
    }

    $(window).resize($.throttle(350,reposition_img5_onResize)).resize();

    $(image6).hover(function(){
        // append img6_discript
        $(image6).append(img6_discript);
        // set opacity to 0 on image6_discript
        $(img6_discript).css('opacity','0');
        // set opacity on image6_discript
        $(img6_discript).css('opacity');
        // set opacity to 0.8
        $(img6_discript).css('opacity','0.8');
    },
    function (){
        // find the last div and remove in image6 container
        $(image6).find('div:last').remove();
    });
});
