

// Define navigation data. 
const navdata = [
	{
		title:'Quick Links',
		data:[
			{
				name:'Home',
				url:'javascript:void(0)'
			},
			{
				name:'About',
				url:'javascript:void(0)'
			},
			// {
			// 	name:'Shop',
			// 	url:'javascript:void(0)'
			// },
			{
				name:'Gallery',
				url:'javascript:void(0)'
			},
			// {
			// 	name:'Messages',
			// 	url:'javascript:void(0)'
			// },
			// {
			// 	name:'Blog',
			// 	url:'javascript:void(0)'
			// },
			{
				name:'Contact',
				url:'javascript:void(0)'
			},
		]
	},
	{
		title:'Account',
		data:[
			{
				name:'My Favorites',
				url:'javascript:void(0)'
			},
			{
				name:'My Watch List',
				url:'javascript:void(0)'
			},
			{
				name:'My Cart',
				url:'javascript:void(0)'
			},
			{
				name:'My Orders',
				url:'javascript:void(0)'
			},
		]
	},
	{
		title:'More Links',
		data:[
			{
				name:'Terms of Use',
				url:'javascript:void(0)'
			},
			{
				name:'Privacy Policy',
				url:'javascript:void(0)'
			},
			{
				name:'Return Policy',
				url:'javascript:void(0)'
			},
			{
				name:'FAQ',
				url:'javascript:void(0)'
			},
		]
	},
	{
		title:'Contact Us',
		data:[
			{
				name:'info@merch.com',
				url:'mailto:info@merch.com',
				innersvg:'<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>'
			},
			{
				name:'(331) 256-7092',
				url:'tel:13314567890',
				innersvg:'<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>'
			},
			// {
			// 	name:'Chicago, IL - 60502',
			// 	url:'javascript:void(0)',
			// 	innersvg:'xyz'
			// },
			{
				name:'Messenger',
				url:'javascript:void(0)',
				innersvg:'<path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>'
			},
			{
				name:'Twitter',
				url:'javascript:void(0)',
				innersvg:'<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>'
			},
			{
				name:'Instagram',
				url:'javascript:void(0)',
				innersvg:'<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>'
			},
			// {
			// 	name:'YouTube',
			// 	url:'javascript:void(0)',
			// 	innersvg:'xyz'
			// },
			// {
			// 	name:'TikTok',
			// 	url:'javascript:void(0)',
			// 	innersvg:'xyz'
			// },
		]
	},
];


// Define customer account data. 
const userdata = [
	{
		fname:'User',
		lname:'Name',
		email:'User@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked products. 
		favIds:[],
		
		// Define initial list of products in cart. 
		cartItems:[]
	},
	{
		fname:'Mike',
		lname:'Smith',
		email:'MikeSmith@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked items. 
		favIds:[ 2, 5, 7, 1, 4, 6, 8, 9 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:1,
				qty:2
			},
			{
				productid:3,
				qty:1
			},
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
			{
				productid:8,
				qty:1
			},
			{
				productid:4,
				qty:1
			},
			{
				productid:2,
				qty:1
			},
		],
	},
	{
		fname:'John',
		lname:'Doe',
		email:'JohnDoe@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked items. 
		favIds:[ 1, 3, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
		],
	},
	{
		fname:'Jane',
		lname:'Doe',
		email:'JaneDoe@mail.com',
		photourl:'pic/avatar-f.png',
		
		// Define initial list of liked items. 
		favIds:[ 1, 3, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
		],
	},
	{
		fname:'Abe',
		lname:'Linc',
		email:'AbeLinc@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked items. 
		favIds:[ 2, 5, 7 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:4,
				qty:1
			},
			{
				productid:2,
				qty:1
			},
		],
	},
	{
		fname:'Michele',
		lname:'Smith',
		email:'MicheleSmith@mail.com',
		photourl:'pic/avatar-f.png',
		
		// Define initial list of liked items. 
		favIds:[ 2, 5, 7, 1, 3, 4, 6, 8, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:1,
				qty:2
			},
			{
				productid:3,
				qty:1
			},
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
			{
				productid:8,
				qty:1
			},
			{
				productid:4,
				qty:1
			},
			{
				productid:2,
				qty:1
			},
		],
	},
	{
		fname:'Mike',
		lname:'Smith',
		email:'MikeSmith@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked items. 
		favIds:[ 2, 5, 7, 1, 3, 4, 6, 8, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:1,
				qty:2
			},
			{
				productid:3,
				qty:1
			},
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
			{
				productid:8,
				qty:1
			},
			{
				productid:4,
				qty:1
			},
			{
				productid:2,
				qty:1
			},
		],
	},
	{
		fname:'John',
		lname:'Doe',
		email:'JohnDoe@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked items. 
		favIds:[ 1, 3, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
		],
	},
	{
		fname:'Jane',
		lname:'Doe',
		email:'JaneDoe@mail.com',
		photourl:'pic/avatar-f.png',
		
		// Define initial list of liked items. 
		favIds:[ 1, 3, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
		],
	},
	{
		fname:'Abe',
		lname:'Linc',
		email:'AbeLinc@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked items. 
		favIds:[ 2, 5, 7 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:4,
				qty:1
			},
			{
				productid:2,
				qty:1
			},
		],
	},
	{
		fname:'Michele',
		lname:'Smith',
		email:'MicheleSmith@mail.com',
		photourl:'pic/avatar-f.png',
		
		// Define initial list of liked items. 
		favIds:[ 2, 5, 7, 1, 3, 4, 6, 8, 9, 0 ],
		
		// Define initial list of cart items. 
		cartItems:[
			{
				productid:1,
				qty:2
			},
			{
				productid:3,
				qty:1
			},
			{
				productid:5,
				qty:1
			},
			{
				productid:9,
				qty:1
			},
			{
				productid:8,
				qty:1
			},
			{
				productid:4,
				qty:1
			},
			{
				productid:2,
				qty:1
			},
		],
	},
];


// Define product data. 
const productdata = [
	{
		name:'Air Jordan 1',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit totam sapiente consectetur eligendi',
		rating:{
			average:5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/shoes.jpg',
		producturl:'./product/'
	},
	{
		name:'Air Force One Rope',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/shoes1.jpg',
		producturl:'./product/'
	},
	{
		name:'T-Shirt',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/tshirt.jpg',
		producturl:'./product/'
	},
	{
		name:'Cap',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'29.994',
		exprice:'149.99',
		photourl:'pic/hat.jpg',
		producturl:'./product/'
	},
	{
		name:'Sunglasses',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/sunglasses.jpg',
		producturl:'./product/'
	},
	{
		name:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/p2.jpg',
		producturl:'./product/'
	},
	{
		name:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/p3.jpg',
		producturl:'./product/'
	},
	{
		name:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/p4.jpg',
		producturl:'./product/'
	},
	{
		name:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/p5.jpg',
		producturl:'./product/'
	},
	{
		name:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'pic/p7.jpg',
		producturl:'./product/'
	}
];


// Define stars for customer ratings. 
const stars = {
	full:'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>',
	half:'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg>',
	empty:'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'
}
