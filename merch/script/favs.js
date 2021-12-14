

/* FAVORITES */


// Update liked items in favorites drawer. 
function updateFavs() {
	console.log('Updating favorites...');

	// Add element for each liked item. 
	let result = '';
	for(id of favIds) {

		// Get product by id. 
		p = productdata[id];

		// Create fav element. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${item.productid}">

			<!-- photo -->
			<div class="photo" style="background-image:url('${p.photourl}');"></div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${p.name}</div>
				<!-- /name -->

				<!-- desc -->
				<div class="desc">${p.description}</div>
				<!-- /desc -->

				<!-- price -->
				<div class="price">${ (1*p.price).toFixed(2) }</div>
				<!-- /price -->

			</div>
			<!-- /content -->

		</div>
		<!-- /item -->`;
	}
	// console.log('result',result);

	// Get inside of cart drawer. 
	let likebox = document.querySelector('div#likebox div.inner');
	// console.log('likebox',likebox);

	// Add elements to cart drawer. 
	likebox.innerHTML = result;
}

