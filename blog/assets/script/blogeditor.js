


// Get hero section. 
const herosection = document.querySelector('div#container section.hero');

// Get banner upload. 
const bannerUpload = document.querySelector('div#container section.hero main.grid input.bannerupload');


/*****/


// Activate banner upload. 
activateBannerUpload();


/*****/


// Activate banner upload. 
function activateBannerUpload() {

	// 
	bannerUpload.addEventListener('input',saveNewBanner);
	bannerUpload.addEventListener('change',saveNewBanner);

	/****/

	// TODO: Save new banner. 
	function saveNewBanner(event) {
		console.log(event.target, event.target.value,event.target.files);

		// 
		// herosection.style.backgroundImage = '';
	}
}
