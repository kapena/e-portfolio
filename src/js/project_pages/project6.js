$(window).load(function(){
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

    // captionDisplay changes the css properties of the selected caption classes on device mq
    function captionDisplay (){
         // selecting caption classes
         var captions = $('.caption1,.caption2,.caption3,.caption4');
         // modernizr media q
         var device = Modernizr.mq('only screen and (max-width:959px)');
            //  screen is smaller than959px
            if (device){
            // make caption1 visible and add margin-bottom of 15px
                captions.css({"visibility":"visible","margin-bottom": "25px"});
            }
            // screen is larger than959px
            else{
                captions.css({"visibility":"hidden", "margin-bottom": "-110px"});
            }
        }
    // throttle resize event on captionDisplay function
    $(window).resize($.throttle(350,captionDisplay)).resize();

    // changes the visibility property of img discriptions when page is959px
    function visibility_onResize () {
        // mq
        var mobile_device = Modernizr.mq('only screen and (max-width:959px)');
        // if smaller
            if (mobile_device) {
                // visibility hidden
                $(img1_discript).add(img2_discript).add(img3_discript).add(img4_discript).add(img5_discript).add(img6_discript).css('visibility','hidden');
            }            // if bigger
            else{
                // visibility visible
                $(img1_discript).add(img2_discript).add(img3_discript).add(img4_discript).css('visibility','visible');
            }
        }
    // throttle back resize event
    $(window).resize($.throttle(350,visibility_onResize)).resize();

    // image1 hover desktop
    $(image1).hover(function(){
            // append img1_discript to .image1 container
            image1.append(img1_discript);
            // set opacity property to 0 on box_1 div
            img1_discript.css('opacity','0');
            // get the opacity style property from the box_1 div
            img1_discript.css('opacity');
            // set opacity property to 1 on box_1 div
            img1_discript.css('opacity','0.8');
        },
        function() {
            // remove the box_1 div that was appened to the DOM
            image1.find('div:last').remove();
        }
    );

    // image2 hover desktop
    $(image2).hover(function(){
        image2.append(img2_discript);
        // set opacity to 0 on box_2 div
        img2_discript.css('opacity','0');
        // get opacity from box_2 div
        img2_discript.css('opacity');
        // set opacity to 1 for box_2 div
        img2_discript.css('opacity','0.8');
        },
        function() {
            // remove the div that was appened to the DOM
            image2.find('div:last').remove();
        }
    );
    // image3 hover
    $(image3).hover(function(){
        image3.append(img3_discript);
        // set opacity to 0 on box_3 div
        img3_discript.css('opacity','0');
        // get opacity property from box_3 div
        img3_discript.css('opacity');
        // set opacity to 1 on box_3 div
        img3_discript.css('opacity','0.8');
        },
        function() {
            // remove the div that was appened to the DOM
            image3.find('div:last').remove();
        }
    );

    function reposition_img3_onResize (){
        var sm_box3_img3_discript = Modernizr.mq('only screen and (max-width:959px)');

        // if browser window is larger than959px
        if (sm_box3_img3_discript){
            img3_discript.css('bottom','1136px');
        } else {
            img3_discript.css('bottom','23px');
        }
    }

    // throttle back reposition_img3_onResize 350 milliseconds
    $(window).resize($.throttle(350,reposition_img3_onResize)).resize();

    // image4 hover
    $(image4).hover(function(){
        image4.append(img4_discript);
        img4_discript.css('opacity','0');
        img4_discript.css('opacity');
        img4_discript.css('opacity','0.8');
        },
        function() {
            // remove the div that was appened to the DOM
            image4.find('div:last').remove();
        }
    );

    function reposition_img4_onResize (){
        var sm_box_img4_discript = Modernizr.mq(('only screen and (max-width:959px)'));

        if(sm_box_img4_discript){
            $(img4_discript).css('bottom','763px');
        } else {
            $(img4_discript).css('bottom','23px');
        }
    }

    $(window).resize($.throttle(350,reposition_img4_onResize)).resize();
});
