

// Open feedback form. 
function openFeedbackForm() {
	console.log('Now opening feedback form.');

	// Prevent premature removal from previous instance. 
	clearTimeout(popupRemoval);
	
	// Add overlay effect. 
	addOverlay();
	

	// Create a feedback form popup box. 

	let fbform = '';

	fbform += '<div id="feedbackForm" class="popup anchored">';

		fbform += '<div class="inner container-fluid">';

			fbform += '<div class="row">';

				fbform += '<div class="col-6">';
					fbform += '<button id="goodFeedback" class="feedbackBtn" onclick="sendFeedback(true); closeFeedbackForm();">';
						fbform += '<i class=" fa fa-thumbs-up"></i>';
					fbform += '</button>';
				fbform += '</div>';

				fbform += '<div class="col-6">';
					fbform += '<button id="badFeedback" class="feedbackBtn" onclick="sendFeedback(false); closeFeedbackForm();">';
						fbform += '<i class=" fa fa-thumbs-down"></i>';
					fbform += '</button>';
				fbform += '</div>';

			fbform += '</div>';

		fbform += '</div>';

	fbform += '</div>';


	// Show the feedback form popup box. 
	$('#container').append(fbform);

	// Bubble popup up from bottom of page (after delay). 
	let x = setTimeout( removeAnchor , 100 );
	// removeAnchor();

	/*****/

	// Allow popup window to come to center of screen. 
	function removeAnchor() {
		// Check if element found. 
		let elemFound = $('#feedbackForm').length;

		// Remove anchor if element is found on page. 
		if(elemFound) {
			$('#feedbackForm').removeClass('anchored');
		}
		// Repeat until element is found on page. 
		else {
			setTimeout(removeAnchor,100);
		}
	}
}

// Close feedback form. 
function closeFeedbackForm() {
	console.log('Now closing feedback form.');

	// Slide popup down to bottom of page. 
	$('#feedbackForm').addClass('anchored');

	// Remove popup from page (after 1 sec delay). 
	popupRemoval = setTimeout( removePopup, 1000 );

	// Remove overlay effect. 
	removeOverlay();

	 /*****/

	function removePopup() {
		$('#feedbackForm').remove();
	}
}

// TODO: Send feedback by email. 
function sendFeedback(isGood) {
	if(isGood) 
		console.log('Positive feedback');
	else 
		console.log('Negative feedback');
}
