
$(document).ready(function() {
	$('input.myQuery').on('input',syncronizeInput);
});

function syncronizeInput(event) {
	var trgt = event.target.value;
	// 
	$('#searchBox').val(trgt);
	$('#pageName').val(trgt);
}
