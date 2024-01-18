

/* FAVORITES */


// Update liked items in favorites drawer. 
function updateFavs() {
	console.log('Updating favorites...');

	// Initialize result. 
	let result = '';

	// Get user's favs data. 
	let favsidlist = ( isLoggedIn() ) ? ( userdata[currentuserid].favIds ) : ( [] );

	// Go thru each liked item. 
	for(let id of favsidlist) {

		// Get product by id. 
		let product = productdata[id];

		// Get product photo url. 
		let photourl = getRelativeUrl(product.photourl);

		// Add item's page elements. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${id}" title="id: ${id}">

			<!-- photo -->
			<a class="photo" href="javascript:void(0)" style="background-image:url('${photourl}');"></a>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${product.productname}</div>
				<!-- /name -->

				<!-- desc -->
				<div class="desc">${product.description}</div>
				<!-- /desc -->

				<!-- price -->
				<div class="price">${ (1*product.price).toFixed(2) }</div>
				<!-- /price -->

			</div>
			<!-- /content -->
	
			<!-- deleter -->
			<div class="deleter" onclick="removeFavItemById(${id});">&times;</div>
			<!-- /deleter -->

		</div>
		<!-- /item -->`;
	}
	let total = favsidlist.length;
	// console.log('result',result);

	// Get inside of favs drawer. 
	let likebox = document.querySelector('div#likebox div.inner');
	// Add elements to favs drawer. 
	likebox.innerHTML = result;

	// Get favs total box. 
	let favstotalbox = document.getElementById('favstotal');
	// Add total to favs total box. 
	favstotalbox.innerHTML = (1*total);
}


// Toggle selected item in favorites. 
function toggleFav(item) {
	console.log('Toggle favorite:',item);

	// Get user's favs data. 
	let favsidlist = ( isLoggedIn() ) ? ( userdata[currentuserid].favIds ) : ( [] );

	// Get product id of selected item. 
	let id = 1*item.getAttribute('data-productid');

	// Assume initially that selected item is not in favorites list. 
	let alreadyFaved = false;

	// Check if item is already in favorites list. 
	for (let favId of favsidlist) {

		// Check for matching id btwn fav item and newly liked item. 
		if(id==favId) {
			alreadyFaved = true;
			break;
		}
	}

	// Remove selected item from favs list if already added. 
	if(alreadyFaved) {
		// Remove id of selected item from list. 
		removeFavItemById(id);

		// De-activate selected fav button. 
		item.classList.remove('liked');
	}
	// Add selected item to favs list if not already added. 
	else {
		// Add id of selected item to list. 
		favsidlist.unshift(id);

		// Activate selected fav button. 
		item.classList.add('liked');
	
		// Show favorites drawer on page. 
		setTimeout(function() {
			toggleDrawer('likebox');
		}, 500);
	}

	// Show liked items in favorites drawer. 
	console.log('Favs after:',favsidlist);
	updateFavs();

	/*****/

	// Remove id from fav list at given index. 
	function removeFavItemById(queryId) {
		console.log('Removing item with product id:',queryId);

		// Get favs index of item to be removed. 
		let indexOfDeletion = undefined;
		for(index in favsidlist) {

			// Check for matching id btwn favs item and item to be deleted. 
			if(favsidlist[index]==queryId) {
				indexOfDeletion = index;
			}
		}

		// Remove single favs item at given index. 
		if(indexOfDeletion>-1) favsidlist.splice(indexOfDeletion,1);

		// Notify if index invalid. 
		else console.error('Invalid index of removal.');
	}
}


// Remove item from favs list (by id). 
function removeFavItemById(queryId) {
	console.log('Removing item with product id:',queryId);

	// Get user's favs data. 
	let favsidlist = ( isLoggedIn() ) ? ( userdata[currentuserid].favIds ) : ( [] );
	// console.log('favIds (before)',favsidlist);

	// Get favs list index of item to be removed. 
	let indexOfDeletion = undefined;
	for(index in favsidlist) {

		let favId = favsidlist[index];

		// Check for matching id btwn favs list item and item to be deleted. 
		if(favId==queryId) {
			indexOfDeletion = index;
		}
	}

	// Remove single liked item at given index. 
	if(indexOfDeletion>-1) favsidlist.splice(indexOfDeletion,1);
	// Notify if index invalid. 
	else console.error('Invalid index of removal.');
	// console.log('favIds (after)',favsidlist);

	// Update liked items in favs list drawer. 
	updateFavs();
}

