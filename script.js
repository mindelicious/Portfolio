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
$('.contact-form').submit(function(e) {
    var name = $('#name');
    var email = $('#email');
    var message = $('#msg');
    if(!name.value || !email.value || !message.value) {
        alertify.error('Sooo... U wanna contact Me or not?')
    } else {
        $.ajax({
            url: "https://formspree.io/mateuszdanieluk@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success('Message sent');
    }
})