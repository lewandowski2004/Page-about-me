$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		var conteiner = $('#O-mnie').position();
		var conteiner_height = $('#O-mnie').height();
		if(y >= (conteiner.top - conteiner_height - 250)){
			$('#O-mnie p').addClass('fadeInUp animated');

		}
		
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		var conteiner = $('#git').position();
		var conteiner_height = $('#git').height();
		if(y >= (conteiner.top - conteiner_height - 250)){
			$('#git p').addClass('fadeInUp animated');

		}
		
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		var conteiner = $('#projekty-cechy').position();
		var conteiner_height = $('#projekty-cechy').height();
		if(y >= (conteiner.top - conteiner_height - 200)){
			$('.projekty, .projekty-2').addClass('fadeInUp animated');

		}else{
			$('.projekty, .projekty-2').removeClass('fadeInUp animated');
		}
		
	});
});
$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		var conteiner = $('#cv').position();
		var conteiner_height = $('#cv').height();
		if(y >= (conteiner.top - conteiner_height - 100)){
			$('.cv-wyksztalcenie,.cv-umiejetnosci,.cv-jezyk').addClass('fadeInLeft animated');

		}else{
			$('.cv-wyksztalcenie,.cv-umiejetnosci,.cv-jezyk').removeClass('fadeInLeft animated');
		}
		
	});
});