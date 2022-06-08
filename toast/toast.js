

// Add a snackbar element if it's not already there. 
if(!document.querySelectorAll('snackbar').length) {
	document.body.innerHTML += `<!-- #snackbar --> <div id='snackbar'></div> <!-- /#snackbar -->`;
}
const snackbar = document.getElementById('snackbar');

// 
snackbar.addEventListener('click',closeSnackbar);
// $('#snackbar').click(closeSnackbar);

/*****/

// Close snackbar. 
function closeSnackbar(event) {
	event.currentTarget.style.opacity = 0;
	// $(this).css('opacity',0);
}

/*****/


function toast(msg) {
	showToast(msg);
}
function showToast(msg) {
	timedToast(msg, 3000, "show");
}
function longToast(msg) {
	timedToast(msg, 10000, "long");
}
function longerToast(msg) {
	timedToast(msg, 20000, "longer");
}

function timedToast(msg, duration, label) {

	// 
	const delay = 0;

	// 
    const snackbar = document.getElementById('snackbar');
    // const snackbar = $("#snackbar");

	// 
	if(msg) {
		snackbar.innerHTML = msg;
		// snackbar.html(msg);
	}

	// 
    setTimeout( function(){ 
    	snackbar.classList.add(label);
    	// snackbar.addClass(label);
		
	    setTimeout( function(){
	    	snackbar.classList.remove(label);
	    	// snackbar.removeClass(label);
		} , duration );
		
	} , delay );
}

// 
function stickyToast(msg) {

	// 
	var delay = 0;

	// 
    const snackbar = document.getElementById('snackbar');
    // const snackbar = $("#snackbar");
    
	// 
	if(msg) {
		// 
		snackbar.innerHTML = msg;
		// snackbar.html(msg);
	}

	// 
    setTimeout( function(){ 
    	snackbar.classList.add('permanent');
    	// snackbar.addClass("permanent");
	} , delay );
}


