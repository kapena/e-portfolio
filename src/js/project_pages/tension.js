$(window).load(function(){
    // Containers
    var imgContainers = $('.image-container');
    var imgs = $('.img1,.img2');
    // Content
    var img1_discript = $('<div class="box_1"><p class="discript1">Tension Logo</p></div>');
    var img2_discript = $('<div class="box_2"><p class="discript2">Imagery Effect</p></div>');

    var all_boxes = $(img1_discript).add(img2_discript);
    // indv img classes
    var img1 = $('.img1');
    var img2 = $('.img2');

    // checks to see if image-container has a class of `.img1` or .img2 etc
    // if classes are present then content `box_1` etc is added
    // img1 etc will always be present in side image-container class
    function appendBoxDivs (containsImgClass) {
        containsImgClass = $(imgContainers.hasClass(imgs));
        if (containsImgClass) {
            img1.append(img1_discript);
            img2.append(img2_discript);
        }
    }
    appendBoxDivs();
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
