$(function(){
    var submitbtn = $('#submit-form');
    var contactForm = $('.contact-form');
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
