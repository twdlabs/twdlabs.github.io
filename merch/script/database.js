

// Define navigation data. 
const navdata = [
	[
		{
			name:'Home',
			url:'javascript:void(0)'
		},
		{
			name:'About',
			url:'javascript:void(0)'
		},
		{
			name:'Shop',
			url:'javascript:void(0)'
		},
		{
			name:'Gallery',
			url:'javascript:void(0)'
		},
		{
			name:'Messages',
			url:'javascript:void(0)'
		},
		{
			name:'Blog',
			url:'javascript:void(0)'
		}
	],
	[
		{
			name:'My Favorites',
			url:'javascript:void(0)'
		},
		{
			name:'My Watch List',
			url:'javascript:void(0)'
		},
		{
			name:'My Orders',
			url:'javascript:void(0)'
		},
		{
			name:'FAQ',
			url:'javascript:void(0)'
		},
		{
			name:'Terms of Use',
			url:'javascript:void(0)'
		},
		{
			name:'Privacy Policy',
			url:'javascript:void(0)'
		}
	],
	[
		{
			name:'abc@xyz.com',
			url:'mailto:info@merch.com'
		},
		{
			name:'(331) 456-7890',
			url:'tel:13314567890'
		},
		{
			name:'Chicago, IL - 60502',
			url:'javascript:void(0)'
		}
	]
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
		photourl:'../pic/shoes.jpg',
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
		photourl:'../pic/shoes1.jpg',
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
		photourl:'../pic/tshirt.jpg',
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
		photourl:'../pic/hat.jpg',
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
		photourl:'../pic/sunglasses.jpg',
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
		photourl:'../pic/p2.jpg',
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
		photourl:'../pic/p3.jpg',
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
		photourl:'../pic/p4.jpg',
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
		photourl:'../pic/p5.jpg',
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
		photourl:'../pic/p7.jpg',
		producturl:'./product/'
	}
];


// Define initial list of liked items. 
const favIds = [ 2, 5, 7, 1, 3, 4, 6, 8, 9, 0 ];


// Define initial list of cart items. 
const cartItems = [
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
];


// Define customer account data. 
const accountData = [
	{
		fname:'Mike',
		lname:'Smith',
		email:'MikeSmith@mail.com',
		photourl:'../pic/avatar.png',
	},
	{
		fname:'John',
		lname:'Doe',
		email:'JohnDoe@mail.com',
		photourl:'../pic/avatar.png',
	},
	{
		fname:'Abe',
		lname:'Linc',
		email:'AbeLinc@mail.com',
		photourl:'../pic/avatar.png',
	},
];


// Define stars for customer ratings. 
let stars = {
	full:'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>',
	half:'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg>',
	empty:'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'
}
