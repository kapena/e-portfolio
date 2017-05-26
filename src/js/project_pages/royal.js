$(window).load(function(){
    // Containers
    var imgContainers = $('.image-container');
    var imgs = $('.img1,.img2');
    // Content
    var img1_discript = $('<div class="box_1"><p class="discript1">White Background</p></div>');
    var img2_discript = $('<div class="box_2"><p class="discript2">Black Background</p></div>');
    // var img3_discript = $('<div class="box_3"><p class="discript1">Logo Design </p></div>');
    // var img4_discript = $('<div class="box_4"><p class="discript2">Stationary Items</p></div>');
    var all_boxes = $(img1_discript).add(img2_discript);
    // indv img classes
    var img1 = $('.img1');
    var img2 = $('.img2');
    // var img3 = $('.img3');
    // var img4 = $('.img4');

    function removeBoxDiv (containsImgClass) {
        containsImgClass = $(imgContainers.hasClass(imgs));
        if (containsImgClass) {
            img1.append(img1_discript);
            img2.append(img2_discript);
            // img3.append(img3_discript);
            // img4.append(img4_discript);
        }
    }
    removeBoxDiv();
    // captionDisplay changes the css properties of the selected caption classes on device mq
    function captionDisplay (){
         // selecting caption classes
         var captions = $('.caption1,.caption2');
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
        var mobile_device = Modernizr.mq('(max-width:972px)');
        // if smaller
            if (mobile_device) {
                // visibility hidden
                all_boxes.css('visibility','hidden');
            }
            // if bigger
            else{
                // visibility visible
                all_boxes.css('visibility','visible');
            }
        }
    // throttle back resize event
    $(window).resize($.throttle(250,visibility_onResize)).resize();
});
