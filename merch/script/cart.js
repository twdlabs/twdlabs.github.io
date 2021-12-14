

// Add selected item to cart. 
function addToCart(element) {
	console.log('Add to cart:',element);

	// Get product id of selected item. 
	let id = element.getAttribute('data-productid');

	// Check if item is already in cart. 
	let alreadyInCart = false;
	let cartindex = -1;
	for (i in cartItems) {
		let item = cartItems[i];
		if(id==item.productid) {
			alreadyInCart = true;
			cartindex = i;
		}
	}

	// Add id of selected item to cart array. 
	if(alreadyInCart) cartItems[cartindex].qty++;
	else cartItems.push({productid:id,qty:1});

	// Show items in cart. 
	console.log('Cart after:',cartItems);

	// Update cart items in cart drawer. 
	updateCart();

	// Show cart drawer on page. 
	openDrawer('cartbox');
}


// Change quantity of item in cart. 
function changeCartQty(id, dq) {
	console.log('Changing cart quantity...',id);

	// Get cart item. 
	let item = getCartItemById(id);

	// Update quantity. 
	if(item) item.qty += dq;
	else console.error('Incremented item not found in cart');

	// Remove item if quantity becomes zero. 
	if(item.qty==0) removeCartItemById(item.productid);

	// Update cart items in cart drawer. 
	updateCart();

	/*****/

	// Get cart item using id.
	function getCartItemById(queryId) {
		let foundItem = undefined;
		for(key in cartItems) {
			if(queryId==cartItems[key].productid) {
				foundItem = cartItems[key];
				break;
			}
		}
		return foundItem;
	}

	// TODO: Remove from cart item with matching id. 
	function removeCartItemById(removeId) {

		// Get cart index of item. 
		let removeIndex = undefined;
		for(index in cartItems) {
			if(cartItems[index].productid==removeId) removeIndex = index;
		}

		// Remove single element at given cart index. 
		if(removeIndex>-1) cartItems.splice(removeIndex,1);
		else console.error('Invalid index of removal.');
	}
}


// Update cart items in cart drawer. 
function updateCart() {
	console.log('Updating cart...');
	
	// Sort cart items. 
	// cartItems.sort(sortNumbers);

	// Add element for each cart item. 
	let result = '';
	for(item of cartItems) {

		// Get product by id. 
		product = productdata[item.productid];

		// Create product element. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${item.productid}">

			<!-- photo -->
			<div class="photo">${ (product.photourl) ? (`<img src="${product.photourl}">`) : ('') }</div>
			<!-- /photo -->

			<!-- content -->
			<div class="content">

				<!-- name -->
				<div class="name">${product.name}</div>
				<!-- /name -->

				<!-- desc -->
				<div class="desc">${product.description}</div>
				<!-- /desc -->

			</div>
			<!-- /content -->

			<!-- quantity -->
			<div class="quantity">
				<span class="delta" onclick="changeCartQty(${item.productid},-1)">&minus;</span>
				<span class="qty">${item.qty}</span>
				<span class="delta" onclick="changeCartQty(${item.productid},1)">&plus;</span>
			</div>
			<!-- /quantity -->

		</div>
		<!-- /item -->
		`;
	}
	// console.log('result',result);

	// Get inside of cart drawer. 
	let cartbox = document.querySelector('div#cartbox div.inner');
	// console.log('cartbox',cartbox);

	// Add elements to cart drawer. 
	cartbox.innerHTML = result;

	// Scroll to top of cart. 
	cartbox.scrollTop = 0;

	/*****/

	// Sort cart items. 
	function sortNumbers(a,b) {
		return (a.productid - b.productid ) ;
	}

}
