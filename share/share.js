


// Get container. 
const container = document.querySelector('div#container');

// Get share open button. 
const openbtn = document.querySelector('div#container a.sharebtn');

// Get social buttons. 
const socialbtns = document.querySelectorAll('div#container main.main ul.grid li.item a.btn');

// Get background of share popup. 
const popupbackground = document.querySelector('div#container aside.back');
// Get share close button. 
const closebtn = document.querySelector('div#container main.main div.head a.closebtn');

// Get link field. 
const linkfield = document.querySelector('div#container main.main div.linkfield');
// Get link field input. 
const linkfieldinput = document.querySelector('div#container main.main div.linkfield input.link');
// Get link field copy button. 
const linkfieldcopybtn = document.querySelector('div#container main.main div.linkfield div.copybtn');


/*****/


// Open popup upon button click. 
openbtn.addEventListener('click',openShare);

// Share to social upon button click. 
for(let btn of socialbtns) {
	btn.addEventListener('click',shareToSocial);
}

// Copy text to clipboard upon button click. 
linkfieldcopybtn.addEventListener('click',copyToClipboard);

// Reset link field upon mouse leaving. 
linkfield.addEventListener('mouseleave',resetLinkField);

// Close popup upon button click. 
closebtn.addEventListener('click',closeShare);
popupbackground.addEventListener('click',closeShare);


/*****/


// Open sharing popup. 
function openShare() {

	// Set link. 
	linkfieldinput.value = window.location;

	// Open popup. 
	container.classList.add('on');
}

// Share to social media. 
function shareToSocial() {

	// TODO: Share to social media. 
	// 

	// Close sharing popup. 
	closeShare();
}

// Copy link to clipboard. 
function copyToClipboard() {

	// Select text in text field. 
	linkfieldinput.select();
	linkfieldinput.setSelectionRange(0,99999);

	// Copy text from text field onto clipboard. 
	navigator.clipboard.writeText(linkfieldinput.value);

	// 
	linkfield.classList.add('on');

	// Update contents of tooltip. 
	// tooltip.innerHTML = `Copied: "${linkfieldinput.value}"`;
}

// Reset link field. 
function resetLinkField() {
	// 
	linkfield.classList.remove('on');
}

// Close sharing popup. 
function closeShare() {
	// Close popup. 
	container.classList.remove('on');
}
