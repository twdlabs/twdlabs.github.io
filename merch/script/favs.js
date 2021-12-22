

/* FAVORITES */


// Update liked items in favorites drawer. 
function updateFavs() {
	console.log('Updating favorites...');

	// Add element for each liked item. 
	let result = '';
	let total = userdata[currentuserid].favIds.length;
	for(let id of userdata[currentuserid].favIds) {

		// Get product by id. 
		let product = productdata[id];

		// Create fav element. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${id}" title="id: ${id}">

			<!-- photo -->
			<a class="photo" href="javascript:void(0)" style="background-image:url('${product.photourl}');"></a>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${product.name}</div>
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
function toggleFav(favbtn) {
	console.log('Toggle favorite:',favbtn);

	// Get product id of selected item. 
	let id = 1*favbtn.getAttribute('data-productid');

	// Assume initially that selected item is not in favorites list. 
	let alreadyFaved = false;
	let favindex = -1;

	// Check if item is already in favorites list. 
	for (let i in userdata[currentuserid].favIds) {

		// Get fav item id. 
		let favId = userdata[currentuserid].favIds[i];

		// Check for matching id btwn fav item and newly liked item. 
		if(id==favId) {
			alreadyFaved = true;
			favindex = i;
			break;
		}
	}

	// Remove selected item from favs list if already added. 
	if(alreadyFaved) {
		// Remove id of selected item from list. 
		removeFavItemById(id);

		// De-activate selected fav button. 
		favbtn.classList.remove('active');
	}
	// Add selected item to favs list if not already added. 
	else {
		// Add id of selected item to list. 
		userdata[currentuserid].favIds.unshift(id);

		// Activate selected fav button. 
		favbtn.classList.add('active');
	
		// Show favorites drawer on page. 
		setTimeout(function() {
			toggleDrawer('likebox');
		}, 500);
	}

	// Show liked items in favorites drawer. 
	console.log('Favs after:',userdata[currentuserid].favIds);
	updateFavs();

	/*****/

	// Remove id from fav list at given index. 
	function removeFavItemById(queryId) {

		// Get favs index of item to be removed. 
		let indexOfDeletion = undefined;
		for(index in userdata[currentuserid].favIds) {

			// Check for matching id btwn favs item and item to be deleted. 
			if(userdata[currentuserid].favIds[index]==queryId) {
				indexOfDeletion = index;
			}
		}

		// Remove single favs item at given index. 
		if(indexOfDeletion>-1) userdata[currentuserid].favIds.splice(indexOfDeletion,1);

		// Notify if index invalid. 
		else console.error('Invalid index of removal.');
	}
}


// Remove item from favs list (by id). 
function removeFavItemById(queryId) {
	console.log('Removing item with product id:',queryId);
	// console.log('favIds (before)',userdata[currentuserid].favIds);

	// Get favs list index of item to be removed. 
	let indexOfDeletion = undefined;
	for(index in userdata[currentuserid].favIds) {

		let favId = userdata[currentuserid].favIds[index];

		// Check for matching id btwn favs list item and item to be deleted. 
		if(favId==queryId) {
			indexOfDeletion = index;
		}
	}

	// Remove single liked item at given index. 
	if(indexOfDeletion>-1) userdata[currentuserid].favIds.splice(indexOfDeletion,1);
	// Notify if index invalid. 
	else console.error('Invalid index of removal.');
	// console.log('favIds (after)',userdata[currentuserid].favIds);

	// Update liked items in favs list drawer. 
	updateFavs();
}

