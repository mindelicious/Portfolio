$(document).on('scroll', function() {
    if($(window).scrollTop()){
        $('header').addClass('white');
    } else {
        $('header').removeClass('white');
    }
})
function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function(){
     $('.skill-list').each(function(){
        if(!isScrolledIntoView($(this))){
            $(this).addClass('skill-animation');
        }
    });
});
$(document).on('scroll', function(){
    $('.skill-animation').each(function(){
        if(isScrolledIntoView($(this))){
            $(this).removeClass('skill-animation');
        }
    });
});

$(document).ready(function(){
    $('.contact-form').each(function(){
       if(!isScrolledIntoView($(this))){
           $(this).addClass('contact-animation');
       }
   });
});
$(document).on('scroll', function(){
   $('.contact-form').each(function(){
       if(isScrolledIntoView($(this))){
           $(this).removeClass('contact-animation');
       }
   });
});
// Sending mail
var $contactForm = $('.contact-form');
var $submitBtn = $('#submit');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/mateuszdanieluk@gmail.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: 'json',
		beforeSend: function() {
            $submitBtn.empty();
            $submitBtn.append('<div class="alert alert-loading">Sending message…</div>');
        },
        success: function(data) {
			$submitBtn.find('.alert-loading').hide();
            $submitBtn.append('<div class="alert alert-success">Message sent!</div>');
        },
        error: function(err) {
            $submitBtn.find('.alert-loading').hide();
			$submitBtn.append('<div class="alert alert-error">Ops, try again</div>');
        },
})
})