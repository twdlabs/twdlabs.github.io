

// Get all skill items. 
let allItemsInner = document.querySelectorAll('section#skills div.skills div.item div.inner');
console.log('allItemsInner',allItemsInner);

// Add click handler to each skill item. 
for(inner of allItemsInner) {
	inner.addEventListener('click', toggleSkill);
}


// Add click handler to close button for skill items. 
let closeBtn = document.querySelector('section#skills div.skills div.closebtn')
console.log('closeBtn',closeBtn);
closeBtn.addEventListener('click', deactivateSkillPopup);


/*****/


// Toggle skill. 
function toggleSkill(event) {

	// Check selected skill. 
	let selectedSkill = event.currentTarget.parentElement;
	let active = selectedSkill.classList.contains('active');

	if(!active) activateSkillPopup(event);
	else deactivateSkillPopup();
}

// Activate selected skill. 
function activateSkillPopup(event) {
	console.log('activateSkillPopup()');

	// Deactivate all skills. 
	deactivateSkillPopup();

	// Activate selected skill. 
	let selectedSkill = event.currentTarget.parentElement;
	selectedSkill.classList.add('active');
	closeBtn.classList.add('active');
}

// Deactivate all skills. 
function deactivateSkillPopup() {
	console.log('deactivateSkillPopup()');

	for(inner of allItemsInner) {
		inner.parentElement.classList.remove('active');
	}
	closeBtn.classList.remove('active');
}
