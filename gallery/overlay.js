

// Open picture overlay popup. 
function openPicOverlay(id) {
	// console.log('id', id);

	let img = imageData[id];
	// console.log('img', img);

	// Add selected image to overlay. 
	document.querySelector('section#overlay main.main div.content').innerHTML = `<img src="pic/${img.imageurl}">`;

	// Activate like button if image in liked list. 
	if(img.liked) document.getElementById('likebtn').classList.add('active');
	else document.getElementById('likebtn').classList.remove('active');

	// List tags from selected image. 
	let tizags = 'Tags: ';
	for(let i in img.taglist) {

		// Get tag. 
		let t = img.taglist[i];

		// Add tag to list. 
		// if(i==0) tizags += t;
		// else tizags += `, ${t}`;
		tizags += `<span class="tag">${t}</span>`;
	}
	// Add list of tags to overlay. 
	document.querySelector('section#overlay main.main div.foot div.taglist').innerHTML = tizags;

	// Update overlay popup. 
	updateOverlay();

	// Show overlay on page. 
	document.getElementById('overlay').classList.add('active');

	/*****/

	// Update overlay popup. 
	function updateOverlay() {

		// Get overlay. 
		let overlay = document.getElementById('overlay');
		// Get download button in overlay. 
		let dlbtn = document.getElementById('dlbtn');
		// Get heart button in overlay. 
		let likebtn = document.getElementById('likebtn');

		// Check if id present in overlay. 
		let hasImageIdOnOverlay = overlay.hasAttribute('data-displayedimageid');

		// Get id of displayed image. 
		let id = ( hasImageIdOnOverlay ) ? ( 1*overlay.getAttribute('data-displayedimageid') ) : ( -1 );
		
		
		// Get url of displayed image for download button url. 
		let imgurl = imageData[id].imageurl;
		// console.log(`imgurl: '${imgurl}'`);
		// Set download button attributes: 'href' & 'download'. 
		dlbtn.setAttribute('download',`img${id}`);
		dlbtn.setAttribute('href',`pic/${imgurl}`);

		likebtn.addEventListener('click', clickOverlayLikeBtn);
		// Check if displayed item now liked. 
		let nowLiked = likedImageIds.includes(id);
		// Set heart button in overlay popup to appropriate initial state. 
		if(nowLiked) likebtn.classList.add('active');
		else likebtn.classList.remove('active');

		// Update user data on overlay. 
		let user = userData[0];
		document.getElementById('avatar').innerHTML = `<img src="${user.avatarurl}">`;
		document.getElementById('username').innerHTML = user.username;
		document.getElementById('followercount').innerHTML = (user.followercount) ? formatFollowerCount(user.followercount) : ('0');
	}
}

// Close picture overlay popup. 
function closePicOverlay() {

	// Get overlay. 
	let overlay = document.getElementById('overlay');

	// Hide overlay popup from page. 
	overlay.classList.remove('active');
	
	// Remove image content from overlay popup. 
	document.querySelector('section#overlay main div.content').innerHTML = '';
	
	// Remove id value from overlay popup. 
	overlay.removeAttribute('data-displayedimageid');

	// De-activate buttons in overlay popup. 
	clearOverlayBtns();

	/*****/

	// De-activate buttons in overlay popup. 
	function clearOverlayBtns() {

		// Get download button from overlay. 
		let dlbtn = document.getElementById('dlbtn');

		// Clear download button attributes: 'href' & 'download'. 
		dlbtn.setAttribute('download','');
		dlbtn.setAttribute('href','javascript:void(0)');

		// Get heart button from overlay. 
		let likebtn = document.getElementById('likebtn');
		likebtn.removeEventListener('click', clickOverlayLikeBtn);
	}
}

// Select displayed image to toggle 'like' for. 
function clickOverlayLikeBtn(event) {
	// console.log('clickOverlayLikeBtn', event.currentTarget);

	// Get id of displayed image. 
	let overlay = document.getElementById('overlay');
	let hasImageIdOnOverlay = overlay.hasAttribute('data-displayedimageid');
	let id = ( hasImageIdOnOverlay ) ? ( 1*overlay.getAttribute('data-displayedimageid') ) : ( -1 );

	// Toggle 'like' for selected image. 
	toggleImageLikeById(id);
}
