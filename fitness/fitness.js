
// Executes when HTML DOM is loaded already. 
$(document).ready(function(){
	// Click the #defaultOpen tab link
	// document.getElementById('defaultOpen').click();
	// document.getElementsByClassName('tablink')[1].click();
	onResize();
});

window.onresize = onResize;
function onResize() {
	var bodyHeight = $('body').outerHeight();
	var navHeight = $('nav').outerHeight();
	var buttonHeight = $('#defaultOpen').outerHeight();

	var contentHeight = bodyHeight - buttonHeight - navHeight;
	$('.contentBox')
	.css('height', contentHeight)
	.css('margin-top', navHeight)
	.css('margin-bottom', buttonHeight);
}

function openPage(pageId,button) {

	// Hide all content. 
	var tabcontent = document.getElementsByClassName('tabcontent');
	for (var i=0; i<tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Remove color from all buttons. 
	var tablinks = document.getElementsByClassName('tablink');
	for (var i=0; i<tablinks.length; i++) {
		tablinks[i].style.color = '';
	}

	// Show selected content. 
	// var fillcolor = $('#'+pageId).css('background-color');
	var fillcolor = 'dodgerblue';
	button.style.color = fillcolor;
	document.getElementById(pageId).style.display = 'block';
}
