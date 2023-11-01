


// Define quiz database. 
const quizdata = {

	assertiveness:{
		quizname:'Assertiveness',
		quizquestions:assertivenessdata,
		quizrules:[
			'mno',
			'pqr',
			'stu',
			'vwxyz',
		],
	},

	big5:{
		quizname:'Personality',
		quizquestions:big5data,
		quizquestions:descriptordata,
		quizrules:[
			'abc',
			'def',
			'ghi',
			'jkl',
		],
	},

};


/*****/


// Add launch buttons. 
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
		<div class="launchbtn" onclick="launchQuizById('${quizid}')">

			<!-- caption -->
			<span class="caption">${quizitem.quizname} Quiz</span>
			<!-- /caption -->

		</div>
		<!-- /launchbtn -->`
	}

	// Display result. 
	quizlauncher.innerHTML = result;
}
