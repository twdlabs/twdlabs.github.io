


// Define list of user data. 
const userDataList = [

	{
		// userid:'xyzabcxyz',
		fname:'Ace',
		lname:'Ventura',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Bill',
		lname:'Diamond',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Christine',
		lname:'Brophy',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	
	{
		// userid:'xyzabcxyz',
		fname:'David',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Eli',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Fred',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'George',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Hilary',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Ian',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jane',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jay',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jenny',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jill',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Jim',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Joe',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'John',
		lname:'Doe Smith',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Kate',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Leah',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Mike',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Nina',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Oscar',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Peter',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Quinten',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Rachel',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Steve',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Tim',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Tori',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Ursula',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Victor',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Wendy',
		lname:'Doe',
		avatarurl:'./images/avatar-f.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Xavier',
		lname:'Doe',
		avatarurl:'./images/avatar-m.png',
		position:'Website Designer',
	},
	{
		// userid:'xyzabcxyz',
		fname:'Yolanda',
		lname:'Doe',
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

		// Auto-generate user id. 
		let userid = (user.fname).substring(0,1) + (user.lname);
		userid = userid.toLowerCase();

		// Auto-generate default email address. 
		user.email = `${ userid }@mail.com`;

		// Add default password. 
		user.password = 'pw';

		// Auto-generate default bio. 
		user.bio = `This is a brief bio for ${userid}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint consequatur tempore! Doloremque est dolorum modi repellat aspernatur non consequatur quia, dignissimos optio nemo omnis quidem provident ipsam commodi animi.`;
	}
}
