

var multiple;

function onClear(){
	$('#r').val("");
	$('.output-row').slideUp(function(){
		setTimeout(function(){
			$('#outputBox').html("&nbsp;");
		},100);
	});
}

function setDefault(){
	$('#r').val(".3");
}

function onSubmit(){
	var r = $('#r').val();
	var pS = .50 + r/2;
	var pF = .50 - r/2;

	multiple = 1;
	var gcf = euclidGCF(pS,pF);
	// stickyToast(
	// 	'pS = '+pS + '<br>'+
	// 	'pF = '+pF + '<br>'+
	// 	'gcf = '+gcf
	// 	);

	var result = '';
	result += '<div><div class="result success">' + percent(pS) + '</div>Success<br>Odds</div>';
	result += '<div><div class="result failure">' + percent(pF) + '</div>Failure<br>Odds</div>';
	result += '<div><!--div class="result">' + (pS/pF).toFixed(2) + '</div--><div class="result">' + (multiple*pS/gcf)+' : '+(multiple*pF/gcf) + '</div>Odds Ratio</div>';

	if(true){
		$('div#outputBox').html(result);
		$('div.output-row').slideDown();
		// toast(result);
	}
	
	/*****/

	function percent(d) {
		return (d*100).toFixed(0) + '%';
	}
}

// Find greatest common factor (gcf) between two integers or decimals.
function euclidGCF(a,b){
	if( !Number.isInteger(a) || !Number.isInteger(b) ) {
		multiple *= 10;
		return euclidGCF(10*a,10*b);
	}
	var gcf;
	var c = Math.max(a,b);	// larger number
	var d = Math.min(a,b);	// smaller number

	var index = 0;
	while(true){
		index++;

		c = c % d;
		if(c==0) {
			gcf = d;
			break;
		}
		d = d % c;
		if(d==0) {
			gcf = c;
			break;
		}
	}

	toast('a = '+c + '&nbsp;&nbsp;&nbsp;' + 'b = '+d + '\n<br>')

	return gcf;
}