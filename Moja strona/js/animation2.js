$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		var conteiner = $('h2').position();
		var conteiner_height = $('h2').height();
		if(y >= (conteiner.top - conteiner_height - 30)){
			$('h2').addClass('zoomIn animated');

		}else{
			$('h2').removeClass('zoomIn animated');
		}
		
	});
});
