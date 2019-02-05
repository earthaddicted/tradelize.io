$('.carousel-video').owlCarousel({
    items: 2,
    merge: false,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    nav: true,

    responsive: {
        320: {
            items: 1
        },

        968: {
            items: 2
        }
    }
})

$(window).on('resize',function(){
if ($(window).width() < 968) {
	$('.menu-container').on('click', function(e){
			$(this).find('.menu-block').slideToggle('open');
		})
	} else {
		$('.menu-container').click(function(){
			return false;
		});
	}
});

/* ===== HEADER ====== */
$(function() {
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function() {
        navMain.collapse('hide');
    });
});

$(document).on('click', 'header .menu-wrapper ul a', function(event) {
    $("header .mobile-menu-icon").click();
});

$(document).ready(function() {
    var menuIcon = $('.menu-hamburger');
    var header = $('header');
    var headerMenu = $('.menu-wrapper');
    var burger = $('.mobile-menu-icon');
    var menuAncor = $('.header__nav a');
    var wellcomeScreen = $('.section-one-screen');
    var body = $('body');

    burger.click(function() {
        menuIcon.toggleClass('open');
        headerMenu.toggleClass('open');
        //body.toggleClass('overflow-hidden');
        header.toggleClass('priority');
        header.toggleClass('open');
    });

});
/* ===== HEADER END ====== */

/* ===== LANG ====== */
$('.lang-block').on('click', function(e){
	$(this).find('.lang').slideToggle('open');
	$('.lang-block').toggleClass('open');
})
/* ===== LANG END ====== */