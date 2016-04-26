$(window).load(function(){
    // Containers
    var imgContainers = $('.image-container');
    var imgs = $('.img1,.img2,.img3,.img4');

    // Content
    var img1_discript = $('<div class="box_1"><p class="discript1">BOX1 dolor sit amet.</p></div>');

    var img2_discript = $('<div class="box_2"><p class="discript2">BOX2 dolor sit amet.</p></div>');

    var img3_discript = $('<div class="box_3"><p class="discript3">BOX3 dolor sit amet.</p></div>');

    var img4_discript = $('<div class="box_4"><p class="discript4">BOX4 dolor sit amet.</p></div>');

    function removeBoxDiv (){
        var mobile = Modernizr.mq('(max-width:972px)');

        if (imgContainers.hasClass(imgs)); {
            $('.img1').append(img1_discript);
            $('.img2').append(img2_discript);
            $('.img3').append(img3_discript);
            $('.img4').append(img4_discript);
            // $('.img1').find('div:last').remove();
        } if (mobile) {
            $('.img1').find('div:last').remove();
            $('.img2').find('div:last').remove();
        }
    }

    $(window).resize($.throttle(350,removeBoxDiv));

    // captionDisplay changes the css properties of the selected caption classes on device mq
    function captionDisplay (){
         // selecting caption classes
         var captions = $('.caption1,.caption2,.caption3,.caption4');
         // modernizr media q
         var device = Modernizr.mq('(max-width:972px)');

            //  screen is smaller than959px
            if (device){
            // make caption1 visible and add margin-bottom of 15px
                captions.css({"visibility":"visible","margin-bottom": "25px"});
            }
            // screen is larger than959px
            else {
                captions.css({"visibility":"hidden", "margin-bottom": "-110px"});
            }
        }
    // throttle resize event on captionDisplay function
    $(window).resize($.throttle(350,captionDisplay)).resize();

    // changes the visibility property of img discriptions when page is959px
    function visibility_onResize () {
        // mq
        var images = $('.image1-container,.image2-container,.image3-container');
        var mobile_device = Modernizr.mq('(max-width:972px)');
        // if smaller
            if (mobile_device) {
                // visibility hidden
                $(img1_discript).add(img2_discript).add(img3_discript).add(img4_discript).css('visibility','hidden');
                images.css('height','515px');
            }
            // if bigger
            else{
                // visibility visible
                $(img1_discript).add(img2_discript).add(img3_discript).add(img4_discript).css('visibility','visible');

                images.css('height','375px');
            }
        }
    // throttle back resize event
    $(window).resize($.throttle(250,visibility_onResize)).resize();

    // function reposition_img3_onResize (){
    //     var sm_box3_img3_discript = Modernizr.mq('only screen and (max-width:972px)');
    //
    //     // if browser window is larger than959px
    //     if (sm_box3_img3_discript){
    //         $(img3_discript).css('top','609px');
    //     } else {
    //         $(img3_discript).css('top','609px');
    //     }
    // }
    // // throttle back reposition_img3_onResize 350 milliseconds
    // $(window).resize($.throttle(350,reposition_img3_onResize)).resize();

    // function reposition_img4_onResize (){
    //     var sm_box_img4_discript = Modernizr.mq(('only screen and (max-width:959px)'));
    //
    //     if(sm_box_img4_discript){
    //         img4_discript.css('bottom','763px');
    //     } else {
    //         img4_discript.css('bottom','23px');
    //     }
    // }
    // $(window).resize($.throttle(350,reposition_img4_onResize)).resize();
});
