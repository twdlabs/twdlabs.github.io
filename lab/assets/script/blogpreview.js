


// Activate blog previews. 
activateBlogPreviews();


/*****/


// Activate blog previews. 
function activateBlogPreviews() {

	// Disregard unless in archive section of library page (where previews not present). 
	if(!archive.block) return;

	// Access loaded blog post cards. 
	let blogpostcards = document.querySelectorAll('div#container section.blog div.grid div.body div.posts ul.pagelist li.postpage ul.postlist li.postcard');
	// console.log('Blog post cards:',blogpostcards);
		
	// Go thru blog post cards. 
	for(let card of blogpostcards) {

		// Activate mouse events for given card (without up/down propagation). 
		card.addEventListener('mouseenter',openPreview);
		card.addEventListener('mouseleave',closePreview);

		// Activate mouse events for given card (with up/down propagation). 
		// card.addEventListener('mouseover',openPreview);
		// card.addEventListener('mouseout',closePreview);
	}

	/****/
	
	// Open preview of blog post. 
	function openPreview(event) {
		// console.log('Opening preview...',event.target);

		// Get card for selected post. 
		let selectedcard = event.currentTarget;
		// Get project id of selected post. 
		let projectid = selectedcard.getAttribute('data-projectid');

		// Get card's preview panel. 
		let previewpanel = selectedcard.querySelector('div.preview');

		// Add preview iframe to preview panel.
		previewpanel.insertAdjacentHTML('afterbegin', createPreviewPanel(projectid) );
	}

	// Close preview of blog post. 
	function closePreview(event) {
		// console.log('Closing preview.',event.target);

		// Get card for selected post. 
		let selectedcard = event.currentTarget;

		// Get preview panel of selected card. 
		let previewpanel = selectedcard.querySelector('div.preview');
		// console.log('previewpanel:',previewpanel);
		// Get iframe inside preview panel. 
		// let previewpaneliframe = previewpanel.querySelector('iframe.preview');
		// console.log('previewpaneliframe:',previewpaneliframe);

		// Remove iframe from preview panel.
		previewpanel.innerHTML = '';
		// previewpaneliframe.remove();
	}
}
