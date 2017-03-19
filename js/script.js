/* DOCUMENT READY */
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ]
    });
var shrinkHeader = 20;
  $(window).scroll(function() {
  	console.log('scroll')
  	console.log('scroll');
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');
        }
        else {
            $('header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});
