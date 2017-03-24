$(function(){
    var submitbtn = $('#submit-form');
    var contactForm = $('.contact-form');
    var textarea =  $('.your-name-area, .your-email-area, .your-msg');
    var desktop = Modernizr.mq('(min-width:1080px)');
    var device = Modernizr.mq('(max-width:780px)');
    var prefooter = $('.text-footer');
    var hiddenSuccess = $('.hidden-success-div');
    var fieldset = $('#field-set');

    // trigger click event on form elements to provide parsley-errors-list space
    textarea.click(function(){
        // add class when form elements are clicked
        textarea.addClass('area-clicked');
        // if textarea has class area-clicked and min-width of 1080px
        if (textarea.hasClass('area-clicked') & desktop){
            // adjust the height of contact-form
            contactForm.css('height','40em');
            fieldset.css('width','60em');
            submitbtn.css('top','160px');
        }
    });


submitbtn.click(function(){
    // 85 px desktop
    // 360 px device
    if (hiddenSuccess.prop('visibility','visible') & desktop) {
        prefooter.css('top','85px');
    } else {
        prefooter.css('top','21rem');
    }
});

    contactForm.submit(function (event){
        // prevent form from submiting thru browser
        event.preventDefault();
        // use $(this) to ref to form DOM El
        var form = $(this);
        // ajax to submit form via HTTP
        $.ajax({
            type:form.attr('method'),
            url:form.attr('action'),
            // dataType:'json',
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
