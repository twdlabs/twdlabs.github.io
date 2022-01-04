

/* CART */


// Update cart items in cart drawer. 
function updateCart() {
	console.log('Updating cart...');

	// Initialize results. 
	let result = '';
	let subtotal = 0;
	let cartquantity = 0;

	// Get user's cart data. 
	let cartlist = ( isLoggedIn() ) ? ( userdata[currentuserid].cartItems ) : ( [] );

	// Go thru each cart item. 
	for(item of cartlist) {

		// Get product by id. 
		product = productdata[item.productid];

		// Add item's page elements. 
		result += `
		<!-- item -->
		<div class="item" data-productid="${item.productid}" title="id: ${item.productid}">

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
	
			<!-- deleter -->
			<div class="deleter" onclick="removeCartItemById(${item.productid});">&times;</div>
			<!-- /deleter -->

		</div>
		<!-- /item -->
		`;

		// Add item price to cart subtotal. 
		subtotal += 1*item.qty*product.price;
		cartquantity += 1*item.qty
	}
	// console.log('result',result);


	// Get inside of cart drawer. 
	let cartbox = document.querySelector('div#cartbox div.inner');

	// Add elements to cart drawer. 
	cartbox.innerHTML = result;


	// Get cart subtotal box. 
	let cartsubtotalbox = document.getElementById('cartsubtotal');

	// Add subtotal to cart subtotal box. 
	cartsubtotalbox.innerHTML = (1*subtotal).toFixed(2);


	// Get cart subtotal box. 
	let cartquantitybox = document.getElementById('cartquantity');

	// Add subtotal to cart subtotal box. 
	cartquantitybox.innerHTML = (1*cartquantity) + ( (cartquantity==1) ? (' item') : (' items') );


	// Scroll to top of cart. 
	// cartbox.scrollTop = -Infinity;
}


// Add selected item to cart. 
function addToCart(element) {
	console.log('Add to cart:',element);

	// Get user's cart data. 
	let cartlist = ( isLoggedIn() ) ? ( userdata[currentuserid].cartItems ) : ( [] );

	// Get product id of selected item. 
	let id = 1*element.getAttribute('data-productid');

	// Assume initially that selected item is not in cart. 
	let alreadyInCart = false;
	let cartindex = -1;
	
	// Check if item is already in cart. 
	for (i in cartlist) {

		// Get cart item. 
		let item = cartlist[i];

		// Check for matching id btwn cart item and newly added item. 
		if(id==item.productid) {
			alreadyInCart = true;
			cartindex = i;
			break;
		}
	}

	// Increment quantity of selected item if already in cart. 
	if(alreadyInCart) {
		cartlist[cartindex].qty++;
	}
	// Add selected item to cart if not already added. 
	else {
		cartlist.unshift({
			productid:id,
			qty:1
		});
	}
	
	// Show cart drawer on page. 
	setTimeout(function() {
		toggleDrawer('cartbox');
	}, 500);

	// Show cart items in cart drawer. 
	console.log('Cart after:',cartlist);
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

		// Get user's cart data. 
		let cartlist = ( isLoggedIn() ) ? ( userdata[currentuserid].cartItems ) : ( [] );

		// Inititalize space for found cart item. 
		let foundItem = undefined;

		// Search for cart item. 
		for(index in cartlist) {

			// Get cart item. 
			let item = cartlist[index];

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

	// Get user's cart data. 
	let cartlist = ( isLoggedIn() ) ? ( userdata[currentuserid].cartItems ) : ( [] );

	// Get cart index of item to be removed. 
	let indexOfDeletion = undefined;
	for(index in cartlist) {

		// Check for matching id btwn cart item and item to be deleted. 
		if(cartlist[index].productid==queryId) {
			indexOfDeletion = index;
		}
	}

	// Remove single cart item at given index. 
	if(indexOfDeletion>-1) cartlist.splice(indexOfDeletion,1);
	// Notify if index invalid. 
	else console.error('Invalid index of removal.');

	// Update cart items in cart drawer. 
	updateCart();
}

