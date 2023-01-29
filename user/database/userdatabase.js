


// Define list of user data. 
const userDataList = [

	{
		// userid:'xyzabcxyz',
		fname:'Ace',
		lname:'Ventura',
		admin:true,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Bill',
		lname:'Diamond',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Christine',
		lname:'Brophy',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	
	{
		// userid:'xyzabcxyz',
		fname:'David',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Eli',
		lname:'Jah',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Fred',
		lname:'Flinstone',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'George',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Hilary',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Ian',
		lname:'Robertson',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jane',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jay',
		lname:'Jenkins',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jenny',
		lname:'Joe',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jill',
		lname:'Jackson',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jim',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Joe',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'John Luke',
		lname:'Smith',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Kate',
		lname:'Croix',
		admin:true,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Leah',
		lname:'Lemons',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Mike',
		lname:'Myers',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Nina',
		lname:'Nash',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Oscar',
		lname:'DeLaHoya',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Peter',
		lname:'Pan',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Quinten',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Rachel',
		lname:'Roy',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Steve',
		lname:'Stephens',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Tim',
		lname:'Tool',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Tori',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Ursula',
		lname:'Doe',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Victor',
		lname:'Victory',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Wendy',
		lname:'Will',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Xavier',
		lname:'Toven',
		admin:false,
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Yolanda',
		lname:'Yokes',
		admin:false,
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},

];


/*****/


// Add supplemental user data. 
addUserData();


/*****/


// Add supplemental user data. 
function addUserData() {

	// 
	for(let user of userDataList) {

		// Auto-generate user id from name. <--could be a function
		user.userid = `${ (user.fname).substring(0,1) }${ user.lname }`.toLowerCase().replace(' ','');

		// Auto-generate full name. <--could be a function
		user.fullname = `${user.fname} ${user.lname}`;

		// Auto-generate default email address. <--could be a function
		user.email = `${ user.userid }@mail.com`;

		// Add default mobile number. 
		user.mobilenumber = '+1 (213) 456-7890';

		// Add default password. 
		user.password = user.userid+'!';

		// Auto-generate default bio. 
		user.bio = `This is a brief bio for ${ user.fname } ${ user.lname }, whose username is ${ user.userid }. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint consequatur tempore! Doloremque est dolorum modi repellat aspernatur non consequatur quia, dignissimos optio nemo omnis quidem provident ipsam commodi animi.`;
	}
}

// Get user by id. 
function getUserById(id) {

	// Go thru all users. 
	for(let user of userDataList) {

		// Return user if found. 
		if(user.userid==id) return user;
	}

	// Return nothing if user not found. 
	return null;
}
