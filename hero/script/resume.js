


// Import work experience. 
importExperience();


/*****/


// Import work experience to resume section of page. 
function importExperience() {

	// Create result html. 
	let result = '';
	for(let h=0 ; h<experience.length ; h++) {
		// 
		let item = experience[h];

		// Add from list of experiences. 
		result += `
		<!-- details -->
		<div class="details">

			<!-- title -->
			<h4 class="title">${item.jobtitle}</h4>
			<!-- /title -->

			<!-- copy -->
			<p class="copy">
				<span class="company">${item.employer}</span><span class="comma">,</span>`;

				if(item.address) result += `
				<span class="location">${item.address}</span><span class="comma">,</span>`;

				result += `
				<span class="location">${item.city}</span>
			</p>
			<!-- /copy -->

			<!-- time -->
			<div class="time">${item.startdate} - ${item.enddate}</div>
			<!-- /time -->

			<ul>`;

			// Add from duties list from experience. 
			for(let i=0 ; i<item.duties.length ; i++) {
				result += `<li>${item.duties[i]}</li>`
			}

			result += `
			</ul>

		</div>
		<!-- /details -->`;
	}
	// console.log('result',result);

	// 
	document.getElementById('experience').innerHTML = result;
}
