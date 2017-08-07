jQuery(function($)
			{
				//zresetuj scrola
				$.scrollTo(0);
				
				$('#link-cv').click(function() { $.scrollTo($('#cv'),1000);});
                $('#link-kontakt').click(function() { $.scrollTo($('#portale-contact'),1000);});
				$('.scrollup').click(function() { $.scrollTo($('body'),1000);});
			}
			);
			$(window).scroll(function()
			{
				if($(this).scrollTop()>300) $('.scrollup').fadeIn();
				else $('.scrollup').fadeOut();
			}
			);