

// Define navigation data. 
const navdata = [
	{
		title:'Nav Links',
		data:[
			{
				name:'Home',
				url:'/'
			},
			{
				name:'About',
				url:'/about'
			},
			{
				name:'Shop',
				url:'/gallery'
			},
			// {
			// 	name:'Messages',
			// 	url:'/messages'
			// },
			{
				name:'Contact',
				url:'/contact'
			},
			{
				name:'Blog',
				url:'/blog'
			},
		]
	},
	{
		title:'My Links',
		data:[
			{
				name:'My Account',
				url:'/account'
			},
			{
				name:'My Favorites',
				url:'/favs'
			},
			{
				name:'My Cart',
				url:'/cart'
			},
			{
				name:'My Orders',
				url:'/orders'
			},
		]
	},
	{
		title:'Policy Links',
		data:[
			{
				name:'Terms of Use',
				url:'/terms'
			},
			{
				name:'Privacy Policy',
				url:'/privacy'
			},
			{
				name:'Return Policy',
				url:'/returns'
			},
			{
				name:'FAQ',
				url:'/faq'
			},
		]
	},
	{
		title:'Contact Us',
		data:[
			{
				name:'Messenger',
				url:'javascript:void(0)',
				innersvg:'<path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>'
			},
			{
				name:'WhatsApp',
				url:'javascript:void(0)',
				innersvg:'<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>'
			},
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
		]
	},
	{
		title:'Follow Us',
		data:[
			{
				name:'Facebook',
				url:'javascript:void(0)',
				innersvg:'<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>'
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
			{
				name:'Snapchat',
				url:'javascript:void(0)',
				innersvg:'<path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z"/>'
			},
			{
				name:'TikTok',
				url:'javascript:void(0)',
				innersvg:'<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>'
			},
			{
				name:'Tumblr',
				url:'javascript:void(0)',
				innersvg:'<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>'
			},
			{
				name:'GitHub',
				url:'javascript:void(0)',
				innersvg:'<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'
			},
			{
				name:'LinkedIn',
				url:'javascript:void(0)',
				innersvg:'<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>'
			},
			{
				name:'Pinterest',
				url:'javascript:void(0)',
				innersvg:'<path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>'
			},
			{
				name:'YouTube',
				url:'javascript:void(0)',
				innersvg:'<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>'
			},
			{
				name:'Vimeo',
				url:'javascript:void(0)',
				innersvg:'<path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z"/>'
			},
		]
	},
];


// Define customer account data. 
const userdata = [
	{
		fname:'User',
		lname:'Name',
		email:'User@mail.com',
		photourl:'./assets/images/user/avatar-m.png',
		
		// Define initial list of liked products. 
		favIds:[],
		
		// Define initial list of products in cart. 
		cartItems:[]
	},
	{
		fname:'Mike',
		lname:'Smith',
		email:'MikeSmith@mail.com',
		photourl:'./assets/images/user/avatar-m.png',
		
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
		photourl:'./assets/images/user/avatar-m.png',
		
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
		photourl:'./assets/images/user/avatar-f.png',
		
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
		photourl:'./assets/images/user/avatar-m.png',
		
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
		photourl:'./assets/images/user/avatar-f.png',
		
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
		photourl:'./assets/images/user/avatar-m.png',
		
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
		photourl:'./assets/images/user/avatar-m.png',
		
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
		photourl:'./assets/images/user/avatar-f.png',
		
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
		photourl:'./assets/images/user/avatar-m.png',
		
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
		photourl:'./assets/images/user/avatar-f.png',
		
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
		photourl:'./assets/images/product/shoes.jpg',
		// producturl:'./product/',
		taglist:[
			'shoe',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/shoes1.jpg',
		// producturl:'./product/',
		taglist:[
			'shoe',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/tshirt.jpg',
		// producturl:'./product/',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/hat.jpg',
		// producturl:'./product/',
		taglist:[
			'hat',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/sunglasses.jpg',
		// producturl:'./product/',
		taglist:[
			'glasses',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/p2.jpg',
		// producturl:'./product/',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/p3.jpg',
		// producturl:'./product/',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/p4.jpg',
		// producturl:'./product/',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/p5.jpg',
		// producturl:'./product/',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
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
		photourl:'./assets/images/product/p7.jpg',
		// producturl:'./product/',
		taglist:[
			'shirt',
			// 'xyzabcxyz',
		]
	}
];


// Define stars for customer ratings. 
const stars = {
	full:'<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>',
	half:'<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg>',
	empty:'<svg class="star" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'
}
