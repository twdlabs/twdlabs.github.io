

// Load budget page. 
function loadBudgetPage() {//return;

	// Load annual budget summary. 
	loadYearSums();

	// Load monthly budget summaries. 
	loadMonthSums();

	/****/

	// Load annual budget summary. 
	function loadYearSums() {

		// Aggregate total limit for monthly budgets. 
		let totalMonthlyBudgetLimit = 0;
		for(category of spendcategorydata) {
			// Add category limit to running total for total limit of monthly budget. 
			totalMonthlyBudgetLimit += category.budgetmonthlylimit;
		}
		
		// Create series of buckets for given year (bucket for each month). 
		let budgetbuckets = ``;
		budgetbuckets += `
		<!-- bucketbox -->
		<figure class="bucketbox box">

			<!-- yrhead -->
			<figcaption class="yrhead">2022</figcaption>
			<!-- /yrhead -->

			<!-- yearbody -->
			<div class="yearbody">`;
		for(let monthIndex in monthFullNames) {

			// Get month name for given month. 
			let monthName = monthFullNames[monthIndex];

			// Get percentage of monthly budget limit that is spent. 
			let pct = 100*( totalSpendPerMonth[monthIndex] / totalMonthlyBudgetLimit );

			// Create numeric label for given month. 
			let n = 1*monthIndex + 1;
			let numLabel = (n<10) ? ('0'+n) : (n);
			
			// Add bucket item for given month. 
			budgetbuckets += createFilledBucket(pct,numLabel);
		}
		budgetbuckets += `
			</div>
			<!-- /yearbody -->

		</figure>
		<!-- /bucketbox -->`;
		

		// Get budget container. TODO: Rearrange this jawn for multiple years. 
		let budgetsbox = document.querySelector('section#budget article#annualsummary div.content');
		// let budgetsbox = document.querySelector('section#budget article#annualsummary div.content figure.bucketbox div.yearbody');
		// console.log('budgetsbox:',budgetsbox);

		// Add monthly budget buckets to page. 
		budgetsbox.innerHTML = budgetbuckets;

		/****/

		// Create monthly budget bucket bar. 
		function createFilledBucket(pct,label) {
			return `
			<!-- bucket -->
			<div class="bucket">

				<!-- fill -->
				<div class="fill" style="height:${pct}%;"></div>
				<!-- /fill -->

				<!-- monthlabel -->
				<label class="monthlabel">${ label }</label>
				<!-- /monthlabel -->

			</div>
			<!-- /bucket -->`;
		}

		// // Create monthly budget bucket bar. 
		// function createFilledBucket(pct,label) {
		// }
	}

	// Load monthly budget summaries: enhanced progress bars. 
	function loadMonthSums() {
		// console.log('spendcategorydata:',spendcategorydata);

		// Create progress bars based on spend category data for each month: budget spend limits and actual spend totals. 
		// Add data for each month. 
		let result = '';
		for(let monthIndex in monthFullNames) {

			// Get month name for given month. 
			let monthName = monthFullNames[monthIndex];

			// Create list of spend category totals for given month. 
			let spendcategorytotals = [  ];
			for(let id in spendcategorydata) {
				// Aggregate given category total. 
				let categoryTotal = 0;
				for(let t of transactiondata) {
	
					// Check for spend transaction. 
					let isSpendTransaction = (t.transactionamount<=0);
					// Check for matching category. 
					let matchingCategory = (t.categoryid==id);
					// Check for matching month. 
					let matchingMonth = (t.transactiondate.m-1==monthIndex);
	
					// Include amount in category total if matching all criteria. 
					if(isSpendTransaction && matchingCategory && matchingMonth) {
						categoryTotal += (-1)*t.transactionamount;
					}
				}
				spendcategorytotals.push(categoryTotal);
			}
			// console.log(`Spend category totals (${monthName}):`,spendcategorytotals);
			
			// Create heading for given month. 
			let heading = `
			<!-- head -->
			<h3 class="head">${ `${monthName} 2022` }</h3>
			<!-- /head -->`;
			// Create edit button for given month. 
			let btnbox = `
			<!-- btnbox -->
			<div class="btnbox">

				<!-- editbtn -->
				<a class="editbtn btn" href="javascript:void(0)">Edit</a>
				<!-- /editbtn -->

				<!-- deletebtn -->
				<a class="deletebtn btn" href="javascript:void(0)">Delete</a>
				<!-- /deletebtn -->

			</div>
			<!-- /btnbox -->`;
			// Create category progress bars for spending in given month. 
			let progressbars = createProgressBars(spendcategorydata,spendcategorytotals,monthIndex);

			// Put category progress bars in budget box and add to result. 
			result += `
			<!-- budgetbox -->
			<figure class="budgetbox box" data-monthindex="${monthIndex}">
				${ heading + btnbox + progressbars }
			</figure>
			<!-- /budgetbox -->`;
		}
		
		// Get container for budget summaries. 
		let budgetsbox = document.querySelector('main.main section#budget article#monthlysummary div.content');

		// Add budgets to page. 
		budgetsbox.innerHTML = result;

		/****/
	}
}


// Open editor window with appropriate attributes. 
function openBudgetEditor(event) {

	// // Grab selected month budget. 
	// let budgetbox = event.currentTarget.parentElement.parentElement;
	// console.log('budgetbox:',budgetbox);

	// // Get index of selected month budget. 
	// let monthindex = budgetbox.getAttribute('data-monthindex');
	// console.log('monthindex:',monthindex);

	// // Select corresponding month in budget editor. 
	// let monthselect = document.querySelector('main#budgeteditor div.input select#monthselect');
	// monthselect.value = monthindex;
	// // Trigger input event responder. (calls function: showBudgetDataToEdit)
	// monthselect.dispatchEvent(new Event('input'));

	// Display general budget data in budget editor. 
	showBudgetDataToEdit();

	// Show budget editor on page. 
	document.getElementById('editorwindow').classList.add('open');

	// Freeze background page. 
	document.body.classList.add('frozen');
	document.documentElement.classList.add('frozen');
}

// Display general budget data in budget editor. 
function showBudgetDataToEdit(/* event */) {

	// Note to self: There's only one general budget, which is applied to all months. Despite differences in spending per month, the monthly budget limit for each month is pulled from exactly the same source. 

	// // Use selected month index. 
	// useSelectedMonthIndex();

	// Show general budget values in editor. 
	let inputgrid = document.getElementById('inputgrid');
	let result = '';
	for(let i in spendcategorydata) {
		let category = spendcategorydata[i];
		let categorylimit = category.budgetmonthlylimit;
		result += `
		<label for="category${i}">${ category.categoryname }</label>
		<input id="category${i}" type="number" min="0" step="10" placeholder="${ categorylimit }" value="${ categorylimit }">`;
	}
	inputgrid.innerHTML = result;

	/****/

	// Use selected month index. 
	function useSelectedMonthIndex() {

		// Get new month index. 
		let newmonthindex = event.currentTarget.value
		console.log('New month index selected:',newmonthindex);
	
		// Show month index in header of budget editor. 
		let indexindicator = document.querySelector('main#budgeteditor h2.head span.monthindex');
		indexindicator.innerHTML = newmonthindex;
	
		// Add month index attribute to update button. 
		let updatebtn = document.querySelector('main#budgeteditor div.input input.updatebtn');
		updatebtn.setAttribute('data-selectedmonthindex',newmonthindex);
	}
}

// Update actual budget data. 
function updateBudgetData() {

	// Get input fields from budget editor. 
	let budgeteditorinputs = document.querySelectorAll('main#budgeteditor div.inputgrid input');

	// Get selected month index. 
	let selectedmonthindex = this.getAttribute('data-selectedmonthindex');
	console.log('selectedmonthindex:',selectedmonthindex);

	// Update general budget data in database using values in budget editor (valid values only). 
	for(let i in spendcategorydata) {

		// Get spend category. 
		let spendcategory = spendcategorydata[i];

		// Get value from form. 
		let bcmlimit = budgeteditorinputs[i].value;

		// Check for valid value. 
		let isValidValue = bcmlimit.length>0 && !isNaN(bcmlimit) && 1*bcmlimit>0;

		// Save value if valid. 
		if(isValidValue) spendcategory.budgetmonthlylimit = 1*bcmlimit;
	}

	// Close editor window after data update. 
	closeBudgetEditor();

	// TODO: Show updated budget limits on page. 
	loadBudgetPage();
	console.log( spendcategorydata.map( (citem)=>(citem.budgetmonthlylimit) ) );
}

// Close editor window. 
function closeBudgetEditor() {

	// Un-freeze background page. 
	document.body.classList.remove('frozen');
	document.documentElement.classList.remove('frozen');

	// Hide budget editor on page. 
	document.getElementById('editorwindow').classList.remove('open');

	// TODO: Clear previous data. 
}