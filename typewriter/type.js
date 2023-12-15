


// Create global access to timeout functions. 
var typing;
var backspacing;


// Set initial value of letter counter. 
var i = 0;

// Define text to be typed. 
var txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet molestie risus. Etiam eleifend est vel ultrices pulvinar. Donec imperdiet pulvinar ipsum, ut gravida turpis. Duis blandit risus nisi, sed aliquam risus commodo placerat. Suspendisse in eros tortor. Curabitur nibh magna, luctus ac libero ac, auctor vestibulum nisi. Maecenas quis ex ut neque aliquet ornare. Phasellus pulvinar vestibulum mauris, in tincidunt arcu mollis eu. Suspendisse elementum diam dui, vitae congue erat vestibulum eu. Fusce venenatis felis nisl, eget varius lectus efficitur non. Aliquam erat volutpat. Duis suscipit est feugiat, pellentesque mauris consequat, iaculis magna. Mauris finibus diam nec nunc convallis auctor. Integer lobortis ultrices justo ac luctus. Etiam eget ultrices dolor. Maecenas tincidunt dignissim libero vitae vehicula. Donec ut tincidunt eros, ac mollis mauris. Maecenas pellentesque vitae quam sit amet blandit. Nam eget diam lacus. Nam ultrices arcu sed condimentum cursus.';



// Start typing letters. 
function startTyping() {
	// Define time differential (in milliseconds). 
	let dtType = 150;

	// Toggle cursor blink. 
	toggleBlinking();

	// Stop backspacing letters. 
	stop();

	// Start typing letters.
	typeLetter();

	// Toggle cursor blink. 
	toggleBlinking();

	/*****/

	// Type a letter. 
	function typeLetter() {
		if (i < txt.length) {
			document.getElementById("text").innerHTML += txt.charAt(i);
			i++;
			typing = setTimeout(typeLetter, dtType);
		}
	}
}


// Start backspacing letters. 
function startBackspace() {
	// Define time differential (in milliseconds). 
	let dtBack = 50;

	// Toggle cursor blink. 
	toggleBlinking();

	// Stop typing letters. 
	stop();

	// Start backspacing letters. 
	backLetter();

	// Toggle cursor blink. 
	toggleBlinking();

	/*****/

	// Backspace a letter. 
	function backLetter() {
		if (i > 0) {
			let prev = document.getElementById("text").innerHTML
			document.getElementById("text").innerHTML = prev.substr(0, prev.length-1 );
			i--;
			backspacing = setTimeout(backLetter, dtBack);
		}
	}
}


// Toggle blinking of cursor. 
function toggleBlinking() {
	console.log('Toggle blinking')
	// Toggle 'blink' class. 
	$('div#typewriter div#text').toggleClass('blink');
}


// Stop all typing and/or backspacing. 
function stop() {
	if(typing) clearTimeout(typing);
	if(backspacing) clearTimeout(backspacing);

	// Toggle cursor blink. 
	toggleBlinking();
}
