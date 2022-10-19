



// Get overlay popup window. 
const overlayPopup = document.querySelector('div#overlay');

// Get scale in overlay popup window. 
const overlayScale = document.querySelector('div#overlay main.main div.scale');

// Get piano in overlay popup window. 
const overlayPiano = document.querySelector('div#overlay main.main div.pianokeys');


/*****/


// Open scale display. 
function openScaleDisplay(resultIndex, scaleListing='--') {
	console.log( 'Opening overlay...', resultIndex );

	// Get scale index of scale result. 
	scaleIndex = matchingScaleResults[resultIndex];
	// console.log('Scale index:',scaleIndex);

	// Add attributes to window: scale index, result index. 
	overlayPopup.setAttribute('data-scaleindex',scaleIndex);
	overlayPopup.setAttribute('data-resultindex',resultIndex);

	// Use scale index to get list of indexes for selected scale. 
	let keyindexlist = scaleList[scaleIndex].keyindexlist;
	// console.log( 'keyindexlist:', keyindexlist );

	// Add scale listing to overlay display. 
	overlayScale.innerHTML = ( scaleListing = createScaleListing() );
	
	// Add piano key buttons to overlay display. 
	overlayPiano.innerHTML = createPianoKeyboard();

	// Show popup. 
	overlayPopup.classList.add('active');
	
	// Activate keys buttons. 
	activateKeyBtns();

	/****/

	// TODO: Create display of scale listing (based on scale index). 
	function createScaleListing() {
		let debug = false;

		// Get scale name. 
		let scalename = scaleList[scaleIndex].scalename;
		if(debug) console.log(`\tScale name: ${scalename}`);
		
		// Get scale naming indicator. 
		let namingkey = scaleList[scaleIndex].namingkey || ( /* 'keyid' || 'keyflatname' || */ 'keysharpname');
		if(debug) console.log(`\tScale naming key: ${namingkey}`);

		// Get list of key indexes for scale. 
		let keyindexlist = scaleList[scaleIndex].keyindexlist;
		if(debug) console.log(`\tKey index list: [ ${keyindexlist.join(' ')}]`);
		
		// Get formatted list of keys for given scale. 
		let scalekeyslist = formatKeyList( keyindexlist, namingkey );
		if(debug) console.log(`\tKey list: [ ${scalekeyslist.join(' ')}]`);

		// Create corresponding scale data. 
		return `
		<!-- scale -->
		<div class="scale" data-scaleindex="${ scaleIndex }" data-resultindex="${ resultIndex }">
	
			<!-- scalename -->
			<span class="scalename">${ scalename }</span>
			<!-- /scalename -->
	
			<!-- scalekeys -->
			<span class="scalekeys">${ scalekeyslist.join(' ') }</span>
			<!-- /scalekeys -->
			
		</div>
		<!-- /scale -->`;

		/***/

		// Format keys by index (converting numbers to letters). 
		function formatKeyList( keyindexlist, namingkey = 'keyid' ) {
			if(debug) console.log('\tnamingkey:',namingkey);

			// Convert index to key name. 
			return keyindexlist.map( index => ( keyList[index][namingkey] ) );
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
		// result += createPianoOctave();

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

				// Get current key type. 
				let caption = keyList[i].keyid;
				let keytype = keyList[i].keytype;
				
				// Determine if key is included in scale. 
				let inCurrentScale = keyindexlist.includes(1*i);
				// console.log(i,keytype,inCurrentScale);
				
				// Add key to octave. 
				octavekeys += createKey(keytype,inCurrentScale,caption);
			}

			// End octave. 
			octavekeys += `
			</div>
			<!-- /octave -->`;

			// 
			return octavekeys;

			/**/

			// Create piano key. 
			function createKey(keytype,doHighlight,caption) {
				// 
				return `
				<!-- key -->
				<div class="key ${keytype} ${ (doHighlight) ? ('on') : ('') }">

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

		// Get all key buttons. 
		const allKeyBtns = document.querySelectorAll('div#overlay main.main div.pianokeys div.octave div.key');
		// console.log('allKeyBtns',allKeyBtns);

		// Go thru all key buttons. 
		for(let keybtn of allKeyBtns) {
			// Activate key button. 
			keybtn.addEventListener('click',function(event){console.log('Key:',event.currentTarget.innerText);});
		}
	}
}


// Update scale display. 
function updateScaleDisplay(delta) {
	
	// Get current attributes from window: scale index, result index. 
	// let scaleIndex = 1 * overlayPopup.getAttribute('data-scaleindex');
	let resultIndex = 1 * overlayPopup.getAttribute('data-resultindex');
	
	// Increment or decrement result index. 
	resultIndex += delta;

	// Check for valid result index. 
	let validResult = (resultIndex>=0) && (resultIndex<matchingScaleResults.length);
	
	// Get and save result if valid result index. 
	if(validResult) {

		// Use result index to update scale index. 
		scaleIndex = (1 * matchingScaleResults[resultIndex]);
	
		// TODO: Use new attribute to refresh: Show selected scale result on scale display. 
		openScaleDisplay(resultIndex);

		console.log('Scale display updated...');
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
}

