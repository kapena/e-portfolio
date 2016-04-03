$(document).ready(function(){
    // Containers
    var image1 = $('.image1');
    var image2 = $('.image2');

    // Content
    var img1_discript = $('<div class="box_1"><p class="discript1">BOX1 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');

    var img2_discript = $('<div class="box_2"><p class="discript2">BOX2 dolor sit amet,</br>consectetur adipisicing elit, sed do eiusmod tempor.</p></div>');


    // captionDisplay changes the css properties of the selected caption classes on device mq
    function captionDisplay (){
         // selecting caption classes
         var captions = '.caption1,.caption2';
         // modernizr media q
         var device = Modernizr.mq('only screen and (max-width:960px)');
            //  screen is smaller than 960px
            if (device){
            // make caption1 visible and add margin-bottom of 15px
                $(captions).css({"visibility":"visible","margin-bottom": "25px"});
            }
            // screen is larger than 960px
            else{
                $(captions).css({"visibility":"hidden", "margin-bottom": "-110px"});
            }
        }
    // throttle resize event on captionDisplay function
    $(window).resize($.throttle(350,captionDisplay)).resize();

    // changes the visibility property of img discriptions when page is 960px
    function visibility_onResize () {
        // mq
        var mobile_device = Modernizr.mq('only screen and (max-width:960px)');
        // if smaller
            if (mobile_device) {
                // visibility hidden
                $(img1_discript).add(img2_discript).css('visibility','hidden');
            }
            // if bigger
            else{
                // visibility visible
                $(img1_discript).add(img2_discript).css('visibility','visible');
            }
        }
    // throttle back resize event
    $(window).resize($.throttle(350,visibility_onResize)).resize();

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
            $(image2).find('div:last').remove();
        }
    );
});
