
// Executes when HTML DOM is loaded already. 
$(document).ready(function(){
	// alert('ok');
});

function onClear(){
	$('#Cw').val('');
	$('#Cs').val('');
	$('#Ch').val('');
	$('#height').val('');
	$('#outputBox').html('&nbsp;').slideUp();
}

function setDefault(){
	$('#Cw').val('');
	$('#Cs').val('');
	$('#Ch').val('');
	$('#height').val('');
}

function onSubmit(){
	var Cw = $('#Cw').val();
	var Cs = $('#Cs').val();
	var Ch = $('#Ch').val();
	var h = $('#height').val();
	var output = '';

	// if() {
	// 	output += '';
	// }
	// else {
	// 	output += '';
	// }
	
	$('#outputBox').html(output).slideDown();
	
	// toast('');
}
