


// Define initial duration of toast message. 
const default_toastduration = 12000;
// Define animation time. 
const dt = 100;

// Initialize toast count. 
let toastcount = 0;

// Get toaster inputs. 
const displaybtns = document.querySelectorAll('div#container div.showbtn');
const inputcontent = document.querySelector('div#container main.main input.message');
const inputduration = document.querySelector('div#container main.main input.duration');

// Get toaster list. 
const toasterlist = document.querySelector('div#container ul.toasterlist');


/*****/


// Activate toaster. 
activateToaster();


/*****/


// Activate toaster. 
function activateToaster() {

	// Enable toaster control buttons. 
	for(btn of displaybtns) {
		btn.addEventListener('click',chooseNewToast);
	}

	/****/
	
	// Start showing new toast. 
	function chooseNewToast(event) {
	
		// Get selected display button. 
		let selectedbtn = event.currentTarget;
		// Get id of selected message type. 
		let newmsgtypeid = selectedbtn.getAttribute('data-msgtypeid');
		
		// Add new toast item to page. 
		popNewToast(newmsgtypeid,inputcontent.value,inputduration.value);
	}
}

// Add new toast item to page. 
function popNewToast(newmsgtypeid,toastmessage,toastduration) {

	// Get next toast index. 
	let newtoastindex = getNextToastIndex();
	
	// Add new toast message. 
	addNewToast(newtoastindex,newmsgtypeid,toastmessage);
	// Show new toast message. 
	showNewToast(newtoastindex);

	/****/

	// Get next toast index. 
	function getNextToastIndex() {

		// Increment toast count. 
		toastcount++;

		// Return new toast index. 
		return toastcount;
	}

	// Add new toast message. 
	function addNewToast(toastindex,msgtypeid,toastmessage) {
	
		// Get message type. 
		let msgtype = msgTypeData[msgtypeid];
	
		// Compile new toast layout. 
		let newtoastlayout = `
		<!-- toastitem -->
		<li class="toastitem gone" id="toast${toastindex}" style="--i:${toastindex}; --toastduration:${toastduration}s">

			<!-- toast -->
			<div class="toast ${msgtypeid}">

				<!-- image -->
				<div class="image">
	
					<!-- icon -->
					<svg class="icon ${msgtype.icontag}" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						${ iconData[msgtype.icontag] }
					</svg>
					<!-- /icon -->

				</div>
				<!-- /image -->

				<!-- message -->
				<div class="message">
	
					<!-- head -->
					<h1 class="head">${ msgtype.header }</h1>
					<!-- /head -->
		
					<!-- caption -->
					<span class="caption">${ toastmessage || msgtype.defaultmessage }</span>
					<!-- /caption -->

				</div>
				<!-- /message -->

				<!-- controls -->
				<div class="controls">

					<!-- closebtn -->
					<div class="closebtn btn">

						<!-- icon -->
						<span class="icon">&times;</span>
						<!-- /icon -->

					</div>
					<!-- /closebtn -->

				</div>
				<!-- /controls -->
				
			</div>
			<!-- /toast -->

		</li>
		<!-- /toastitem -->`;

		// Add new toast to on-page list. 
		toasterlist.insertAdjacentHTML('afterbegin', newtoastlayout );
	}

	// Show new toast message. 
	function showNewToast(toastindex) {

		// Get element for new toast item. 
		let newtoastitem = document.getElementById(`toast${toastindex}`);
		// console.log('newtoastitem:',newtoastitem);
	
		// Reveal new toast item (almost immediately, allowing time for prior DOM processing). 
		setTimeout(slideToastIn,dt);
		// slideToastIn();

		// Set toast timer (for outer window animation). 
		setTimeout(slideToastOut, toastduration*1000);

		// Enable close button for new toast. 
		let newtoastclosebtn = newtoastitem.querySelector('div.closebtn')
		newtoastclosebtn.addEventListener('click',slideToastOut);

		/***/
	
		// Reveal selected toast item. 
		function slideToastIn() {
			// Allow view of new toast message. 
			newtoastitem.classList.add('active');
			newtoastitem.classList.remove('gone');
		}

		// Close selected toast item. 
		function slideToastOut() {
		
			// Hide selected toast item. 
			newtoastitem.classList.remove('active');
		
			// Remove selected toast item (after delay). 
			setTimeout(removeToast,4000);

			/**/
		
			// Remove selected toast item. 
			function removeToast() {
				// Remove from page. 
				newtoastitem.remove();
			}
		}
	}
}
