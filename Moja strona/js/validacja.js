function czyWypelnione(pole){
		if(pole.value ==""){
			document.getElementById("i"+pole.id).innerHTML="To pole jest wymagane";
			return false;
		}else{
			document.getElementById("i"+pole.id).innerHTML="";
			return true;
		}
}
window.onload = function(){
	document.getElementById("form").onsubmit =  function(){
		if(
			czyWypelnione(this.name) &&
			czyWypelnione(this.email)
		){
			return true;
		}else{
			return false;
		}
	}
}