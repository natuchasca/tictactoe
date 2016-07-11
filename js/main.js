// 2 jugadores. Cada caja tiene 2 valores X y O

var jugadores = ["X", "O"];
var jugadorActual = 0;
var contador = 0;
var box0, box1, box2, box3, box4, box5, box6, box7, box8;
box0 = $("#box0"); box1 = $("#box1"); box2 = $("#box2");
box3 = $("#box3"); box4 = $("#box4"); box5 = $("#box5");
box6 = $("#box6"); box7 = $("#box7"); box8 = $("#box8");


$(document).ready(function() {
	playGame();
});

function playGame () {
	$(".box").click(function() {
		$(this).val(jugadores[jugadorActual]);
		$(this).off("click");
		contador++;
		if (contador >= 5) {
			ganador();
		}
		if (jugadorActual == 1) {
			jugadorActual = 0;
		}
		else {
			jugadorActual = 1;
		}
	});
}

function ganador () {
	if ((box0.val() == "X" && box1.val() == "X" && box2.val() == "X") ||
	    (box3.val() == "X" && box4.val() == "X" && box5.val() == "X") ||
	    (box6.val() == "X" && box7.val() == "X" && box8.val() == "X") ||
	    (box0.val() == "X" && box4.val() == "X" && box8.val() == "X") ||
	    (box0.val() == "X" && box3.val() == "X" && box6.val() == "X") ||
	    (box1.val() == "X" && box4.val() == "X" && box7.val() == "X") ||
	    (box2.val() == "X" && box5.val() == "X" && box8.val() == "X") || 
  	    (box0.val() == "O" && box1.val() == "O" && box2.val() == "O") ||
	    (box3.val() == "O" && box4.val() == "O" && box5.val() == "O") ||
	    (box6.val() == "O" && box7.val() == "O" && box8.val() == "O") ||
	    (box0.val() == "O" && box4.val() == "O" && box8.val() == "O") ||
	    (box0.val() == "O" && box3.val() == "O" && box6.val() == "O") ||
	    (box1.val() == "O" && box4.val() == "O" && box7.val() == "O") ||
	    (box2.val() == "O" && box5.val() == "O" && box8.val() == "O") 
	    ) {
	alert("Gano " + jugadores[jugadorActual]);
	}
}

function reiniciarJuego() {
	var box = $(".box");
	for (var i = 0; i <= box.length; i++) {
		$(box[i]).val("+");
	};
	contador = 0;
	jugadorActual = 0;
	playGame();
}
