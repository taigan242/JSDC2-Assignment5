//Model

var counter = 0;
var increase = "increase";
var decrease = "decrease";
var reset = "reset";

//View

function renderCounter(number, operation) {
	//Reset value
	if (operation === "reset") {
		$(".display").text("0");
		return;
	}
	//Increase or Decrease value
	if (operation === "increase") {
		number++;
		$(".display").text(number);
	} else if (operation === "decrease") {
		number--;
		$(".display").text(number);
	}
	//Check Value for class dipslay
	if (counter > 100) {
		$(".display").addClass("positive");
	} else if (number < 0) {
		$(".display").addClass("negative");
	} else if (number >= 0 && counter <= 100) {
		$(".display").removeClass("positive");
		$(".display").removeClass("negative");
	}
}





//Controller

function setup() {
	$('#increase').on('click', increaseCounter);
	$('#decrease').on('click', decreaseCounter);
	$('#reset').on('click', resetCounter);
}

function increaseCounter() {
	counter = $('.display').text();
	renderCounter(counter, increase);
}

function decreaseCounter() {
	counter = $('.display').text();
	renderCounter(counter, decrease);
}

function resetCounter() {
	renderCounter(counter, reset);
}

$(document).ready(setup);