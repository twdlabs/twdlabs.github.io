

var nickname = [ 'Home', 'App Clone', 'Evolution', 'Finance', 'Fitness', 'Layouts', 'Math', 'Music', 'Probability', 'Real Estate', 'Stock Market' ];
var urls = [ 'chooser', 'clone', 'evolution', 'finance', 'fitness', 'layouts', 'math', 'music', 'probability', 'reast', 'stocks' ];
var dashboardData = [
	{
		fullname:'Page Chooser',
		nickname:'Home',
		url:'chooser',
		include:1
	},
	{
		fullname:'App Clone',
		nickname:'App Clone',
		url:'clone',
		include:0
	},
	{
		fullname:'Evolutionary Game Theory',
		nickname:'Evolution',
		url:'evolution',
		include:0
	},
	{
		fullname:'Finance Dashboard',
		nickname:'Finance',
		url:'finance',
		include:1
	},
	{
		fullname:'Fitness Dashboard',
		nickname:'Fitness',
		url:'fitness',
		include:0
	},
	{
		fullname:'Layout Dashboard',
		nickname:'Layouts',
		url:'layouts',
		include:0
	},
	{
		fullname:'Math Dashboard',
		nickname:'Math',
		url:'math',
		include:1
	},
	{
		fullname:'Music Dashboard',
		nickname:'Music',
		url:'music',
		include:1
	},
	{
		fullname:'Probability Dashboard',
		nickname:'Probability',
		url:'probability',
		include:1
	},
	{
		fullname:'Real Estate Dashboard',
		nickname:'Real Estate',
		url:'reast',
		include:1
	},
	{
		fullname:'Stock Market Dashboard',
		nickname:'Stock Market',
		url:'stocks',
		include:1
	},
	{}
];

let spl = window.location.pathname.split('/');
let url = spl[spl.length-2];
const highlightIndex = urls.indexOf(url);

$(document).ready(loadWebsiteNav);

// Load website navigation bar. 
function loadWebsiteNav() {
	// Initiate top navigation bar. 
	var topNav = '';

	// Get top navigation index of the current page. 

	// Create top navigation bar. 
	topNav += '<nav class="navbar navbar-expand-none navbar-light bg-light static-top">';
		topNav += '<div class="container-fluid">';

			topNav += '<a class="navbar-brand" href="#" onclick="openPageNo(0)">';
			topNav += icon;
			topNav += fullname;
			topNav += '</a>';

			topNav += '<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">';
				topNav += '<span class="navbar-toggler-icon"></span>';
			topNav += '</button>';

			topNav += '<div id="navbarResponsive" class="collapse navbar-collapse">';
				topNav += '<ul class="navbar-nav ml-auto">';
				// for(let i=0 ; i<urls.length ; i++) {
				for(let i=0 ; i<dashboardData.length ; i++) {
					// Skip excluded ones. 
					if(!dashboardData[i].include) continue;

					// Append included ones. 
					topNav += (i==highlightIndex)? ('<li class="nav-item active">') : ('<li class="nav-item">');
						topNav += `<a class="nav-link" href="../${dashboardData[i].url}/index.html">`;
						// topNav += `<a class="nav-link" href="../${urls[i]}/index.html">`;
						topNav += dashboardData[i].nickname;
						// topNav += nickname[i];
						topNav += '</a>';
					topNav += '</li>';
				}
				topNav += '</ul>';
			topNav += '</div>';

		topNav += '</div>';
	topNav += '</nav>';

	// Add top navigation bar to dashboard page. 
	// alert(topNav);
	// console.log(topNav);
	$('body').prepend(topNav);
}
