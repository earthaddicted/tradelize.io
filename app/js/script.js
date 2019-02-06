$('.carousel-video').owlCarousel({
    items: 2,
    merge: false,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    nav: true,
    navText: [
		'<i class="fa fa-arrow-left" aria-hidden="true"></i>',
		'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
	],

    responsive: {
        320: {
            items: 1
        },

        968: {
            items: 2
        }
    }
})

// $(window).on('resize',function(){
if ($(window).width() < 1024) {
	$('footer .menu-container').on('click', function(e){
		$(this).find('.menu-block').toggleClass('open');
		console.log('clicked');
	})
} else {
	$('.menu-container').click(function(){
		return false;
	});
}
// });

// slider features
	function postsCarousel() {
		var checkWidth = $(window).width();
		var owlPost = $(".slider-feature");
		if (checkWidth > 1024) {
			if(typeof owlPost.data('owl.carousel') != 'undefined'){
				owlPost.data('owl.carousel').destroy();
			}
			owlPost.removeClass('owl-carousel');
		} else if (checkWidth < 1024) {
			owlPost.addClass('owl-carousel');
			owlPost.owlCarousel({
				items : 1,
				slideSpeed : 200,
				// animateOut: 'fadeOut',
				dots: false,
				nav: true,
				loop: true,
				navText: [
					'<i class="fa fa-arrow-left" aria-hidden="true"></i>',
					'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
				]
			});
		}
	}

  postsCarousel();
  $(window).resize(postsCarousel);

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


/* ===== registration popup ====== */

$('.btn-email').on('shown.bs.modal', function () {
    var width = $(window).width();
    if(width > 1023){
        $(this).hide();
    }
});

(function() {
    function toggleSlick() {
        if ($(window).width() > 1023) {
        	$('#registration').removeAttr('id');
        }

        else if ($(window).width() < 1024) {
        	$('#registration #mail').attr('id', 'registration');
        }
    }

    toggleSlick();

    $(window).on('load', function() {
        toggleSlick();
    });

    $(window).on('resize', function() {
        toggleSlick();
    });

})();


/* ===== registration popup END ====== */

