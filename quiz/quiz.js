


// Get container. 
const container = document.querySelector('div#container');

// Get all windows. 
// const allwindows = document.querySelectorAll('div#container main');

// Get list for quiz launchers. 
const quizlauncherlistdestination = document.querySelector('div#container nav.quizlauncher ul.quizlist');


// Get quiz name headers-. 
const quiznameheaders = document.querySelectorAll('div#container main header.top h1.head span.quizname');

// Get destination for rules list. 
const ruleslistdestination = document.querySelector('div#container main.rules section.middle ol.ruleslist');

// Get destination for question count. 
const questioncountdestination = document.querySelector('div#container main.questions footer.bottom div.counter span.num.qcount');


// Get destination for question content. 
const questioncontentdestination = document.querySelector('div#container main.questions section.middle h1.question');

// Get destination for answer list content. 
const questionanswersdestination = document.querySelector('div#container main.questions section.middle ul.answerlist');

// Get destination for item number. 
const currentitemnumberdestination = document.querySelector('div#container main.questions footer.bottom div.counter span.num.qnum');


/*****/


// Initialize id of currently selected quiz. 
let currentquizid = '';

// Initialize question index. 
let currentquizitemindex = -1;


/*****/


// Add quiz launcher buttons. 
addLaunchBtns();


/*****/


// Launch quiz by id. 
function launchQuizById(quizid) {
	console.log('Loading quiz:',quizid);

	// Check for invalid quiz id. 
	let invalidquizid = !quizdata[quizid];
	if(invalidquizid) {
		console.warn('Invalid quiz id:',quizid);
		return;
	}

	// Set id of currently selected quiz. 
	currentquizid = quizid;

	// Display quiz headers. 
	displayHeaders();

	// Display quiz rules. 
	goToRules();

	/****/

	// Display quiz headers. 
	function displayHeaders() {

		// Get currently selected quiz. 
		let selectedquiz = quizdata[currentquizid];

		// Get name of currently selected quiz. 
		let quizname = selectedquiz.quizname;

		// 
		for(let header of quiznameheaders) {
			header.innerHTML = quizname;
		}
	}
}


// Display quiz rules. 
function goToRules() {
	
	// Load quiz rules. 
	loadRules();
	
	// Show quiz rules. 
	showRules();

	/****/

	// Load instructions for selected quiz. 
	function loadRules() {
		console.log('Loading instructions...');

		// Get data for selected quiz. 
		let selectedquiz = quizdata[currentquizid];
		// Get rules for selected quiz. 
		let selectedquizrules = selectedquiz['quizrules'];

		// Initialize result. 
		let result = '';

		// Go thru each rule for selected quiz. 
		for(let rule of selectedquizrules) {
			result += `
			<!-- ruleitem -->
			<li class="ruleitem">${rule}</li>
			<!-- /ruleitem -->`;
		}

		// Display result on page. 
		ruleslistdestination.innerHTML = result;
	}

	// Show instructions for selected quiz. 
	function showRules() {

		// Activate instructions page. 
		container.classList.add('active');
		container.classList.remove('q');
		container.classList.remove('a');
	}
}


// Go to quiz items. 
function goToQuizItems() {

	// Load item count for currently selected quiz. 
	loadItemCount();

	// Load initial item of currently selected quiz. 
	loadNextQuizItem();

	// Show quiz items. 
	showQuizItems();
	
	/****/

	// Load item count for currently selected quiz. 
	function loadItemCount() {

		// Get data for currently selected quiz. 
		let selectedquiz = quizdata[currentquizid];

		// Get item count for currently selected quiz. 
		let itemcount = selectedquiz['quizitems'].length;

		// Display question count. 
		questioncountdestination.innerHTML = itemcount;
	}

	// Show quiz items. 
	function showQuizItems() {

		// Activate questions page. 
		container.classList.add('active');
		container.classList.remove('a');
		container.classList.add('q');
	}
}
// Load next quiz component. 
function loadNextQuizItem() {

	// Increment question index. 
	currentquizitemindex++;

	// Get data for currently selected quiz. 
	let selectedquiz = quizdata[currentquizid];

	// Get all items for currently selected quiz. 
	let selectedquizitems = selectedquiz['quizitems'];
	
	// Check if quiz items finished. 
	let quizfinished = currentquizitemindex >= selectedquizitems.length;
	// Go to quiz assessment (if finished). 
	if(quizfinished) goToAssessment();
	// Load quiz item at current index. 
	else loadCurrentQuizItem(currentquizitemindex);

	/****/

	// Load quiz item at current index. 
	function loadCurrentQuizItem(questionitemindex) {

		// Load number of current item. 
		loadNumber();

		// Load question for current item. 
		loadQuestion();

		// Load list of responses for current item. 
		loadResponseList();

		/***/

		// Load number for current item. 
		function loadNumber() {
			currentitemnumberdestination.innerHTML = 1*questionitemindex + 1;
		}

		// Load question for current item. 
		function loadQuestion() {
			questioncontentdestination.innerHTML = selectedquizitems[questionitemindex]['question'];
		}

		// Load list of responses for current item. 
		function loadResponseList() {
			console.log('Loading responses...');

			// Get list of responses for selected quiz item. 
			let selecteditemanswers = selectedquizitems[questionitemindex]['answers'];
			// console.log('selecteditemanswers:',selecteditemanswers);
	
			// Initialize result. 
			let result = '';
	
			// Go thru each answer for selected quiz item. 
			for(let answer of selecteditemanswers) {
				result += `
				<!-- answeritem -->
				<li class="answeritem">${answer}</li>
				<!-- /answeritem -->`;
			}
	
			// Display answers on page. 
			questionanswersdestination.innerHTML = result;
		}
	}
}


// Go to quiz assessment. 
function goToAssessment() {

	// Reset index for quiz items. 
	currentquizitemindex = -1;

	// TODO: Present contents of assessment. 
	// const xyz = document.querySelector('xyz');
	// xyz.innerHTML = '';

	// Activate assessment page. 
	container.classList.add('active');
	container.classList.remove('q');
	container.classList.add('a');
}


// Replay current quiz. 
function replayQuiz() {

	// Display quiz rules. 
	goToRules();

	// Go to quiz items. 
	// goToQuizItems();
}

// Close quiz. 
function closeQuiz() {

	// Remove id of currently selected quiz. 
	currentquizid = '';

	// Reset question index. 
	currentquizitemindex = -1;

	// De-activate all pages. 
	container.classList.remove('active');
	container.classList.remove('q');
	container.classList.remove('a');
}

// Get quiz data by id. 
function getQuizDataById(quizid) {
	if(quizid) return quizdata[quizid];
	else return null;
}
