


// Get components of overlay. 
const overlay = {
	// Get overlay container. 
	box: document.querySelector('div#container section.overlay'),
	// Get overlay body. 
	body: document.querySelector('div#container section.overlay div.grid div.body'),
	// Get comment box. 
	commentbox: document.querySelector('div#container section.overlay div.grid aside#commentbox'),
	// Get heart button. 
	likebtn: document.querySelector('div#container section.overlay div.grid div.head div.btnpanel a.btn#likebtn'),
	// Get download button. 
	dlbtn: document.querySelector('div#container section.overlay div.grid div.head div.btnpanel a.btn#dlbtn'),
};


/*****/


// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = ()=>{
// 	if(this.readyState==4 && this.status==200) ;
// };
// xhttp.open('GET','overlay.html');
// xhttp.send();


/*****/


// Open picture overlay popup. 
function openPicOverlay(id) {
	// console.log('id', id);

	let img = galleryMediaData[id];
	// console.log('img', img);

	// Add selected image to overlay. 
	overlay['body'].innerHTML = `<img class="media" src="${ img['fullimageurl'] }">`;

	// Activate like button if image in liked list. 
	if(img.liked) overlay['likebtn'].classList.add('active');
	else overlay['likebtn'].classList.remove('active');

	// Initialize tag list layout for given image. 
	let taglistlayout = '';
	// List tags from selected image. 
	for(let tag of img['taglist']) {
		// Add tag layout to list. 
		taglistlayout += `<li class="tag">${tag}</li>`;
	}
	// Get destination for xyz. 
	let imagetaglistdestination = document.querySelector('div#container section.overlay div.grid div.foot ul.taglist')
	// Add list of tags to overlay. 
	imagetaglistdestination.innerHTML = taglistlayout;

	// Update overlay popup. 
	updateOverlayData();

	// Show overlay on page. 
	overlay['box'].classList.add('active');

	/*****/

	// Update overlay popup. 
	function updateOverlayData() {

		// Check if id present in overlay. 
		let hasMediaIdOnOverlay = overlay['box'].hasAttribute('data-displayedmediaid');
		// Get id of displayed image. 
		let id = ( hasMediaIdOnOverlay ) ? ( 1 * overlay['box'].getAttribute('data-displayedmediaid') ) : ( -1 );


		// Get url of displayed image for download button url. 
		let imgurl = galleryMediaData[id]['fullimageurl'];
		// console.log(`imgurl: '${imgurl}'`);

		// Set file name for download button. 
		overlay['dlbtn'].setAttribute('download',`img${id}`);
		// Set url for download button. 
		overlay['dlbtn'].setAttribute('href',imgurl);

		// Activate heart button in overlay. 
		overlay['likebtn'].addEventListener('click', clickOverlayLikeBtn);
		// Check if displayed item now liked. 
		let nowLiked = userData[currentuserid]['likedMediaIds'].includes(id);
		// Set heart button in overlay popup to appropriate initial state. 
		if(nowLiked) overlay['likebtn'].classList.add('active');
		else overlay['likebtn'].classList.remove('active');

		// Get destination for avatar. 
		// let avatardestination = document.querySelector('div#container section.overlay div.grid div.head a.profile div.avatar');
		let avatarimgdestination = document.querySelector('div#container section.overlay div.grid div.head a.profile div.avatar img');
		// Get destination for username. 
		let usernamedestination = document.querySelector('div#container section.overlay div.grid div.head a.profile div.details div.username');
		// Get destination for follower count. 
		let followercountdestination = document.querySelector('div#container section.overlay div.grid div.head a.profile div.details div.followercount');

		// Update user data on overlay. 
		let user = userData[currentuserid];
		// avatardestination.innerHTML = `<img src="${ user['avatarurl'] }">`;
		avatarimgdestination.src = user['avatarurl'];
		usernamedestination.innerHTML = user['username'];
		followercountdestination.innerHTML = ( user['followercount'] ) ? formatFollowerCount( user['followercount'] ) : ('0');
	}
}

// Close picture overlay popup. 
function closePicOverlay() {

	// Hide overlay popup from page. 
	overlay['box'].classList.remove('active');

	// Remove id value from overlay popup. 
	overlay['box'].removeAttribute('data-displayedmediaid');

	// Remove image content from overlay popup. 
	overlay['body'].innerHTML = '';

	// De-activate buttons in overlay popup. 
	clearOverlayBtns();

	// De-activate comments section in overlay popup. 
	overlay['commentbox'].classList.remove('active');

	/*****/

	// De-activate buttons in overlay popup. 
	function clearOverlayBtns() {

		// Clear download button attributes: 'href' & 'download'. 
		overlay['dlbtn'].setAttribute('download','');
		overlay['dlbtn'].setAttribute('href','javascript:void(0)');

		// De-activate heart button in overlay. 
		overlay['likebtn'].removeEventListener('click', clickOverlayLikeBtn);
	}
}
