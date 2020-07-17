
function onClear(){
	$('#r').val("");
	// $('#outputBox').html("&nbsp;");
}

function setDefault(){
	$('#r').val(".5");
}

function onSubmit(){
	var r = $('#r').val();
	if(r=="" || r<-1 || r>1) {
		toast("Invalid input. Please enter a correlation coefficient between -1 and 1.")
		return;
	}
	vP = (100*r*r);

	var output = "";
	output += "This variable accounts for "+vP+"% of the variance,";
	output += " leaving "+(100-vP)+"% of the variance unaccounted for.";
	
	// $('#outputBox').html(output);
	longToast(output);
}
