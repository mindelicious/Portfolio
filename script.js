//NAV
$(document).on('scroll', function() {
    if($(window).scrollTop()) {
        $('header').addClass('goDown');
    } else {
        $('header').removeClass('goDown');
    }
})

//CONTACT AND SKILL ANIMATION 
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
//SENDING MAIL
var $contactForm = $('.contact-form');
var $submitBtn = $('#submit');
var name = $('#name');
var email = $('#email');
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

/* HAMBURGER */
var wrapperMenu = document.querySelector('.wrapper-menu');
var listItem = document.querySelector('#active');

wrapperMenu.addEventListener('click', function(){
  if(wrapperMenu.classList.toggle('open')) {
      $(listItem).toggleClass('awesome');
    } else {
        $(listItem).toggleClass('awesome');
    }
})
listItem.addEventListener('click', function() {
     $(wrapperMenu).toggleClass('open');
     $(listItem).toggleClass('awesome');     
})

//SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 750)
    }
  }
});