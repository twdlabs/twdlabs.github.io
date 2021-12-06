
let portfolio = [
	{
		name:'Project 01',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 02',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 03',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 04',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 05',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 06',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 07',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 08',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 09',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 10',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 11',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	},
	{
		name:'Project 12',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo maxime id ipsum.',
		link:'javascript:void(0)',
		piclink:'pic/scenery.jpg'
	}
];



// Create portfolio elements. 
let result = '';
for(work of portfolio) {
	result += `
	<!-- item -->
	<div class="item" style="background-image:url('${work.piclink}');">
		<div class="inner">
			<h3 class="name">${work.name}</h3>
			<p class="textcopy">${work.description}</p>
			<a class="link" href="${work.link}">Read more</a>
		</div>
	</div>
	<!-- /item -->`;
}

// Insert portfolio elements into page. 
let inserthere = document.querySelector('section#portfolio main');
inserthere.innerHTML = result;
