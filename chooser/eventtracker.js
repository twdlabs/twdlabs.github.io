

// Time Keeper: Log the timestamp once for every second the page is open. 
var time = 0;
console.log('time:',time);

// Call counting function once per second. 
setInterval(countTime, 1000, this);

// Define counting function. 
function countTime() {
	time += 1000;
	console.log('time:',time);
}


// Create log when event fired from sidenav. 
let events = ['click','dblclick','mousedown','mouseup','mousewheel','wheel', 'touchcancel','touchend','touchstart', 'drag','dragstart','dragend','dragenter','dragleave','drop', 'change','keydown','keypress','keyup','input'];

// Handle all preselected events. 
for (var i=0 ; i<events.length ; i++) {
	document.getElementById('mySidenav').addEventListener( events[i] , eventHandler );
}

// Define logging function. 
function eventHandler(event){
	console.log('sidenav:', event.type);
}
