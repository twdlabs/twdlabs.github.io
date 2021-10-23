
$(document).ready(startNotifying);

// Create new notification on regular interval. 
function startNotifying() {
	setInterval(addItem, 15000);
}



// Open notification center. 
function openNotifCenter() {
	// Add anchored class. 
	$('#notifCenter').addClass('anchored');

	// Show overlay effect. 
	addOverlay();

	// Appear on screen (removing anchored class). 
	$('#notifCenter').removeClass('anchored');
}

// Close notification center. 
function closeNotifCenter() {
	// Disappear off screen (adding anchored class). 
	$('#notifCenter').addClass('anchored');

	// Hide overlay effect (after 0.5 sec). 
	setTimeout(removeOverlay, 500);
}


// Add new notification item. 
function addItem() {
	let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/><path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>';
	let d = new Date();
	let time = '12:00 AM';
	time = formatTime(d);

	// Create an item, piece by piece. 
	let item = '';
	item += '<div class="item min">';
		item += '<div class="head">';
			item += '<div class="icon">'+svg+'</div>';
			item += '<div class="name">Notification</div>';
			item += '<div class="time">'+time+'</div>';
		item += '</div>';
		item += '<div class="body">';
			item += '<div class="secA">Day by day...</div>';
			item += '<div class="secB">... in every way its getting better and better and better and better and better and better and better and better and better and better and better.</div>';
		item += '</div>';
	item += '</div>';

	// Add minimized item to page.
	$('div#notifCenter div#itemBox').prepend(item);

	// Maximize item. 
	setTimeout(maximizeItems, 25);

	// Format time. 
	function formatTime(d) {
		let h = d.getHours();
		let m = d.getMinutes();

		let result = '';
		result += (h%12) ? (h%12) : (12);
		result += ':';
		result += (m<10) ? ('0'+m) : (m);
		result += ' ';
		result += (h<12) ? ('AM') : ('PM');

		return result;
	}
}

// Maximize item. 
function maximizeItems() {
	$('div#notifCenter div.item').removeClass('min');
}
