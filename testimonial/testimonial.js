

// Initialize index of current testimonial. 
let currentIndex = 0;

// Fill data. 
fillData();


/*****/


// Fill data. 
function fillData() {

	// Show testimonials from database. 
	let result = '';
	for(let item of testimonialData) {
		result += createTestimonial(item);
	}
	result += createTestimonial(testimonialData[0]);
	document.querySelector('div.contentbox div.inner').innerHTML = result;

	/*****/

	function createTestimonial(testimonialitem) {
		
		// Get client's data. 
		let client = userData[testimonialitem.clientid];
		return `
		<!-- item -->
		<div class="item">
	
			<!-- head -->
			<div class="head">
	
				<!-- avatar -->
				<div class="avatar">${ (client.avatarurl) ? (`<img src="${ /* getRelativeUrl */(client.avatarurl) }" alt="">`) : ('') }</div>
				<!-- /avatar -->
	
				<!-- remainder -->
				<div class="remainder">
	
					<!-- name -->
					<h2 class="name">${client.fname} ${client.lname}</h2>
					<!-- /name -->
	
					<!-- position -->
					<div class="position">${client.position}</div>
					<!-- /position -->
	
				</div>
				<!-- /remainder -->
	
			</div>
			<!-- /head -->
	
			<!-- content -->
			<div class="content">
	
				<!-- textcopy -->
				<p class="textcopy">${testimonialitem.testimonialcontents}</p>
				<!-- /textcopy -->
	
			</div>
			<!-- /content -->
	
		</div>
		<!-- /item -->`;
	}
}

// Move to adjacent testimonial. 
function deltaIndex(n) {

	// Increment current index. 
	currentIndex += n;

	// Create circularity of testimonial data. 
	if(currentIndex>=testimonialData.length) {
		currentIndex = 0;
	}
	else if(currentIndex<0) {
		currentIndex = testimonialData.length - 1;
	}

	// Display appropriate testimonial. 
	let dy = (currentIndex) ? (-100*currentIndex) : (-100*testimonialData.length);
	document.querySelector('div.contentbox div.inner').style.transform = `translateY(${dy}%)`;

	console.log('currentIndex:',currentIndex);
}
