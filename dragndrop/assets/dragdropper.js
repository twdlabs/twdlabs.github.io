


// Get all draggable items. 
const alldragitems = document.querySelectorAll('div#container main.main div.box img.item');

// Get all drop-boxes. 
const alldropboxes = document.querySelectorAll('div#container main.main div.box');


/*****/


// Define link btwn single item and drop-boxes. 
class DragDropMatrix {
	
	// Create new set of drag/drop relationships for given item. 
	constructor(/* obj *//* ,boxes */) {

		// Save draggable item. 
		// this.dragitem = obj;
		// obj.setAttribute('draggable','true');

		// Save drop-boxes. 
		// this.alldropboxes = boxes;

		// Link draggable item to all drop-boxes. 
		this.linkItemToBoxes();
	}

	// Link draggable item to all drop-boxes. 
	linkItemToBoxes() {
		// console.log('Current item (this):',this);

		// // Go thru each drag item. 
		for(let dragitem of alldragitems) {

			// Handle drag start. 
			dragitem.addEventListener('dragstart',pickUpItem);
			// Handle drag presence. 
			// dragitem.addEventListener('drag',dragItem);
			// Handle drag finish. 
			dragitem.addEventListener('dragend',putDownItem);
		}

		// Go thru each drop-box. 
		// for(let box of this.alldropboxes) {
		for(let dropbox of alldropboxes) {

			// Handle drop receipt. 
			dropbox.addEventListener('drop',receiveItem);

			// Handle prep for drop receipt. 
			dropbox.addEventListener('dragenter',prepDropbox);
			dropbox.addEventListener('dragover',prepDropbox);
			// Handle drop cancellation. 
			dropbox.addEventListener('dragleave',cancelDropbox);
		}

		/****/

		// Pick up draggable item. 
		function pickUpItem(event) {
			console.log('Picking up draggable item...',event.dataTransfer);

			// Get selected drag-item. 
			let selecteddragitem = event.currentTarget;
			console.log('selecteddragitem:',selecteddragitem);

			// Update drag state. 
			selecteddragitem.classList.add('up');

			// Save id of dragged item. 
			let dragitemid = selecteddragitem.id;
			console.log('dragitemid:',dragitemid);
			event.dataTransfer.setData('dragitemid',dragitemid);
		}

		// Drag draggable item. 
		function dragItem(event) {

			// Get selected drag-item. 
			// let selecteddragitem = event.currentTarget;
		}

		// Put down draggable item. 
		function putDownItem(event) {
			console.log('Putting down draggable item...',event.dataTransfer);

			// Get selected drag-item. 
			let selecteddragitem = event.currentTarget;

			// Update drag state. 
			selecteddragitem.classList.remove('up');
		}

		// Receive item into drop-box. 
		function receiveItem(event) {
			console.log('Receiving item...',event);

			// Allow for no-frills drop event (no file opening, no link navigation). 
			event.preventDefault();

			// Get selected drop-box. 
			let selectedbox = event.currentTarget;

			// Get id of dragged item. 
			let dragitemid = event.dataTransfer.getData('dragitemid');
			console.log('dragitemid:',dragitemid);
			// Get dragged item. 
			let dragitem = document.getElementById(dragitemid);
			// let dragitem = this.dragitem;
			// let dragitem = alldragitems[2];

			// Move draggable item into selected drop-box (if selected). 
			selectedbox.appendChild(dragitem);

			// Update ready state. 
			selectedbox.classList.remove('ready');
		}

		// Prepare drop-box to receive. 
		function prepDropbox(event) {
			// console.log('Readying drop-box to receive...',event);

			// Allow for drop event (dragged item into new drop-box). 
			event.preventDefault();

			// Get selected drop-box. 
			let selectedbox = event.currentTarget;

			// Update ready state. 
			selectedbox.classList.add('ready');
		}

		// Cancel drop-box to receive. 
		function cancelDropbox(event) {
			// console.log('Un-readying drop-box...',event);

			// Get selected drop-box. 
			let selectedbox = event.currentTarget;

			// Update ready state. 
			selectedbox.classList.remove('ready');
		}
	}
}
