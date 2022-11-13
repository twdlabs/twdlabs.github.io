



const htmlRoot = document.querySelector('html');
const bodyRoot = document.querySelector('body');

// Get overlay popup window. 
const overlayPopup = document.querySelector('div#overlay');

// Get scale in overlay popup window. 
const overlayScale = document.querySelector('div#overlay main.main div.scale');

// Get piano in overlay popup window. 
const overlayPiano = document.querySelector('div#overlay main.main div.pianokeys div.inner');


/*****/


document.addEventListener('keydown',checkForShortcutKey);

// Check for shortcut key. 
function checkForShortcutKey(event) {
	// console.log( event, event.keyCode );

	// Check if overlay open. 
	const overlayOn = overlayPopup.classList.contains('active');

	// Process shortcut keys only if overlay open. 
	if(overlayOn) {

		// Check for left arrow. 
		let isLeftArrow = (event.keyCode==37 || event.key=='ArrowLeft');
		if(isLeftArrow) showPrevScale();
		
		// Check for right arrow. 
		let isRightArrow = (event.keyCode==39 || event.key=='ArrowRight');
		if(isRightArrow) showNextScale();
	}
}


/*****/


// Open scale display. 
function openScaleDisplay(resultIndex, scaleListing='--') {
	console.log( 'Opening overlay...', resultIndex );

	// Use result index to get selected scale index. 
	scaleIndex = matchingScaleResults[resultIndex];
	// console.log('Scale index:',scaleIndex);

	// Add attribute to scale display: result index. 
	overlayScale.setAttribute('data-resultindex',resultIndex);

	// Use scale index to get list of indexes for selected scale. 
	let keyindexlist = scaleList[scaleIndex].keyindexlist;
	// console.log( 'keyindexlist:', keyindexlist );

	// Add scale listing to overlay display. 
	overlayScale.innerHTML = ( scaleListing = createScaleListing() );
	
	// Add piano key buttons to overlay display. 
	overlayPiano.innerHTML = createPianoKeyboard();

	// Show popup. 
	overlayPopup.classList.add('active');
	// Freeze background page scrolling. 
	pageScrollFreeze(true);
	
	// Activate keys buttons. 
	activateKeyBtns();

	/****/

	// TODO: Create display of scale listing (based on scale index?). 
	function createScaleListing() {

		// Get scale name. 
		let scalename = scaleList[scaleIndex].scalename;
		
		// Get scale naming indicator. 
		let namingkey = scaleList[scaleIndex].namingkey;

		// Get list of key indexes for scale. 
		let keyindexlist = scaleList[scaleIndex].keyindexlist;

		// Get formatted list of keys for given scale. 
		let scalekeyslist = formatKeyList( keyindexlist, namingkey );

		// Create corresponding scale data. 
		return `
		<!-- scalename -->
		<span class="scalename">${ scalename }</span>
		<!-- /scalename -->

		<!-- scalekeys -->
		<span class="scalekeys">${ scalekeyslist.join(' ') }</span>
		<!-- /scalekeys -->`;

		/***/

		// Format keys by index (converting numbers to letters). 
		function formatKeyList( keyindexlist, namingkey = 'keyid' ) {

			// Convert key index to key name. 
			// return keyindexlist.map( keyindex => ( keyList[keyindex][namingkey] ) );

			// Convert key index to key element. 
			return keyindexlist.map( keyindex => `
			<!-- key -->
			<span class="key" data-keyindex="${keyindex}">${ keyList[keyindex][namingkey] }</span>
			<!-- /key -->` );
		}
	}

	// Create display of piano keys. 
	function createPianoKeyboard() {
		// console.log('createPianoKeyboard');

		// Initialize result. 
		let result = '';

		// Add piano octaves. 
		result += createPianoOctave();
		result += createPianoOctave();
		result += createPianoOctave();

		// Return result to origin. 
		// console.log(result);
		return result;
		
		// 
	
		/***/

		// Create piano octave. 
		function createPianoOctave() {

			// Initialize result. 
			let octavekeys = '';

			// Open octave. 
			octavekeys += `
			<!-- octave -->
			<div class="octave">`;

			// Add all keys to octave. 
			for(let i in keyList) {
				octavekeys += createPianoKey(i);
			}

			// End octave. 
			octavekeys += `
			</div>
			<!-- /octave -->`;

			// 
			return octavekeys;

			/**/

			// Create piano key. 
			function createPianoKey(keyindex) {

				// Get current key details. 
				let caption = keyList[keyindex].keyid;
				let keytype = keyList[keyindex].keytype;
				
				// Determine if key is included in current scale. 
				let doHighlight = keyindexlist.includes(1*keyindex);
				// console.log(i,'inCurrentScale:',doHighlight);

				// Return result. 
				return `
				<!-- key -->
				<div class="key ${keytype} ${ (doHighlight) ? ('on') : ('') }" data-keyindex="${keyindex}">

					<!-- caption -->
					<span class="caption">${caption}</span>
					<!-- /caption -->
					
				</div>
				<!-- /key -->`;
			}
		}
	}
	
	// Activate piano keyboard buttons. 
	function activateKeyBtns() {
		// console.log('activateKeyBtns');

		// Get all scale keys in scale list. 
		const allScaleKeys = document.querySelectorAll('div#overlay main.main div.display div.scale span.scalekeys span.key');

		// Get all key buttons on piano keyboard. 
		const allKeyBtns = document.querySelectorAll('div#overlay main.main div.pianokeys div.octave div.key');
		// console.log('allKeyBtns',allKeyBtns);

		// Go thru all key buttons. 
		for(let keybtn of allKeyBtns) {

			// Activate key button. 
			keybtn.addEventListener('mousedown',showSelectedKey);
			keybtn.addEventListener('mouseup',resetScaleKeys);
		}

		/***/

		// Show selected scale list key. 
		function showSelectedKey(event) {
			
			// Get selected key. 
			selectedKey = event.currentTarget;

			// Get key index. 
			keyindex = 1 * selectedKey.getAttribute('data-keyindex');
			
			// Highlight selected key on scale key list. 
			for(let scalekey of allScaleKeys) {

				// Check if key matches. 
				let keyMatches = ( 1*scalekey.getAttribute('data-keyindex') )==( 1*selectedKey.getAttribute('data-keyindex') );

				// Highlight if so. 
				if(keyMatches) scalekey.classList.add('on');

				// Un-highlight if not. 
				// else scalekey.classList.remove('on');
			}
			// console.log('Key:',keyindex,selectedKey.innerText);
		}

		// Reset scale list keys. 
		function resetScaleKeys() {
			
			// Un-highlight all keys on scale key list. 
			for(let scalekey of allScaleKeys) {
				
				// Un-highlight key. 
				scalekey.classList.remove('on');
			}
		}
	}
}


// Update scale display. 
function updateScaleDisplay(delta) {
	
	// Get current attributes from window: scale index, result index. 
	let resultIndex = 1 * overlayScale.getAttribute('data-resultindex');
	
	// Increment or decrement result index. 
	resultIndex += (1*delta);

	// Allow for circular scale shifting. 
	if(resultIndex < 0) resultIndex = matchingScaleResults.length - 1;
	if(resultIndex >= matchingScaleResults.length) resultIndex = 0;

	// Check for valid result index. 
	let validResult = (resultIndex>=0) && (resultIndex<matchingScaleResults.length);
	
	// Get and save result if valid result index. 
	if(validResult) {

		// Use result index to update scale index. 
		// scaleIndex = (1 * matchingScaleResults[resultIndex]);
	
		// Use new index to refresh scale result on scale display. 
		openScaleDisplay(resultIndex);

		console.log('Scale display updated...',resultIndex);
	}

	// Disregard if not valid. 
	else {
		// Undo improper  previous change. 
		resultIndex -= delta;
		
		console.warn('Scale display not updated: Invalid result index disregarded...');
	}
}

// Show previous scale on display. 
function showPrevScale() {
	console.log('Going to previous scale...');
	
	// Update scale displayed on overlay popup. 
	updateScaleDisplay(-1);
}

// Show next scale on display. 
function showNextScale() {
	console.log('Going to next scale...');
	
	// Update scale displayed on overlay popup. 
	updateScaleDisplay(+1);
}


// Close scale display. 
function closeScaleDisplay() {
	console.log('Closing overlay.');

	// Clear attributes from window: scale index, result index. 
	overlayPopup.removeAttribute('data-scaleindex');
	overlayPopup.removeAttribute('data-resultindex');

	// Hide popup. 
	overlayPopup.classList.remove('active');

	// Un-freeze background page scrolling. 
	pageScrollFreeze(false);
}

// Update freeze state of background page scrolling. 
function pageScrollFreeze(doFreeze) {
	if(doFreeze) {
		htmlRoot.style.overflow = 'hidden';
		bodyRoot.style.overflow = 'hidden';
	}
	else {
		htmlRoot.style.overflow = '';
		bodyRoot.style.overflow = '';
	}
}

