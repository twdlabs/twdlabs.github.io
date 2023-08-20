


// Create control panel for window header. 
function createControlPanel() {

	// Return control panel dots. 
	return `
	<!-- dot -->
	<div class="dot r">

		<!-- icon -->
		<span class="icon">&times;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->

	<!-- dot -->
	<div class="dot y">

		<!-- icon -->
		<span class="icon">&minus;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->

	<!-- dot -->
	<div class="dot g">

		<!-- icon -->
		<span class="icon">&plus;</span>
		<!-- /icon -->
		
	</div>
	<!-- /dot -->`;
}

// Activate controls for given desktop window. 
function makeControllable(desktopwindow) {
	console.log('\tActivating controls:',desktopwindow);

	// Get control dot buttons. 
	let dotbtnred = desktopwindow.querySelector('div.headbar div.controls div.dot.r');
	// console.log('dotbtnred:',dotbtnred);
	let dotbtnyellow = desktopwindow.querySelector('div.headbar div.controls div.dot.y');
	// console.log('dotbtnyellow:',dotbtnyellow);
	let dotbtngreen = desktopwindow.querySelector('div.headbar div.controls div.dot.g');
	// console.log('dotbtngreen:',dotbtngreen);

	// Get headbar of desktop window. 
	let headbar = desktopwindow.querySelector('div.headbar');
	// Activate double click of headbar. 
	headbar.addEventListener('dblclick',toggleMaximize);

	// Activate control dot buttons. 
	dotbtnred.addEventListener('click',closeWindow);
	dotbtnyellow.addEventListener('click',toggleMinimize);
	dotbtngreen.addEventListener('click',toggleMaximize);

	/****/

	// Toggle window maximization. 
	function toggleMaximize() {

		// Check if already maximized. 
		let alreadyMaximized = desktopwindow.classList.contains('max');

		// Un-maximize if already maximized. 
		if(alreadyMaximized) {
			// 
			desktopwindow.classList.remove('max');
		}
		// Maximize if not already maximized. 
		else {
			// 
			desktopwindow.classList.add('max');
			// Ensure exclusivity of max/min. 
			desktopwindow.classList.remove('min');
		}
	}

	// Toggle window minimization. 
	function toggleMinimize() {

		// Check if already minimized. 
		let alreadyMinimized = desktopwindow.classList.contains('min');

		// Un-minimize if already minimized. 
		if(alreadyMinimized) {
			// 
			desktopwindow.classList.remove('min');
		}
		// Minimize if not already minimized. 
		else {
			// 
			desktopwindow.classList.add('min');
			// Ensure exclusivity of max/min. 
			desktopwindow.classList.remove('max');
		}
	}

	// Close window. 
	function closeWindow() {
		// Remove element from page. 
		desktopwindow.remove();
	}
}

// Request creation of new desktop window. 
function addNewWindow(windowtype) {

	// Get layout for new desktop window. 
	let newdeskwindowlayout = createNewWindow(/* windowtype */);
	// Add new desktop window to page. 
	// desktop.insertAdjacentHTML('beforeend',newdeskwindowlayout);
	desktoplinkgrid.insertAdjacentHTML('beforebegin',newdeskwindowlayout);

	// Get new desktop window. 
	let newdw = document.querySelector(`div#container div.desktop div.window#window${windowcount}`);
	console.log('New desktop window:',windowcount,newdw);

	// Activate new desktop window. 
	activateDesktopWindow(newdw);

	// Increment count of desktop windows. 
	windowcount++;

	/****/

	// Create new desktop window. 
	function createNewWindow(/* windowtype */) {
		console.log('New window type:',windowtype);

		// Define window creation methods. 
		let windowmethods = {
			// folder:createFolderContent,
			text:createTextContent,
			image:createImageContent,
			audio:createAudioContent,
			video:createVideoContent,
		}

		// Get icon tag for given window type. 
		let icontag = fileTypeData[windowtype];
		
		// Get icon path. 
		let iconpath = iconData[icontag];
	
		// Compile layout for new desktop window. 
		return `
		<!-- window -->
		<div id="window${windowcount}" class="window ${windowtype}" style="--i:${ getNewTopLevel() };">
	
			<!-- headbar -->
			<div class="headbar">

				<!-- controls -->
				<div class="controls">${ createControlPanel() }</div>
				<!-- /controls -->
	
				<!-- dotmatrix -->
				<div class="dotmatrix">${ createDotMatrix() }</div>
				<!-- /dotmatrix -->

				<!-- windowtype -->
				<div class="windowtype">

					<!-- icon -->
					<svg class="icon ${icontag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						${iconpath}
					</svg>
					<!-- /icon -->

				</div>
				<!-- /windowtype -->
	
			</div>
			<!-- /headbar -->
	
			<!-- bodycontent -->
			<div class="bodycontent">${ (windowtype=='folder') ? createFolderContent(/* file */) : windowmethods[windowtype](fileurl) }</div>
			<!-- /bodycontent -->

			<!-- resizer -->
			<div class="resizer">

				<!-- icon -->
				<svg class="icon lines" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
				</svg>
				<!-- /icon -->
				
			</div>
			<!-- /resizer -->
			
		</div>
		<!-- /window -->`;

		/***/
		
		// TODO: Create file folder content for new desktop window. 
		function createFolderContent(folderfile={}) {


			// TODO: Get name of given folder. 
			let foldername = folderfile.filename || '';

			// TODO: Get list of files for given folder. 
			let filelist = folderfile.foldercontents || [];

			// TODO: Get file count for given folder. 
			let filecount = filelist.length || 0;
		
			// Compile folder layout. 
			return `
			<!-- head -->
			<div class="head">

				<!-- backbtn -->
				<div class="backbtn btn">

					<!-- icon -->
					<svg class="icon caretleft" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="scale:.875;">
						<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
					</svg>
					<!-- /icon -->
					
				</div>
				<!-- /backbtn -->

				<!-- fwdbtn -->
				<div class="fwdbtn btn">

					<!-- icon -->
					<svg class="icon caretright" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="scale:.875;">
						<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
					</svg>
					<!-- /icon -->
					
				</div>
				<!-- /fwdbtn -->

				<!-- foldername -->
				<label class="foldername">${ foldername }</label>
				<!-- /foldername -->

			</div>
			<!-- /head -->
			`+`
			<!-- body -->
			<div class="body">

				<!-- filelist -->
				<ul class="filelist">
					${ getFileListLayout(filelist) }
				</ul>
				<!-- /filelist -->

				<!-- filepreview -->
				<div class="filepreview"></div>
				<!-- /filepreview -->

			</div>
			<!-- /body -->
			`+`
			<!-- foot -->
			<div class="foot">

				<!-- caption -->
				<span class="caption">${filecount} item${ (filecount==1) ? '' : 's'}</span>
				<!-- /caption -->

			</div>
			<!-- /foot -->`;

			/**/

			// TODO: Get layout of included file list. 
			function getFileListLayout(filelist) {

				// Initialize result. 
				let result = '';

				// Compile result. 
				for(let file of filelist) {

					// Add list item for file. 
					result += `
					<!-- fileitem -->
					<li class="fileitem">

						<!-- filelink -->
						<a class="filelink" href="javascript:void(0)">

							<!-- icon -->
							<svg class="icon filefolder" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">xyz</span>
							<!-- /caption -->

						</a>
						<!-- /filelink -->
						
					</li>
					<!-- /fileitem -->`;

					// Add list item for file. 
					result += `
					<!-- fileitem -->
					<li class="fileitem">

						<!-- filelink -->
						<a class="filelink" href="javascript:void(0)">

							<!-- icon -->
							<svg class="icon textfile" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
								<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">xyz.txt</span>
							<!-- /caption -->

						</a>
						<!-- /filelink -->
						
					</li>
					<!-- /fileitem -->`;

					// Add list item for file. 
					result += `
					<!-- fileitem -->
					<li class="fileitem">

						<!-- filelink -->
						<a class="filelink" href="javascript:void(0)">

							<!-- icon -->
							<svg class="icon imagefile" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
								<path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">xyz.png</span>
							<!-- /caption -->

						</a>
						<!-- /filelink -->
						
					</li>
					<!-- /fileitem -->`;

					// Add list item for file. 
					result += `
					<!-- fileitem -->
					<li class="fileitem">

						<!-- filelink -->
						<a class="filelink" href="javascript:void(0)">

							<!-- icon -->
							<svg class="icon audiofile" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3z"/>
								<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">xyz.mp3</span>
							<!-- /caption -->

						</a>
						<!-- /filelink -->
						
					</li>
					<!-- /fileitem -->`;

					// Add list item for file. 
					result += `
					<!-- fileitem -->
					<li class="fileitem">

						<!-- filelink -->
						<a class="filelink" href="javascript:void(0)">

							<!-- icon -->
							<svg class="icon videofile" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
								<path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/>
								<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
							</svg>
							<!-- /icon -->

							<!-- caption -->
							<span class="caption">xyz.mp4</span>
							<!-- /caption -->

						</a>
						<!-- /filelink -->
						
					</li>
					<!-- /fileitem -->`;
				}

				// Return result. 
				return result;
			}
		}

		// Create text content for new desktop window. 
		function createTextContent(url) {
		
			// Return layout. 
			return `
			<!-- text -->
			<iframe class="text" src="${url}" frameborder="0"></iframe>
			<!-- /text -->`;
		}

		// Create image content for new desktop window. 
		function createImageContent(url) {
		
			// Return layout. 
			return `
			<!-- pic -->
			<img class="pic" src="${url}">
			<!-- /pic -->`;
		}

		// Create audio content for new desktop window. 
		function createAudioContent(url) {
		
			// Return layout. 
			return `
			<!-- clipbox -->
			<div class="clipbox">
		
				<!-- clip -->
				<audio class="clip" src="${url}" controls></audio>
				<!-- /clip -->

				<!-- cover -->
				<label class="cover">

					<!-- icon -->
					<svg class="icon speaker" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
						<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
						<path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
					</svg>
					<!-- /icon -->
					
				</label>
				<!-- /cover -->

			</div>
			<!-- /clipbox -->`;
		}
		
		// Create video content for new desktop window. 
		function createVideoContent(url) {
		
			// Return layout. 
			return `
			<!-- vidbox -->
			<div class="vidbox">

				<!-- vid -->
				<video class="vid" src="${url}" controls></video>
				<!-- /vid -->

				<!-- cover -->
				<label class="cover">

					<!-- icon -->
					<svg class="icon speaker" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
						<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
						<path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
					</svg>
					<!-- /icon -->
					
				</label>
				<!-- /cover -->

			</div>
			<!-- /vidbox -->`;
		}
	}
}

// Activate desktop window. 
function activateDesktopWindow(dw) {
	console.log('Now activating:',dw);

	// Activate movement of desktop window. 
	makeMovable(dw/* ,'div.headbar' */);

	// Activate controls of desktop window. 
	makeControllable(dw);

	// Activate levels of desktop window. 
	makeLevelable(dw);

	// Activate resizability of desktop window. 
	makeResizable(dw);

	// Position desktop window. 
	positionDesktopWindow(dw);
}

// Minimize all desktop windows. 
function minimizeAll() {
	console.log('Minimizing all windows...');

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru all desktop windows. 
	for(let dw of alldesktopwindows) {

		// Minimize desktop window. 
		dw.classList.remove('max');
		dw.classList.add('min');
	}
	console.log('DONE');
}

// Close all desktop windows. 
function closeAll() {
	console.log('Closing all windows...');

	// Get all current desktop windows. 
	let alldesktopwindows = document.querySelectorAll('div#container div.desktop div.window');

	// Go thru all desktop windows. 
	for(let dw of alldesktopwindows) {

		// Close desktop window. 
		dw.remove();
	}
	console.log('DONE');
}
