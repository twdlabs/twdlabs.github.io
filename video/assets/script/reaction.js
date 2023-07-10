


// Activate video reaction buttons. 
activateReactBtns();


/*****/


// Activate video reaction buttons. 
function activateReactBtns() {

	// Get all reaction buttons. 
	// let allreactbtns = document.querySelectorAll('main.player div.reaction div.btn');

	// Attach function to all reaction buttons. 
	// for(let btn of allreactbtns) {
	// 	btn.addEventListener('click',toggleVideoReaction);
	// }

	// Activate like and dislike buttons. 
	likebtn.addEventListener('click',likeVideo);
	dislikebtn.addEventListener('click',dislikeVideo);

	// TODO: Activate share button. 
	sharebtn.addEventListener('click',toggleVideoReaction);

	// TODO: Activate download button. 
	downloadbtn.addEventListener('click',toggleVideoReaction);

	// TODO: Activate save button. 
	savebtn.addEventListener('click',toggleVideoReaction);

	/*****/

	// Toggle video reaction. 
	function toggleVideoReaction(event) {
		// console.log('Reacting to video with btn:', event.currentTarget);
		let btn = event.currentTarget;
		btn.classList.toggle('active');
	}

	// Add 'like' to video. 
	function likeVideo(event) {

		// TODO: Remove obsolete video reaction from database. 
		let notRemovedYet = dislikedIds.includes(currentvideoid);
		if(notRemovedYet) dislikedIds.length;

		// De-activate 'dislike' button. 
		dislikebtn.classList.remove('active');

		// Save video like reaction to database. 
		let alreadySaved = likedIds.includes(currentvideoid);
		if(!alreadySaved) userDataList[currentuserid].likedIds.push(currentvideoid);

		// Activate 'like' button. 
		likebtn.classList.add('active');
	}

	// Add 'dislike' to video. 
	function dislikeVideo(event) {

		// TODO: Remove obsolete video reaction from database. 
		let notRemovedYet = likedIds.includes(currentvideoid);
		if(notRemovedYet) likedIds.length;

		// De-activate 'like' button. 
		likebtn.classList.remove('active');

		// Save video dislike reaction to database. 
		let alreadySaved = dislikedIds.includes(currentvideoid);
		if(!alreadySaved) userDataList[currentuserid].dislikedIds.push(currentvideoid);

		// Activate 'dislike' button. 
		dislikebtn.classList.add('active');
	}
}