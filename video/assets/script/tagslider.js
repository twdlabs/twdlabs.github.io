


// Get tag list slider. 
const slider = document.querySelector('div#container div.vidfilter div.slider');
// Get tag list slider bin. 
const tagbox = document.querySelector('div#container div.vidfilter div.slider ul.taglist');
// Get tag list items. 
const tagitems = document.querySelectorAll('div#container div.vidfilter div.slider ul.taglist li.tagitem');

// Get slider edges. 
const leftedge = document.querySelector('div#container div.vidfilter div.edge.left');
const rightedge = document.querySelector('div#container div.vidfilter div.edge.right');
// Get slide buttons. 
const leftslidebtn = document.querySelector('div#container div.vidfilter div.edge.left div.slidebtn');
const rightslidebtn = document.querySelector('div#container div.vidfilter div.edge.right div.slidebtn');


/*****/


// Create new tag slider. 
const ts = new TagSlider(slider,tagbox,tagitems,leftedge,rightedge,leftslidebtn,rightslidebtn);
