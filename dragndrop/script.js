


// Get all square boxes. 
const squareboxes = document.querySelectorAll('div#container main.main div.box');

// Get drag object. 
const imageA = document.querySelector('div#container main.main div.box img.image');


/*****/


// Create new dragger dropper. 
const d = new DragDropper(squareboxes, imageA);
