$(function(){
    var submitbtn = $('#submit-form');
    var contactForm = $('.contact-form');
    var textarea =  $('.your-name-area, .your-email-area, .your-msg');
    var desktop = Modernizr.mq('(min-width:1080px)');
    var device = Modernizr.mq('(max-width:780px)');

    // trigger click event on form elements to provide parsley-errors-list space
    textarea.click(function(){
        // add class when form elements are clicked
        textarea.addClass('area-clicked');
        // if textarea has class area-clicked and min-width of 1080px
        if (textarea.hasClass('area-clicked') & desktop){
            // adjust the height of contact-form
            contactForm.css('height','40em');
            submitbtn.css('top','160px');
        }
    });
    // if device
    if (device) {
        // adjustment of height on contact-form
        contactForm.css('height','48em');
    }

    // Submit event to
    contactForm.submit(function (event){
        // prevent form from submiting thru browser
        event.preventDefault();
        // use $(this) to ref to form DOM El
        var form = $(this);
        // ajax to submit form via HTTP
        $.ajax({
            type:form.attr('method'),
            url:form.attr('action'),
            dataType:'json',
            data:form.serialize()
            // assign done method to data param
        }).done(function (data){
            // to notfiy user when form is done sending
            // make class div vissible
            $('.hidden-success-div').css('visibility','visible');
            contactForm.trigger('reset');
        }).fail(function (data) {
            $('.hiddden-fail-div').css('visibility','visible');
        });
    });
    // trigger submit btn on form
    contactForm.trigger('sumbit');
});
