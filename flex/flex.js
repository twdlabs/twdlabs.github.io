
// Run on page load. 
$(document).ready(function() {
	// Reset range slider input to full. 
	$('input#widthSetter').val('100');

	// 
	$('button').on('click',clickBtn);

	// Activate defaults. 
	$('button.default').addClass('active');
});


// 
function clickBtn(event) {
	// Get clicked button. 
	let btn = event.target;
	let btnBox = btn.parentElement;

	// De-activate all buttons in the same box. 
	$(btnBox).children('button').removeClass('active');

	// Activate selected button. 
	$(btn).addClass('active');
}


// Set flex container width.
function adjustWidth(value) {
	console.log('value',value);
	$('.container').css('width',value+'%');
}

// Flex Direction: Set flex direction.
function setFlexDirection(value) {
	$('.container').css('flex-direction',value);
}

// Main Axis: Set flex justification (main axis).
function setJustification(value) {
	$('.container').css('justify-content',value);
}

// Cross Axis: Set flex alignment (cross axis).
function setAlignment(value) {
	$('.container').css('align-items',value);
}

// Wrap Status: Set flex wrap status.
function setWrapStatus(value) {
	$('.container').css('flex-wrap',value);
}

// Cross Axis: Set flex overflow alignment (cross axis).
function setOverflowAlignment(value) {
	$('.container').css('align-content',value);
}

function setGrowth(value) {
	$('.container .item').css('flex-grow',value);
}

function setShrinkth(value) {
	$('.container .item').css('flex-shrink',value);
}
