



const htmlRoot = document.querySelector('html');
const bodyRoot = document.querySelector('body');

// Get overlay popup window. 
const overlayPopup = document.querySelector('div#overlay');

// Get display in overlay popup window. 
const overlayDisplay = document.querySelector('div#overlay main.main div.display');


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
function openScaleDisplay(resultIndex) {
	// console.log( 'Opening overlay...', resultIndex );

	// Use result index to get selected scale index. 
	scaleIndex = matchingScaleResults[resultIndex];
	// console.log('Scale index:',scaleIndex);

	// Get data for selected scale. 
	let selectedscale = scaleList[scaleIndex];

	// Add attribute to scale display: result index. 
	overlayDisplay.setAttribute('data-resultindex',resultIndex);

	// Add into scale display: scale listing, piano key buttons. 
	overlayDisplay.innerHTML = createScaleDisplay();

	// Show popup. 
	overlayPopup.classList.add('active');

	// Freeze background page scrolling. 
	pageScrollFreeze(true);
	
	// Activate keys buttons. 
	activateKeyBtns();

	// Activate clipboard copy button. 
	activateCopyBtn();

	/****/

	// Create display: piano keys, scale listing. 
	function createScaleDisplay() {
	
		// Get id for selected scale. 
		let scaleid = selectedscale.scaleid;
		// console.log('Scale id:', scaleid );
	
		// Get name for selected scale. 
		let scalename = selectedscale.scalename;
		// console.log('Scale name:', scalename );
		
		// Get naming key for selected scale. 
		let namingkey = selectedscale.namingkey;
		// console.log('Naming key:', namingkey );

		// Get list of key indexes for selected scale. 
		let keyindexlist = selectedscale.keyindexlist;
		console.log('Key index list:', keyindexlist );
		
		// Get formatted list of keys for given scale. 
		let scalekeyslist = formatKeyList( keyindexlist, namingkey );
		// console.log('Scale keys list:', scalekeyslist );

		// Add attribute to scale display: stringified scale. 
		let scalecopy = `${scaleid} {${ (keyindexlist.map( i => keyList[i][namingkey] )).join(' ') }}`
		overlayDisplay.setAttribute('data-scalecopy',scalecopy);

		// Create display of scale listing and piano keys (based on scale index). 
		return `
		<!-- scalename -->
		<span class="scalename">${ scalename }</span>
		<!-- /scalename -->

		<!-- scalekeys -->
		<span class="scalekeys">${ scalekeyslist.join(' ') }</span>
		<!-- /scalekeys -->
	
		<!-- pianokeyboard -->
		<div class="pianokeyboard">
	
			<!-- octavelist -->
			<ul class="octavelist">
				${ createPianoOctave(0) }
				${ createPianoOctave(1) }
				${ createPianoOctave(2) }
				${ createPianoOctave(3) }
				${ createPianoOctave(4) }
				${ createPianoOctave(5) }
				${ createPianoOctave(6) }
				${ createPianoOctave(7) }
				${ createPianoOctave(8) }
			</ul>
			<!-- /octavelist -->
	
		</div>
		<!-- /pianokeyboard -->
	
		<!-- scalecopier -->
		<div class="scalecopier">
	
			<!-- copybtn -->
			<div class="copybtn">

				<!-- icon -->
				<svg class="icon clipboard" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
					<path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
				</svg>
				<!-- /icon -->
	
				<!-- caption -->
				<span class="caption">Copy</span>
				<!-- /caption -->

				<!-- tooltip -->
				<span class="tooltip">Copy to clipboard</span>
				<!-- /tooltip -->
	
			</div>
			<!-- /copybtn -->
	
		</div>
		<!-- /scalecopier -->`;

		/***/
	
		// Create layout for piano octave. 
		function createPianoOctave(octaveindex) {

			// Initialize layout for list of octave keys. 
			let octavekeylistlayout = '';

			// Create layout for keys in first piano octave. 
			if(octaveindex==0) {

				// Add layout for each key in octave. 
				octavekeylistlayout += createPianoKey(9);
				octavekeylistlayout += createPianoKey(10);
				octavekeylistlayout += createPianoKey(11);
			}

			// Create layout for keys in last piano octave. 
			else if(octaveindex==8) {

				// Add layout for each key in octave. 
				octavekeylistlayout += createPianoKey(0);
			}

			// Create layout for keys in intermediate piano octave. 
			else {

				// Add layout for each key in octave. 
				for(let i in keyList) {
					octavekeylistlayout += createPianoKey(i);
				}
			}

			// Compile layout for piano octave. 
			return `
			<!-- octave -->
			<li class="octave">

				<!-- keylist -->
				<ul class="keylist">
					${octavekeylistlayout}
				</ul>
				<!-- /keylist -->

			</li>
			<!-- /octave -->`;

			/**/

			// Create layout for piano key. 
			function createPianoKey(keyindex) {

				// Get data for current key. 
				let keydata = keyList[keyindex];
				
				// Check if key is included in current scale. 
				let keyInScale = keyindexlist.includes(1*keyindex);
				let keyOnTonic = keyindexlist[0]==(1*keyindex);
				console.log('Current key in selected scale:',keyindex,keyInScale,keyOnTonic);

				// Compile layout for piano key. 
				return `
				<!-- key -->
				<li class="key ${ keydata.keytype }${ keyInScale?' on':'' }${ keyOnTonic?' tonic':'' }" data-keyindex="${keyindex}">

					<!-- caption -->
					<span class="caption">${keydata.keyid}${octaveindex}</span>
					<!-- /caption -->
					
				</li>
				<!-- /key -->`;
			}
		}
	
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
	
	// Activate piano keyboard buttons. 
	function activateKeyBtns() {
		// console.log('activateKeyBtns');

		// Get all scale keys in scale list. 
		const allScaleKeys = document.querySelectorAll('div#overlay main.main div.display span.scalekeys span.key');

		// Get all key buttons on piano keyboard. 
		const allPianoKeyBtns = document.querySelectorAll('div#overlay main.main div.display div.pianokeyboard ul.octavelist li.octave ul.keylist li.key');
		// console.log('All key buttons',allPianoKeyBtns);

		// Go thru all key buttons. 
		for(let keybtn of allPianoKeyBtns) {

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

	// Activate clipboard copy button. 
	function activateCopyBtn() {

		// Get copy button. 
		const copybtn = document.querySelector('div#overlay main.main div.display div.scalecopier div.copybtn');
		const tooltip = document.querySelector('div#overlay main.main div.display div.scalecopier div.copybtn span.tooltip');

		// Copy scale to clipboard upon mouse click. 
		copybtn.addEventListener('click',copyScaleToClipboard);

		// Reset tooltip contents upon mouse leaving button. 
		copybtn.addEventListener('mouseleave',resetTooltip);

		/***/

		// Copy scale to clipboard. 
		function copyScaleToClipboard(event) {

			// Get stringified version of scale from ovelay display. 
			let scalecopy = overlayDisplay.getAttribute('data-scalecopy');

			// Copy scale onto clipboard. 
			navigator.clipboard.writeText(scalecopy);

			// Update contents of tooltip. 
			tooltip.innerHTML = `Copied<br>"${scalecopy}"`;
		}

		// Reset tooltip. 
		function resetTooltip() {
			
			// Reset contents of tooltip. 
			tooltip.innerHTML = 'Copy to clipboard';
		}
	}
}


// Update scale display. 
function updateScaleDisplay(delta) {
	
	// Get current attributes from window: scale index, result index. 
	let resultIndex = 1 * overlayDisplay.getAttribute('data-resultindex');
	
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

		// console.log('Scale display updated...',resultIndex);
	}

	// Disregard if not valid. 
	else {
		// Undo improper  previous change. 
		resultIndex -= delta;
		
		// console.warn('Scale display not updated: Invalid result index disregarded...');
	}
}

// Show previous scale on display. 
function showPrevScale() {
	// console.log('Going to previous scale...');
	
	// Update scale displayed on overlay popup. 
	updateScaleDisplay(-1);
}

// Show next scale on display. 
function showNextScale() {
	// console.log('Going to next scale...');
	
	// Update scale displayed on overlay popup. 
	updateScaleDisplay(+1);
}


// Close scale display. 
function closeScaleDisplay() {
	// console.log('Closing overlay.');

	// Clear attribute from window: scale index. 
	overlayPopup.removeAttribute('data-scaleindex');
	// Clear attribute from scale: result index. 
	overlayDisplay.removeAttribute('data-resultindex');
	// Clear attribute from scale: scale copy. 
	overlayDisplay.removeAttribute('data-scalecopy');

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

