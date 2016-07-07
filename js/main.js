// 2 jugadores. Cada caja tiene 2 valores X y O

$(document).ready(function() {
	var jugadorX = "X";
	var jugadorO = "O"; 
	var jugando = jugadorX;
	//var turno; var alertas = $(".alertas");

	$(".box").click(function() {
		this.innerHTML = "X";
		$(".box")
	});

	var turno = function() {
	    if (jugando === jugadorX) {
	      jugando = jugadorO;
	    } else {
	      jugando = jugadorX;
	    }
	  };

	

	/*;box.addEventListener("click",
	function () {
	    box.innerHTML = "X";
	});
$(".btn").click(function() {
		box.innerHTML = "";
	} 

*/
	
	
	
});