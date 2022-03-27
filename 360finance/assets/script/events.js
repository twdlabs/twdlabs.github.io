

// Handle events. 
function handleEvents() {


	// Navigation Events

	// Enable header click to toggle navigation switcher. 
	let header = document.querySelector('div#container header.header');
	header.addEventListener('click',toggleNavigation);

	// Activate navigation switcher links. 
	let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
	for(let link of radiolinks) {
		link.addEventListener('input',setNewPageIndex);
	}


	// Overview Page Events
	
	// Enable pie chart disc clicks to toggle between full and brief dollar amount. 
	let piechartdiscs = document.querySelectorAll('main.main section.page article.summary div.content figure.piechart div.chart div.disc');
	for(let disc of piechartdiscs) {
		disc.addEventListener('click', function(event) {
			// console.log(this);
			this.classList.toggle('full');
			// console.log(this);
		});
	}


	// Activity Page Events
	
	// Make all transactions draggabble. 
	let trows = document.querySelectorAll('section#activity article#transactions div.content table.table tbody tr.row');
	for(let tr of trows) {
		tr.setAttribute('draggable','true');
	}


	// Budget Page Events
	
	// Enable edit button to edit general monthly budget (same budget limits used for all months). 
	let budgetEditBtn = document.querySelector('section#budget article#monthlysummary h2.head a.editbtn');
	budgetEditBtn.addEventListener('click',openBudgetEditor);

	// Enable budget box double clicks to edit general monthly budget. 
	let budgetboxes = document.querySelectorAll('main.main section#budget article#monthlysummary div.content figure.budgetbox h3.head');
	for(let box of budgetboxes) {
		box.addEventListener('dblclick',openBudgetEditor);
	}
	
	// // Enable budget box edit button clicks to edit monthly budget. 
	// let budgeteditbtns = document.querySelectorAll('main.main section#budget article#monthlysummary div.content figure.budgetbox div.btnbox a.editbtn');
	// for(let btn of budgeteditbtns) {
	// 	btn.addEventListener('click',openBudgetEditor);
	// }


	// Taxes Page Events

	// Investments Page Events

	// Insurance Page Events


	// Budget Editor Events

	// // Enable month selector to change month budget data. 
	// let monthselector = document.querySelector('main#budgeteditor div.input select#monthselect');
	// monthselector.addEventListener('input',showBudgetDataToEdit);
	// monthselector.addEventListener('change',showBudgetDataToEdit);

	// Enable update button in budget editor to modify budget data. 
	let budgetupdatebtn = document.querySelector('main#budgeteditor div.input input.updatebtn');
	budgetupdatebtn.addEventListener('click',updateBudgetData);

	
	// Miscellaneous Events
	
	// // Enable page swipe gestures. 
	// let container = document.getElementById('container');
	// container.addEventListener('touchstart',beginSwipe);
	// container.addEventListener('touchend',endSwipe);
	// container.addEventListener('mousedown',beginSwipe);
	// container.addEventListener('mouseup',endSwipe);
	

	/*****/
	
}
