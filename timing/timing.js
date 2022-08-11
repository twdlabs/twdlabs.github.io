

// Get destination on page. 
let itemlist = document.querySelector('div#container main.main ul.itemlist');

// Initialize result. 
let result = '';

// Add to result. 
for(let tfname of timingFunctionData) {
	result += `
	<!-- item -->
	<li class="item">

		<!-- label -->
		<div class="label">${tfname}</div>
		<!-- /label -->

		<!-- line -->
		<div class="line">

			<!-- ball -->
			<div class="ball" style="animation-timing-function:${tfname};"></div>
			<!-- /ball -->

		</div>
		<!-- /line -->
		
	</li>
	<!-- /item -->`;
}

// Show result on page. 
itemlist.innerHTML = result;
