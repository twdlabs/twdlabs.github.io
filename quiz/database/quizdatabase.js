


// Define quiz database. 
const quizdata = {

	assertiveness:{
		quizname:'Assertiveness',
		quizitems:assertivenessdata,
		quizrules:[
			'mno',
			'pqr',
			'stu',
			'vwxyz',
		],
	},

	motivations:{
		quizname:'Motivations',
		quizitems:motivationsdata,
		quizrules:[
			'abc',
			'def',
			'ghi',
			'jkl',
		],
	},

	personality:{
		quizname:'Personality',
		quizitems:big5data,
		quizitems:descriptordata,
		quizrules:[
			'abc',
			'def',
			'ghi',
			'jkl',
		],
	},

};


/*****/


// Add quiz launcher buttons. 
function addLaunchBtns() {

	// Initialize result. 
	let result = '';

	// Go thru each quiz type. 
	for(let quizid in quizdata) {

		// Get quiz item. 
		let quizitem = quizdata[quizid];

		// Comple launch button for quiz item. 
		result += `
		<!-- launchbtn -->
		<div class="launchbtn" data-quizindex="${quizid}" onclick="launchQuizById('${quizid}')">

			<!-- caption -->
			<span class="caption">${quizitem.quizname} Quiz</span>
			<!-- /caption -->

		</div>
		<!-- /launchbtn -->`
	}

	// Display result. 
	quizlauncher.innerHTML = result;
}
