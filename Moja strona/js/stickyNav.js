$(document).ready(function() {
	var NavY = $('.content-nav').offset().top;
			
	var stickyNav = function(){
	var Scrolly = $(window).scrollTop();
			
		if(Scrolly > NavY) {
			$('.content-nav').addClass('sticky');
			}else{$('.content-nav').removeClass('sticky');}
			};
			stickyNav();
			$(window).scroll(function() {
				stickyNav();
			});
       
	});

