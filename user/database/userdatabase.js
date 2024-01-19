


// Define metadata for list of user data. 
const userListMetaData = 
{
	username:{
		label:'Username',
		visible:true,
	},
	fname:{
		label:'First Name',
		visible:false,
	},
	lname:{
		label:'Last Name',
		visible:false,
	},
	fullname:{
		label:'Full Name',
		visible:true,
	},
	admin:{
		label:'Admin?',
		visible:false,
	},
	mobilenumber:{
		label:'Mobile Number',
		visible:true,
	},
	email:{
		label:'Email Address',
		visible:true,
	},
	password:{
		label:'Password',
		visible:false,
	},
	avatarurl:{
		label:'Avatar',
		visible:true,
		showimage:true,
	},
	position:{
		label:'Position',
		visible:true,
	},
	bio:{
		label:'Brief Bio',
		visible:false,
	},
};


// Define user constructor function. 
function User(fname,lname,admin,avatarurl) {

	// 
	this.fname = fname;
	this.lname = lname;
	// this.fullname = fullname;

	// 
	this.admin = admin;
	this.avatarurl = avatarurl;

	// // 
	// this.email = email;
	// this.username = username;
	// this.password = password;
	// this.mobilenumber = mobilenumber;
	// this.position = position;
	// this.bio = bio;
}


// Define list of positions. 
// const positionList = ['Lawyer','Accountant','Chairman','CFO','CFO',];
const positionList = ['UX Designer','UI Designer','Website Developer','Quality Assurance Tester',];

// Get avatar urls. 
let avatarm = './../resources/images/user/avatar-m.png';
let avatarf = './../resources/images/user/avatar-f.png';


// Define default list of user data. 
const defaultUserData = [
	new User('Ace','Ventura',true,avatarm,),
	new User('Bill','Diamond',false,avatarm,),
	new User('Christine','Brophy',false,avatarf,),
	new User('David','Doe',false,avatarm,),
	new User('Eli','Jah',false,avatarm,),
	new User('Fred','Flinstone',false,avatarm,),
	new User('George','Doe',false,avatarm,),
	new User('Hilary','Doe',false,avatarf,),
	new User('Ian','Robertson',false,avatarm,),
	new User('Jane','Doe',false,avatarf,),
	new User('Jay','Jenkins',false,avatarm,),
	new User('Jenny','Joe',false,avatarf,),
	new User('Jill','Jackson',false,avatarf,),
	new User('Jim','Doe',false,avatarm,),
	new User('Joe','Doe',false,avatarm,),
	new User('John Luke','Smith',false,avatarm,),
	new User('Kate','Croix',true,avatarf,),
	new User('Leah','Lloyd',false,avatarf,),
	new User('Mike','Myers',false,avatarm,),
	new User('Nina','Nash',false,avatarf,),
	new User('Oscar','DeLaHoya',false,avatarm,),
	new User('Peter','Pan',false,avatarm,),
	new User('Quinten','Doe',false,avatarm,),
	new User('Rachel','Roy',false,avatarf,),
	new User('Steve','Stephens',false,avatarm,),
	new User('Tim','Toole',false,avatarm,),
	new User('Tori','Doe',false,avatarf,),
	new User('Ursula','Doe',false,avatarf,),
	new User('Victor','Victorian',false,avatarm,),
	new User('Wendy','Will',false,avatarf,),
	new User('Xavier','Toven',false,avatarm,),
	new User('Yolanda','Yokes',false,avatarf,),
];
// console.log('Default user data:',defaultUserData);

// Initialize list of user data. 
let userDataList = [];
userDataList = defaultUserData;


/*****/


// Add supplemental user data to default list. 
completeDefaultUserData();
// console.log('User list:', userDataList.map( (u)=>(u.username) ) );


/*****/


// Add supplemental user data to default list. 
function completeDefaultUserData() {
	// console.log('Completing default user data...');

	// Go thru all user data in default list. 
	for(let user of defaultUserData) {

		// Auto-generate full name. 
		user.fullname = generateFullName(user);
		// Auto-generate user id from name. 
		user.username = generateUsername(user);
		// Auto-generate default email address. 
		user.email = generateEmailAddress(user.username);
		// Add default password. 
		user.password = generatePassword(user.username);
		// Add default mobile number. 
		user.mobilenumber = createPhoneNumber();

		// Auto-generate random position. 
		user.position = positionList[Math.floor( Math.random() * (positionList.length) )];
		// Auto-generate default bio. 
		user.bio = `This is a brief bio of ${ user.fullname }, a ${ user.position } who has the username \'${ user.username }\'. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint consequatur tempore! Doloremque est dolorum modi repellat aspernatur non consequatur quia, dignissimos optio nemo omnis quidem provident ipsam commodi animi.`;
	}

	/****/

	// Create phone number. 
	function createPhoneNumber() {

		// 
		let result = '';
		result += `+1 (${ getAreaCode() }) `;
		// result += '456';
		// result += '-';
		// result += '7890';
		result += getRandomDigit(1,9);
		result += getRandomDigit(0,9);
		result += getRandomDigit(0,9);
		result += '-';
		result += getRandomDigit(0,9);
		result += getRandomDigit(0,9);
		result += getRandomDigit(0,9);
		result += getRandomDigit(0,9);

		// 
		return result;

		/***/

		// Get area code. 
		function getAreaCode() {
	
			// Define list of area codes (courtesy of Ludacris & Nate Dogg). 
			const areaCodeList = [
				770,404,718,202,901,
				305,312,313,215,803,
				757,410,213,212,504,
				972,713,314,201,212,
				213,916,415,704,206,
				808,216,702,414,317,
				214,281,334,205,318,
				601,203,804,402,301,
				904,407,850,
			];
	
			// Get number of values. 
			let n = areaCodeList.length;
	
			// Choose a random index. 
			let i = Math.floor( n * Math.random() );
	
			// Return random area code. 
			return areaCodeList[i];
		}

		// Get random digit between given numbers. 
		function getRandomDigit(a,b) {

			// 
			let n = (b - a);

			// 
			return Math.floor( a + (n * Math.random()) );
		}
	}

	// Generate username using first initial and last name. 
	function generateUsername(user) {

		// Combine first initial with last name. 
		let f = (user.fname).substring(0,1);
		let ln = user.lname;
		let result = `${f}${ln}`;

		// Convert to all lowercase letters. 
		result = result.toLowerCase()

		// Remove any remaining spaces. 
		result = result.replace(' ','');

		// Return result. 
		return result;
	}
	// () => `${ (user.fname).substring(0,1) }${ (user.lname) }`.toLowerCase().replace(' ','')

	// Generate full name using first name and last name. 
	function generateFullName(user) {

		// Compile result. 
		return `${user.fname} ${user.lname}`;
	}

	// Generate email address using username. 
	function generateEmailAddress(uname) {

		// Compile result. 
		return `${uname}@chat.com`;
	}

	// Generate default password using username. 
	function generatePassword(uname) {

		// Compile result. 
		return `#${uname}!`;
	}
}

// Get user by id. 
function getUserById(id) {

	// Go thru all users. 
	for(let user of userDataList) {

		// Return user if found. 
		if(user.username==id) return user;
	}

	// Return nothing if user not found. 
	return null;
}
