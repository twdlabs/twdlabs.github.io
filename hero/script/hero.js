
// Set initial value of pause time between typed roles. 
let blinkTime = 750;


// Start repeating role-typewriter animation. 
function startTypewriter() {
	// console.log('Starting role-typewriter animation...');

	// Open access to timeout functions. 
	var typing;
	var backspacing;

	// Set initial value of letter counter. 
	var i = 0;

	// Set initial value of current text index. 
	var currentTextIndex = 0;

	// Type out first role. 
	toggleBlinking(false);
	startTyping( roles[currentTextIndex] );

	/*****/

	// Type a letter and continue. 
	function startTyping(txt) {
		// console.log('Starting typing...');

		// Define time differential (in milliseconds). 
		let dtType = 150;

		// Start typing letters.
		typeLetter();
		
		/*****/

		// Type a letter. 
		function typeLetter() {
			// console.log('Type letter...');

			// Check if more letters to add. 
			if (i < txt.length) {

				// Add a letter. 
				$('p.roles span.typed').append( txt.charAt(i) );

				// Increment letter count. 
				i++;

				// Type next letter (after dt milliseconds). 
				typing = setTimeout(typeLetter,dtType);
			}
			// Take this action when finished typing. 
			else {
				// Pause when finished (with blinking on). 
				toggleBlinking(true);

				// Then backspace what was typed (with blinking off). 
				setTimeout(function() {
					toggleBlinking(false);
					startBackspace(txt);
				}, 3*blinkTime);
			}
		}
	}

	// Type a letter and continue. 
	function startBackspace(txt) {
		// console.log('Starting backspacing...');

		// Define time differential (in milliseconds). 
		let dtBack = 50;

		// Start backspacing letters. 
		backLetter();
		
		/*****/

		// Backspace a letter. 
		function backLetter() {
			// console.log('Backspace letter...');

			// Check if more letters to remove. 
			if (i > 0) {

				// Remove a letter. 
				let prev = $('p.roles span.typed').html();	// console.log('prev', prev);
				$('p.roles span.typed').html( prev.substr(0, prev.length-1) );

				// Decrement letter count. 
				i--;

				// Backspace next letter (after dt milliseconds). 
				backspacing = setTimeout(backLetter,dtBack);
			}
			// Take this action when finished backspacing. 
			else {
				// Start typing next role (right away). 
				startTyping( getNextText() );
			}
		}
	}

	// Get next text. 
	function getNextText() {
		// Get number of texts available. 
		let n = roles.length;

		// Increment current text index. 
		currentTextIndex++;

		// Connect back of array to front of array (circular array). 
		if(currentTextIndex>=n) currentTextIndex = 0;

		// Retrun next text. 
		return roles[currentTextIndex];
	}

	// Toggle blinking of cursor. 
	function toggleBlinking(turnOn) {
		// console.log('Toggle blinking');

		// Toggle 'blink' class. 
		if(turnOn) $('p.roles span.typed').addClass('blink');
		else $('p.roles span.typed').removeClass('blink');
	}

	// Stop all typing and/or backspacing animation(s). 
	function stop() {
		if(typing) clearTimeout(typing);
		if(backspacing) clearTimeout(backspacing);

		// Toggle cursor blink. 
		toggleBlinking(true);
	}
}