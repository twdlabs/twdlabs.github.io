


// Get overlay popup. 
const overlayPopup = document.getElementById('overlay');
const overlayScale = document.querySelector('div#overlay main.main div.scale');
const overlayPiano = document.querySelector('div#overlay main.main div.pianokeys');


/*****/


// Open scale display. 
function openScaleDisplay(scaleIndex, displayContent='') {
	console.log( 'Opening overlay...', scaleIndex, keyindexlist = scaleList[scaleIndex].keyindexlist );

	// Show given display content. 
	overlayScale.innerHTML = displayContent;

	// Add keys buttons. 
	addKeyBtns();

	// Show popup. 
	overlayPopup.classList.add('active');

	/****/

	// Add keys buttons. 
	function addKeyBtns() {
		// console.log('addKeyBtns');
		
		// Add piano key buttons to overlay popup. 
		overlayPiano.innerHTML = createPianoKeyboard();
	
		// Activate keys buttons. 
		activateKeyBtns();
	
		/***/

		// Create display of piano keys. 
		function createPianoKeyboard() {
			// console.log('createPianoKeyboard');

			// Define list of key types in single piano octave. 
			const octavePattern = [
				'white c',
				'black cd p1',
				'white d',
				'black de p2',
				'white e',
				'white f',
				'black fg p4',
				'white g',
				'black ga p5',
				'white a',
				'black ab p6',
				'white b',
			];

			// Initialize result. 
			let result = '';

			// Add piano octaves. 
			result += createPianoOctave();
			result += createPianoOctave();
			// result += createPianoOctave();

			// Return result to origin. 
			// console.log(result);
			return result;

			/**/

			// Create octave. 
			function createPianoOctave() {

				// Initialize result. 
				let octave = '';

				// Open octave. 
				octave += `
				<!-- octave -->
				<div class="octave">`;
	
				// Add all keys to octave. 
				for(let i in octavePattern) {

					// Get current key type. 
					let keytype = octavePattern[i];
					
					// Determine if key is included in scale. 
					let isActive = keyindexlist.includes(1*i);
					console.log(i,keytype,isActive);
					
					// 
					octave += createKey(keytype,isActive);
				}
	
				// End octave. 
				octave += `
				</div>
				<!-- /octave -->`;

				// 
				return octave;

				/**/

				// Create key. 
				function createKey(keytype,isActive) {
					// 
					return `
					<!-- key -->
					<span class="key ${keytype} ${ (isActive) ? ('active') : ('') }"></span>
					<!-- /key -->`;
				}
			}
		}
	
		// Activate keys buttons. 
		function activateKeyBtns() {
			// console.log('activateKeyBtns');

			// Get all key buttons. 
			const allKeyBtns = document.querySelectorAll('div#overlay main.main div.pianokeys div.octave span.key');
			console.log('allKeyBtns',allKeyBtns);

			// Go thru all key buttons. 
			for(let keybtn of allKeyBtns) {
				// TODO: Activate key button. 
				// keybtn.addEventListener('click',whatToDo);
			}
		}
	}
}

// Close scale display. 
function closeScaleDisplay() {
	console.log('Closing overlay.');

	// Hide popup. 
	overlayPopup.classList.remove('active');
}

