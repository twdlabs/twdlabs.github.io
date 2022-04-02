

// Handle events. 
function handleEvents() {


	// Navigation Events

	// Enable header click to toggle navigation switcher. 
	let headerbrand = document.querySelector('div#container header.header h1.head');
	let navtogglebtn = document.querySelector('div#container header.header div.togglebtn');
	headerbrand.addEventListener('click',toggleNavigation);
	navtogglebtn.addEventListener('click',toggleNavigation);

	// Enable navigation switcher links to open new page. 
	let radiolinks = document.querySelectorAll('nav.switcher ul.navlist li.navitem input');
	for(let link of radiolinks) {
		link.addEventListener('input',selectNewPage);
	}

	// Enable prev page button to navigate to previous page. 
	let prevpagebtn = document.querySelector('div#container header.header div.deltabtn.l');
	prevpagebtn.addEventListener('click',goToPrevPage);
	
	// Enable next page button to navigate to next page. 
	let nextpagebtn = document.querySelector('div#container header.header div.deltabtn.r');
	nextpagebtn.addEventListener('click',goToNextPage);

	
	// Memory Events

	// Enable reset button to reset user data. 
	let resetbtn = document.getElementById('resetuserdata');
	resetbtn.addEventListener('click',resetUserData);

	// Enable save button to save user data. 
	let savebtn = document.getElementById('saveuserdata');
	savebtn.addEventListener('click',saveUserData);

	// Enable load button to load up saved user data. 
	let loadbtn = document.getElementById('loaduserdata');
	loadbtn.addEventListener('click',loadUserData);
	
	// Check for save before closing app. 
	// window.addEventListener('beforeunload',checkForSaveB4Close);
	// document.body.addEventListener('beforeunload',checkForSaveB4Close);
	// document.documentElement.addEventListener('beforeunload',checkForSaveB4Close);


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
	// console.log('budgeteditbtns:',budgeteditbtns);
	// for(let btn of budgeteditbtns) {
	// 	btn.addEventListener('click',openBudgetEditor);
	// }


	// Budget Editor Events

	// Enable update button in budget editor to modify budget data. 
	let budgetupdatebtn = document.querySelector('main#budgeteditor div.input input.updatebtn');
	budgetupdatebtn.addEventListener('click',updateBudgetData);

	// // Enable month selector to change month budget data. 
	// let monthselector = document.querySelector('main#budgeteditor div.input select#monthselect');
	// monthselector.addEventListener('input',showBudgetDataToEdit);
	// monthselector.addEventListener('change',showBudgetDataToEdit);


	// Settings Page Events

	// Activate font size selector. 
	let fontSizeSelector = document.getElementById('fontsize');
	fontSizeSelector.addEventListener('input',updateFontSize);

	// Enable font color selector for income amounts. 
	let incomeColorSelector = document.getElementById('incomefontcolor');
	incomeColorSelector.addEventListener('input',updateIncomeColorMode);
	
	// Enable font color selector for expense amounts. 
	let spendColorSelector = document.getElementById('spendfontcolor');
	spendColorSelector.addEventListener('input',updateExpenseColorMode);
	
	// Enable font color selector for category names/icons. 
	let categoryColorSelector = document.getElementById('categoryfontcolor');
	categoryColorSelector.addEventListener('input',updateCategoryColorMode);
	
	// Enable categorization mode selector for budget spending categories. 
	let autoCategoryChooser = document.getElementById('autocategorymode');
	autoCategoryChooser.addEventListener('input',updateCategorizationMode);
	




	// Taxes Page Events

	// Investments Page Events

	// Insurance Page Events
	
	// Swiper Events
	
	// // Enable page swipe gestures. 
	// let container = document.getElementById('container');
	// container.addEventListener('touchstart',beginSwipe);
	// container.addEventListener('touchend',endSwipe);
	// container.addEventListener('mousedown',beginSwipe);
	// container.addEventListener('mouseup',endSwipe);
	

	/*****/
	
}
