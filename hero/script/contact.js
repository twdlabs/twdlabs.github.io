


// Update send link in contact form. 
function updateSendLink() {
	// Get form data. 
	let name = $('section#contact form div#name input').val();
	let email = $('section#contact form div#email input').val();
	let subject = $('section#contact form div#subject input').val();
	let msg = $('section#contact form div#message textarea').val();


	// Initialize email url. 
	let mailUrl = 'mailto:atitusgl@svsu.edu';


	// Add subject to email url. 
	mailUrl += '?subject=';
	mailUrl += escape('Website Contact Form');
	// mailUrl += '?subject=Website%20Contact%20Form';
	if(subject) mailUrl += escape(' (' + subject + ')');
	// if(subject) mailUrl += escape('%3A%20' + subject);


	// Add body to email url. 
	if(name||email||msg) mailUrl += '&body=';

	// Add name to email url. 
	if(name) mailUrl += escape(`Name: ${name}\r\n`);
	// if(name) mailUrl += escape(`%0D%0AName%3A%20${name}`);

	// Add email to email url. 
	if(email) mailUrl += escape(`Email: ${email}\r\n`);
	// if(email) mailUrl += escape(`%0D%0AEmail%3A%20${email}`);

	// Add message to email url. 
	if(msg) mailUrl += escape(`\r\n${msg}\r\n`);
	// if(msg) mailUrl += escape(`%0D%0A%0D%0AMessage%3A%20%0D%0A${msg}`);


	// Change email destination of send button link. 
	let sendLink = $('section#contact form div#send a.send');
	// console.log(mailUrl);
	sendLink.attr('href',mailUrl);
}
