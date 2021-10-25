

// Open access to url parameters. 
const params = new URLSearchParams(window.location.search);

// 
var red, green, blue, alpha;


/******************************/


// 
$(document).ready(function() {
	// Get page id from url parameter 'p'. 
	let r = params.get('r');
	let g = params.get('g');
	let b = params.get('b');
	let a = params.get('a');
	console.log( 'r', r );
	console.log( 'g', g );
	console.log( 'b', b );
	console.log( 'a', a );

	// Load chosen color. 
	$('input#red').val(r);
	$('input#green').val(g);
	$('input#blue').val(b);

	// Update color from parameters. 
	updateColor();
});


/******************************/


// Update displayed color. 
function updateColor() {
	red = $('input#red').val()*1;
	green = $('input#green').val()*1;
	blue = $('input#blue').val()*1;
	alpha = $('input#alpha').val()/100;

	$('div#palette').css( 'background-color' , 'rgba('+(red)+','+(green)+','+(blue)+','+(alpha)+')' );

	$('label#rValue').html(red);
	$('label#gValue').html(green);
	$('label#bValue').html(blue);
	$('label#aValue').html(alpha);
}

// 
function deltaRed(dv) {
	var oldValue = 1*$('input#red').val();
	var newValue = oldValue + dv;
	$('input#red').val(newValue);
	updateColor();
}

// 
function deltaGreen(dv) {
	var oldValue = 1*$('input#green').val();
	var newValue = oldValue + dv;
	$('input#green').val(newValue);
	updateColor();
}

// 
function deltaBlue(dv) {
	var oldValue = 1*$('input#blue').val();
	var newValue = oldValue + dv;
	$('input#blue').val(newValue);
	updateColor();
}

// 
function deltaAlpha(dv) {
	var oldValue = 1*$('input#alpha').val();
	var newValue = oldValue + dv;
	$('input#alpha').val(newValue);
	updateColor();
}

