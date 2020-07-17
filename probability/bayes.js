
function onClear(){
	// $('#pHE').val('');
	$('#pH').val('');
	$('#pE').val('');
	$('#alpha').val('');
	$('#outputBox').html("&nbsp;").slideUp();
	$('#snackbar').html("&nbsp;").fadeOut();
}

function setDefault(){
	// $('#pHE').val('.25');
	$('#pH').val('.001');
	$('#pE').val('.01');
	$('#alpha').val('.05');
}

function onSubmit(){
	let pH = 1*$('#pH').val();
	let pE = 1*$('#pE').val();
	let alpha = 1*$('#alpha').val();

	let pEH = 1.0 - alpha;
	let pHE = pEH * pH / pE;
	let pValue = 0;

	var output = '';
	output += 'A Posteriori Probability';
	output += '<br>P(H<sub>0</sub>|E) = ' + percent(pHE);
	if(pValue<alpha) output += '<br> Reject <i>H<sub>0</sub></i>';
	else			 output += '<br> Retain <i>H<sub>0</sub></i>';
	$('#outputBox').html(output).slideDown();
	
	/*****/

	function percent(d) {
		return (d*100).toFixed(3) + '%';
	}
}
