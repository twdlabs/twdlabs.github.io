
function onClear(){
	$('#pHE').val('');
	$('#pH').val('');
	$('#pE').val('');
	$('#pEH').val('');
	$('#outputBox').html("&nbsp;").slideUp();
	$('#snackbar').html("&nbsp;").fadeOut();
}

function setDefault(){
	$('#pHE').val('.25');
	$('#pH').val('.25');
	$('#pE').val('.25');
	$('#pEH').val('.25');
}

function onSubmit(){
	var output = '';
	
	$('#outputBox').html(output).slideDown();
}
