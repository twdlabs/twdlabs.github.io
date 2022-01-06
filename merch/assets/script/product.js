
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
