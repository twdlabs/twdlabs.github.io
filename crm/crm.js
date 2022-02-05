

// 
console.log('orderData',orderData.length,orderData);

// Get total number of items. 
let totalNumItems = orderData.length;
document.getElementById('totalNumItems').innerHTML = totalNumItems;

// Define number of items per page. 
let itemsPerPage = 10;

// Get total number of pages. 
let totalNumPages = Math.ceil(totalNumItems/itemsPerPage);
document.getElementById('totalNumPages').innerHTML = totalNumPages;

// Initialize page index. 
let numPagesPast = 1;
document.getElementById('currentPageNum').value = numPagesPast + 1;

// Get current page limits. 
let firstPosition = (numPagesPast*itemsPerPage) + 1;
let lastPosition = (totalNumItems && totalNumItems<itemsPerPage) ? (totalNumItems) : ( (numPagesPast*itemsPerPage) + itemsPerPage ) ;
document.getElementById('firstPosition').innerHTML = firstPosition;
document.getElementById('lastPosition').innerHTML = lastPosition;

`Showing { (totalNumItems) ? ( firstPosition+'-'+ lastPosition ) : (0) } of { (numItems) ? formatNumber(numItems) : 0 }`;


// Add order data to page. 
addOrders();

/*****/

// Add order data to page. 
function addOrders() {
	
	// Initiate result. 
	let result = '';

	// Begin header row. 
	result += `
	<!-- row -->
	<div class="row head">`;
	for(let label of labels) {
		result += `
		<!-- cell -->
		<div class="cell">${label}</div>
		<!-- /cell -->`;
	}
	// End header row. 
	result += `
	</div>
	<!-- /row -->`;

	// 
	// for(let item of orderData) {
	for(let index=(numPagesPast*itemsPerPage) ; index<(numPagesPast+1)*itemsPerPage ; index++) {
		let item = orderData[index]
		result += `
		<!-- row -->
		<div class="row">

			<!-- cell -->
			<div class="cell">${item.orderid}</div>
			<!-- /cell -->

			<!-- cell -->
			<div class="cell">${item.productid}</div>
			<!-- /cell -->

			<!-- cell -->
			<div class="cell">${item.unitprice}</div>
			<!-- /cell -->

			<!-- cell -->
			<div class="cell">${item.quantity}</div>
			<!-- /cell -->

			<!-- cell -->
			<div class="cell">${item.discount}</div>
			<!-- /cell -->

		</div>
		<!-- /row -->`;
	}

	// 
	document.querySelector('div#container main article#orders div.table').innerHTML = result;
}

