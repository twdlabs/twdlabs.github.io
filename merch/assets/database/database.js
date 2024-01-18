


// Define customer account data. 
const userdata = [
	{
		fname:'User',
		lname:'Name',
		email:'User@mail.com',
		photourl:'./../resources/images/user/avatar-m.png',
		
		// Define initial list of liked products. 
		favIds:[],
		
		// Define initial list of products in cart. 
		cartItems:[]
	},
	{
		fname:'Mike',
		lname:'Smith',
		email:'MikeSmith@mail.com',
		photourl:'./../resources/images/user/avatar-m.png',
		
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
		photourl:'./../resources/images/user/avatar-m.png',
		
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
		photourl:'./../resources/images/user/avatar-f.png',
		
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
		photourl:'./../resources/images/user/avatar-m.png',
		
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
		photourl:'./../resources/images/user/avatar-f.png',
		
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
		photourl:'./../resources/images/user/avatar-m.png',
		
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
		photourl:'./../resources/images/user/avatar-m.png',
		
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
		photourl:'./../resources/images/user/avatar-f.png',
		
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
		photourl:'./../resources/images/user/avatar-m.png',
		
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
		photourl:'./../resources/images/user/avatar-f.png',
		
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
		productname:'Air Jordan 1',
		description:'Lorem ipsum dolor sit amet consectetur adipisicing elit totam sapiente consectetur eligendi',
		rating:{
			average:5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/shoes.jpg',
		taglist:[
			'shoe',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Air Force One Rope',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/shoes1.jpg',
		taglist:[
			'shoe',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'T-Shirt',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/tshirt.jpg',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Cap',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'29.994',
		exprice:'149.99',
		photourl:'./../resources/images/merch/hat.jpg',
		taglist:[
			'hat',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Sunglasses',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/sunglasses.jpg',
		taglist:[
			'glasses',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/p2.jpg',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/p3.jpg',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/p4.jpg',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/p5.jpg',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	},
	{
		productname:'Lorem',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing',
		rating:{
			average:4.5,
			numratings:137
		},
		price:'99.99',
		exprice:'149.99',
		photourl:'./../resources/images/merch/p7.jpg',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	}
];
