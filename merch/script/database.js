

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
		photourl:'./pic/shoes.jpg',
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
		photourl:'./pic/shoes1.jpg',
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
		photourl:'./pic/tshirt.jpg',
		producturl:'./product/'
	},
	{
		name:'Cap',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./pic/hat.jpg',
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
		photourl:'./pic/sunglasses.jpg',
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
		photourl:'./pic/p2.jpg',
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
		photourl:'./pic/p3.jpg',
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
		photourl:'./pic/p4.jpg',
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
		photourl:'./pic/p5.jpg',
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
		photourl:'./pic/p7.jpg',
		producturl:'./product/'
	}
];


// Define initial list of liked items. 
const favItems = [ 2, 5, 7 ];


// Define initial list of cart items. 
const cartItems = [
	{
		productid:1,
		qty:2
	},
	{
		productid:5,
		qty:4
	},
];


// Define customer data. 
const customerdata = [
	{
		fname:'Mike',
		lname:'Smith',
	},
	{
		fname:'John',
		lname:'Doe',
	},
	{
		fname:'Abe',
		lname:'Linc',
	},
];

console.log(customerdata);
customerdata.push(9);
console.log(customerdata);
