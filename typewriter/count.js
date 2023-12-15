


var j = 0;
var limit;

function startCounting() {
	limit = [];
	limit.push( 1*$('#numA').val() );
	incrNumbers();
}

// Increment numbers by 1. 
function incrNumbers() {
	if (j <= limit) {
		$('#numDisplayA').html(j);
		j++;
		setTimeout(incrNumber, dt);
	}
}
