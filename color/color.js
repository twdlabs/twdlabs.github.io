

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

	// Assign composited color to palette. 
	$('div#palette').css('background-color',`rgba(${red},${green},${blue},${alpha})`);
	// $('div#palette').css( 'background-color' , 'rgba('+(red)+','+(green)+','+(blue)+','+(alpha)+')' );

	$('label#rValue').html(red);
	$('label#gValue').html(green);
	$('label#bValue').html(blue);
	$('label#aValue').html(alpha);
}

// Change value for red component. 
function deltaRed(dv) {

	// Get old value. 
	let oldValue = 1*$('input#red').val();

	// Calculate new value. 
	let newValue = oldValue + dv;
	
	// Update displayed value. 
	$('input#red').val(newValue);
	
	// Update displayed color. 
	updateColor();
}

// Change value for green component. 
function deltaGreen(dv) {

	// Get old value. 
	let oldValue = 1*$('input#green').val();

	// Calculate new value. 
	let newValue = oldValue + dv;
	
	// Update displayed value. 
	$('input#green').val(newValue);
	
	// Update displayed color. 
	updateColor();
}

// Change value for blue component. 
function deltaBlue(dv) {

	// Get old value. 
	let oldValue = 1*$('input#blue').val();

	// Calculate new value. 
	let newValue = oldValue + dv;
	
	// Update displayed value. 
	$('input#blue').val(newValue);
	
	// Update displayed color. 
	updateColor();
}

// Change value for alpha component. 
function deltaAlpha(dv) {

	// Get old value. 
	let oldValue = 1*$('input#alpha').val();

	// Calculate new value. 
	let newValue = oldValue + dv;
	
	// Update displayed value. 
	$('input#alpha').val(newValue);
	
	// Update displayed color. 
	updateColor();
}

// Create random color and display it. 
function createRandomColor() {
	// Select random number (0-255) for red value. 
	let r = Math.floor( 256*Math.random() );
	// Select random number (0-255) for green value. 
	let g = Math.floor( 256*Math.random() );
	// Select random number (0-255) for blue value. 
	let b = Math.floor( 256*Math.random() );
	// Use constant alpha value. 
	// let a = $('input#alpha').val();
	// let a = 1;
	
	// Update displayed values. 
	$('input#red').val(r);
	$('input#green').val(g);
	$('input#blue').val(b);
	// $('input#alpha').val(a*100);

	// Update displayed color. 
	updateColor();
}

