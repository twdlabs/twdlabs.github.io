

// 
let result = '';

// 
for(let group of datasources) {

	// Create row. 
	result += `
	<!-- row -->
	<div class="row">`;

	// Create row. 
	let cards = '';
	for(let item of group) {

		// 
		cards += `
		<!-- card -->
		<div class="card">

			<!-- icon -->
			<img class="icon" src="${item.imageurl}" alt="${item.name}">
			<!-- /icon -->

			<!-- caption -->
			<span class="caption">${item.name}</span>
			<!-- /caption -->

		</div>
		<!-- /card -->`;
	}

	// 
	result += cards;
	result += cards;

	// 
	result += `
	</div>
	<!-- /row -->`;
}

// 
document.getElementById('main').innerHTML = result;
