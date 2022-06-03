
let result = '';
for(let i in teamdata) {

	// Get data for given team member. 
	let employee = teamdata[i];
	
	// Create card for given team member. 
	result += `
	<!-- card -->
	<div class="card" style="--delay:${i}">

		<!-- avatar -->
		<img class="avatar" src="${ employee.avatarurl }" alt="avatar">
		<!-- /avatar -->

		<!-- details -->
		<div class="details">

			<!-- name -->
			<div class="name">${ employee.name }</div>
			<!-- /name -->

			<!-- title -->
			<div class="title">${ employee.job }</div>
			<!-- /title -->

		</div>
		<!-- /details -->

		<!-- followbtn -->
		<a class="followbtn" href="javascript:void(0)">Follow</a>
		<!-- /followbtn -->

	</div>
	<!-- /card -->`;
}
document.querySelector('main.main').innerHTML = result;
