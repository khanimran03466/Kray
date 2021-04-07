$(document).ready(function(){
	$("header .logo figure").on("click", function(){
		$("nav").addClass("active");
		$("body").addClass("active");
	});


	$("nav .close_btn").on("click", function(){
		$("nav").removeClass("active");
		$("body").removeClass("active");
	});



$(".hamburger").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $("nav , .nav").stop(true, true).toggleClass("active");
        $(".main_nav").stop(true, true).toggleClass("active");
        $(".head_r_sec").stop(true, true).toggleClass("active");
        $("body").stop(true, true).toggleClass("active");

    });



$(".tren1").mouseover(function(){
	$(".tren1 .t1-top p").slideDown("500");
});
$(".tren1").mouseleave(function(){
	$(".tren1 .t1-top p").slideUp("500");
});



$(".deal-section .an-deals").on("click", function(){
  $(this).parent().parent().children(".deals-details-wraper").slideToggle();
});







	// slider js goes here.....

var swiper = new Swiper('.slider1_sec .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop:true,
      coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider1_sec .swiper-button-next',
        prevEl: '.slider1_sec .swiper-button-prev',
      },
      
    });


var swiper = new Swiper('.slider2_sec .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 0,
        modifier: 0,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider2_sec .swiper-button-next',
        prevEl: '.slider2_sec .swiper-button-prev',
      },
    });




});