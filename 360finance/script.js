

// Initialize selected index. 
let selectedIndex = 0;


/*****/


// Load everything. 
loadEverything();

// Handle events. 
handleEvents();


/*****/


// Load everything. 
function loadEverything() {

	// Overview page: Load navigation bar. 
	loadNavigation();

	// Load pie chart. 
	loadPieChart();

	// Load legend for pie chart. 
	loadLegend();

	// Overview page: Load transactions. 
	loadTransactions();
	
	// Budget page: Load budget. 
	loadBudget();

	/*****/

	// Load navigation bar. 
	function loadNavigation() {

		// Get navigation list. 
		let navlist = document.querySelector('div#container nav.switcher ul.navlist');
		// let navquads = document.querySelector('div#container nav.quads');
		
		// Initialize resulting nav list items. 
		let result = '';
		// let result2 = '';
		
		// Add nav list items. 
		for(let i in navdata) {

			// Get navigation data item. 
			let item = navdata[i];

			// Append nav list item. 
			result += `
			<!-- navitem -->
			<li class="navitem${(i==0)?(' home'):('')}">

				<!-- bg -->
				<img src="../atgicon.ico" class="bg">
				<!-- /bg -->
		
				<!-- radio -->
				<input type="radio" name="navselection" id="select-${item.code}" value="${item.code}"${ (i==selectedIndex) ? (' checked') : ('') }>
				<!-- /radio -->
		
				<!-- navlabel -->
				<label class="navlabel" for="select-${item.code}">${item.name}</label>
				<!-- /navlabel -->

				<!-- tooltip -->
				<span class="tooltip">${item.tooltip}</span>
				<!-- /tooltip -->
		
			</li>
			<!-- /navitem -->`;

			// Append nav list item. 
			// result2 += `
			// <!-- quadrant -->
			// <div class="quadrant">

			// 	<!-- link -->
			// 	<a class="link" href="javascript:void(0)" data-val="${item.code}">
			// 		<span class="caption">${item.name}</span>
			// 	</a>
			// 	<!-- /link -->
				
			// </div>
			// <!-- /quadrant -->`;
		}
		
		// Add nav list switch last. 
		result += `
		<!-- switch -->
		<li class="switch"></li>
		<!-- /switch -->`;
		
		// Add resulting nav list to page. 
		navlist.innerHTML = result;
		// navquads.innerHTML = result2;
	}

	// TODO: Load pie chart. 
	function loadPieChart() {


		// Initiate list of category totals. 
		let categoryTotals = [  ];

		// Aggregate category totals. 
		for(let id in categorydata) {

			// Initialize category total. 
			let total = 0;

			// Aggregate given category total. 
			for(let t of transactiondata) {
				if(t.categoryid==id) total += (-1)*t.transactionamount;
			}
			categoryTotals.push(total);
		}
		console.log('categoryTotals:',categoryTotals);

		// --------------------------------


		// Initialize total earnings. 
		let totalAmountEarned = 0;

		// Aggregate total earnings. 
		for(let t of transactiondata) {
			if(t.transactionamount>=0) totalAmountEarned += t.transactionamount;
		}
		console.log('Total earnings:', dollar(totalAmountEarned) );


		// Initialize total spending. 
		let totalAmountSpent = 0;

		// Aggregate total spending. 
		for(let t of transactiondata) {
			if(t.transactionamount<=0) totalAmountSpent += (-1) * t.transactionamount;
		}
		console.log('Total spending:', dollar(totalAmountSpent) );


		// Initialize net balance. 
		let netBalance = 0;

		// Aggregate net balance. 
		for(let t of transactiondata) {
			netBalance += t.transactionamount;
		}
		console.log('Net balance:', dollar(totalAmountEarned-totalAmountSpent) );
		console.log('Net balance:', dollar(netBalance) );


		// --------------------------------


		// Calculate budget category proportions, then angular degrees for pie chart segments. 
		let segmentDegrees = categoryTotals.map( (amount) => ( amount/totalAmountEarned*360 ) );
		console.log('segmentDegrees:',segmentDegrees);

		
		// --------------------------------


		// Initialize conical gradient parameters. 
		let cgparams = '';

		// Initialize current angle position. 
		let currentAngle = 0;

		// Aggregate gradient parameters. 
		for(let i in segmentDegrees) {
			// Skip incom category. ???????
			if(i==0) continue;

			// Calculate anglular positions for given category segment. 
			let beginAngle = currentAngle
			let endingAngle = currentAngle + segmentDegrees[i];
			// console.log();
			// console.log(i);
			// console.log('beginAngle:',beginAngle);
			// console.log('endingAngle:',endingAngle);

			// Refresh current angle position. 
			currentAngle = endingAngle;

			// Get color for category segment of pie chart. 
			let color = categorydata[i].color;
			
			// Append gradient parameters. 
			cgparams += (i>1) ? (', ') : ('');
			cgparams += `${color} ${beginAngle}deg, ${color} ${endingAngle}deg`;

			// Check for superfluous angle (i.e. overspending). 
			var superfluous = currentAngle>360;
			if(superfluous) {
				console.log('Overspent! Current angle:', `${currentAngle}deg` );
			}
		}

		// Complete gradient parameters with empty space. 
		if(!superfluous) cgparams += `, white ${currentAngle}deg, white 360deg`
		console.log('Gradient:', `conic-gradient(${cgparams})`);

		// Get chart circle. 
		let piechart = document.querySelector('section#overview div#summary section#piechart div.chart');

		// Apply conical gradient parameters. 
		piechart.style.backgroundImage = 'conic-gradient(red, yellow, green, blue, black)';
		piechart.style.backgroundImage = `conic-gradient(${cgparams})`;
	}

	// Load categories for pie chart legend. 
	function loadLegend() {
		
		// Get container for legend content. 
		let legendbox = document.getElementById('legend');

		// Initiate result. 
		let result = '';

		// Add categories to result. 
		for(category of categorydata) {
			result += `
			<!-- item -->
			<div class="item">

				<!-- color -->
				<span class="color" style="background-color:${category.color};"></span>
				<!-- /color -->

				<!-- caption -->
				<span class="caption">${category.categoryname}</span>
				<!-- /caption -->

			</div>
			<!-- /item -->`;
		}

		// Add legend content to page. 
		legendbox.innerHTML = result;
	}

	// Load transactions. 
	function loadTransactions() {

		// Get table body. 
		let tbody = document.querySelector('section#overview div#transactions table.table tbody');
		// console.log('Table body:',tbody);

		// Initialize result. 
		let result = '';

		// Collect transactions. 
		for(let t of transactiondata) {
			result += `
			<!-- row -->
			<tr class="row">

				<!-- cell -->
				<td class="cell date">

					<!-- data -->
					<span class="data">Mar 9, 2022</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell description">

					<!-- data -->
					<span class="data">${t.merchantname}</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell category">

					<!-- data -->
					<span class="data">${ categorydata[t.categoryid].categoryname }</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

				<!-- cell -->
				<td class="cell amount">

					<!-- data -->
					<span class="data${ (t.transactionamount>0) ? (' income') : ('') }">${ formatCurrency(t.transactionamount) }</span>
					<!-- /data -->
					
				</td>
				<!-- /cell -->

			</tr>
			<!-- /row -->`;
		}

		// Add result to page. 
		tbody.innerHTML = result;

		/****/

		// Format currency. 
		function formatCurrency(n) {
			return dollar(n);
		}
	}

	// Load budget on budget page. 
	function loadBudget() {

		// Get budget container. 
		let budgetbox = document.querySelector('section#bank article.buckets');
		// console.log(budgetbox);

		// Initiate result. 
		let result = '';

		for(let i in monthLabels) {
			let n = i*1 + 1;
			let ml = monthLabels[i];
			result += `
			<!-- bucket -->
			<div class="bucket">

				<label class="month">${ (false) ? (ml) : ( (n<10) ? ('0'+n) : (n) ) }</label>

			</div>
			<!-- /bucket -->`;
		}

		// Add result to page. 
		budgetbox.innerHTML = result;
	}
}


// Handle events. 
function handleEvents() {

	// Activate navigation switcher links. 
	let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
	for(let link of radiolinks) {
		link.addEventListener('input',selectPage);
	}

	/*****/

	// Select page. 
	function selectPage(event) {

		// Get selected navigation button. 
		let navbtn = event.currentTarget;
		// console.log('Navigation button:', navbtn);

		// Get selected page name. 
		let selectedPageName = navbtn.value;
		// console.log('Selected page name:',selectedPageName);

		// Save index for selected page. 
		let index = sectionNames.indexOf(selectedPageName);
		// console.log('Selected index:',index);

		// Open selected page using selected index. 
		openSelectedPage(index);
	}

	// Open selected page by index. 
	function openSelectedPage(index) {
	
		// Save index for selected page. 
		selectedIndex = index;
		console.log('Selected index:',index);
	
		// Shift navigation switch to proper position. 
		let switich = document.querySelector('nav.switcher ul.navlist li.switch');
		switich.style.transform = `translateX(${(100*selectedIndex)}%)`;
		// console.log('switich:',switich);
	
		// Get main container. 
		let inner = document.querySelector('div#container main.main div.inner');
		// console.log(inner.style.transform);
	
		// Add transformation for selected page. 
		inner.style.transform = `translateX(${-100*selectedIndex}%)`;
		// console.log(inner.style.transform);
	}
}


