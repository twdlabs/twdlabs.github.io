

/* CART */


// Update cart items in cart drawer. 
function updateCart() {
	console.log('Updating cart...');
	
	// Sort cart items. 
	// userdata[currentuserid].cartItems.sort(sortNumbers);

	// Add elements and prices for cart items. 
	let result = '';
	let total = 0;
	for(item of userdata[currentuserid].cartItems) {

		// Get product by id. 
		product = productdata[item.productid];

		// Create product element. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${item.productid}">
	
			<!-- deleter -->
			<div class="deleter" onclick="removeCartItemById(${item.productid});">&times;</div>
			<!-- /deleter -->

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
				<div class="price">${ (1*item.qty*product.price).toFixed(2) }</div>
				<!-- /price -->

			</div>
			<!-- /content -->

			<!-- quantity -->
			<div class="quantity">
			
				<!-- delta -->
				<span class="delta" onclick="changeCartQty(${item.productid},1)">&plus;</span>
				<!-- /delta -->

				<!-- qty -->
				<span class="qty">${item.qty}</span>
				<!-- /qty -->
				
				<!-- delta -->
				<span class="delta" onclick="changeCartQty(${item.productid},-1)">&minus;</span>
				<!-- /delta -->
				
			</div>
			<!-- /quantity -->

		</div>
		<!-- /item -->
		`;

		// Add to cart total. 
		total += 1*item.qty*product.price;
	}
	// console.log('result',result);

	// Get inside of cart drawer. 
	let cartbox = document.querySelector('div#cartbox div.inner');
	// Add elements to cart drawer. 
	cartbox.innerHTML = result;

	// Get cart total box. 
	let carttotalbox = document.getElementById('carttotal');
	// Add total to cart total box. 
	carttotalbox.innerHTML = (1*total).toFixed(2);

	// Scroll to top of cart. 
	cartbox.scrollTop = -Infinity;

	/*****/

	// Sort cart items. 
	function sortNumbers(a,b) {
		return (a.productid - b.productid ) ;
	}

}


// Add selected item to cart. 
function addToCart(element) {
	console.log('Add to cart:',element);

	// Get product id of selected item. 
	let id = 1*element.getAttribute('data-productid');

	// Assume initially that selected item is not in cart. 
	let alreadyInCart = false;
	let cartindex = -1;
	
	// Check if item is already in cart. 
	for (i in userdata[currentuserid].cartItems) {

		// Get cart item. 
		let item = userdata[currentuserid].cartItems[i];

		// Check for matching id btwn cart item and newly added item. 
		if(id==item.productid) {
			alreadyInCart = true;
			cartindex = i;
			break;
		}
	}

	// Increment quantity of selected item if already in cart. 
	if(alreadyInCart) {
		userdata[currentuserid].cartItems[cartindex].qty++;
	}
	// Add selected item to cart if not already added. 
	else {
		userdata[currentuserid].cartItems.unshift({
			productid:id,
			qty:1
		});
	}
	
	// Show cart drawer on page. 
	setTimeout(function() {
		toggleDrawer('cartbox');
	}, 500);

	// Show cart items in cart drawer. 
	console.log('Cart after:',userdata[currentuserid].cartItems);
	updateCart();
}


// Change quantity of item in cart. 
function changeCartQty(id, dq) {
	console.log(`Adding ${dq} for cart item with product id:`,id);

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

		// Inititalize space for found cart item. 
		let foundItem = undefined;

		// Search for cart item. 
		for(key in userdata[currentuserid].cartItems) {

			// Get cart item. 
			let item = userdata[currentuserid].cartItems[key];

			// Check for matching id btwn cart item and searched item. 
			if(queryId==item.productid) {
				foundItem = item;
				break;
			}
		}

		// Return what is found. 
		return foundItem;
	}
}


// Remove item from cart (by id). 
function removeCartItemById(queryId) {
	console.log('Removing item with product id:',queryId);

	// Get cart index of item to be removed. 
	let indexOfDeletion = undefined;
	for(index in userdata[currentuserid].cartItems) {

		// Check for matching id btwn cart item and item to be deleted. 
		if(userdata[currentuserid].cartItems[index].productid==queryId) {
			indexOfDeletion = index;
		}
	}

	// Remove single cart item at given index. 
	if(indexOfDeletion>-1) userdata[currentuserid].cartItems.splice(indexOfDeletion,1);
	// Notify if index invalid. 
	else console.error('Invalid index of removal.');

	// Update cart items in cart drawer. 
	updateCart();
}

