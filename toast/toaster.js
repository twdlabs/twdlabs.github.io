
function onClear(){
	$('#text').val("");
}

function setDefault(){
	$('#text').val("Hello world!");
}

function onSubmit(){
	var text = $('#text').val();
	longerToast(text);
}
