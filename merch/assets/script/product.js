

// Get search parameters from url. 
const params = new URLSearchParams(window.location.search);
console.log('window.location.search', window.location.search);
// console.log('params', params);

// Show product details on page. 
showProductDetails();


/*****/


// Show product details on page. 
function showProductDetails() {

	// Get query value from search parameters. 
	let productid = params.get('id');
	if(!productid) productid = '';
	console.log('Product ID:', productid);

	// Get product details. 
	let atHome = atRootDir;
	let product = productdata[productid];
	let photourl = `${ (atHome) ? ('') : ('../') }${product.photourl}`;
	// Show product details. 
	document.getElementById('productpic').style.backgroundImage = `url('${photourl}')`;
	document.getElementById('name').innerHTML = product.name;
	document.getElementById('rating').innerHTML = getRatingStars(product.rating.average);
	document.getElementById('retailprice').innerHTML = (1*product.exprice).toFixed(2);
	document.getElementById('dealprice').innerHTML = (1*product.price).toFixed(2);
	document.getElementById('savedamount').innerHTML = (1*product.exprice - 1*product.price).toFixed(2);
	// document.getElementById('quantity').innerHTML = xyzabcxyz;
	document.getElementById('description').innerHTML = product.description;
	// document.getElementById('xyzabcxyz').innerHTML = xyzabcxyz;
	// document.getElementById('xyzabcxyz').innerHTML = xyzabcxyz;

	/*****/

	// Get elements for star rating. 
	function getRatingStars(avgrating) {

		// Get counts for each type of star. 
		let numfulls = Math.floor(avgrating);
		let numhalfs = Math.floor((avgrating*2)%2);
		let numempties = 5-(numfulls+numhalfs);

		// Create element for star rating. 
		let result = '';
		for(let i=0;i<numfulls;i++) result += stars.full;
		for(let i=0;i<numhalfs;i++) result += stars.half;
		for(let i=0;i<numempties;i++) result += stars.empty;

		// Return elements for star rating. 
		return result;
		// console.log(result)
	}
}


// Set initial quantity. 
let quantity = 1;
document.getElementById('quantity').innerHTML = quantity;

function changeQty(dx) {
	// Change quantity by given differential. 
	quantity += dx;

	// Undo change if it goes below one. 
	if(quantity<1) quantity -= dx;

	// Uodate quantity displayed on page. 
	document.getElementById('quantity').innerHTML = quantity;
}
