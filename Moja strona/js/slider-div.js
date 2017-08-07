    var numer = Math.floor( Math.random()* 4 ) +1;
    var timer1 = 0;
    var timer2 = 0;
			
    function ustawslajd(nrslajdu)
        {
            clearTimeout(timer1);
            clearTimeout(timer2);
            numer = nrslajdu - 1;
				
            schowaj();
            setTimeout("zmienslajd()", 500);
        }
			
    function schowaj()
        {
            $("#slider").fadeOut(500);
        }
		
    function zmienslajd()
        {
            numer++; if (numer>4) numer=1;
				
            var plik = "<img src=\"img/slider" + numer + ".jpg\" />";
				
            document.getElementById("slider").innerHTML = plik;
            $("#slider").fadeIn(500);
				
            timer1 = setTimeout("zmienslajd()", 4000);
            timer2 = setTimeout("schowaj()", 3500);
        }
window.onload = zmienslajd;
