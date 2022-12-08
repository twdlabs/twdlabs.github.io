
// Define chess piece data. 
const pieceData = [

	{
		id:'K',
		name:'king',
	},
	
	{
		id:'Q',
		name:'queen',
	},
	
	{
		id:'b',
		name:'bishop',
	},
	
	{
		id:'n',
		name:'knight',
	},
	
	{
		id:'r',
		name:'rook',
	},
	
	{
		id:'p',
		name:'pawn',
	},

];


// Define initial state  of piece data. 
const boardData = [
	
	{
		pieceid:'r',
		teamid:'light',
		boardlocation:'a1',
	},
	
	{
		pieceid:'n',
		teamid:'light',
		boardlocation:'b1',
	},
	
	{
		pieceid:'b',
		teamid:'light',
		boardlocation:'c1',
	},

	{
		pieceid:'k',
		teamid:'light',
		boardlocation:'d1',
	},
	
	{
		pieceid:'q',
		teamid:'light',
		boardlocation:'e1',
	},
	
	{
		pieceid:'b',
		teamid:'light',
		boardlocation:'f1',
	},
	
	{
		pieceid:'n',
		teamid:'light',
		boardlocation:'g1',
	},
	
	{
		pieceid:'r',
		teamid:'light',
		boardlocation:'h1',
	},
	
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'a2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'b2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'c2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'d2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'e2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'f2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'g2',
	},
	{
		pieceid:'p',
		teamid:'light',
		boardlocation:'h2',
	},



	
	{
		pieceid:'r',
		teamid:'dark',
		boardlocation:'a8',
	},
	
	{
		pieceid:'n',
		teamid:'dark',
		boardlocation:'b8',
	},
	
	{
		pieceid:'b',
		teamid:'dark',
		boardlocation:'c8',
	},
	
	{
		pieceid:'q',
		teamid:'dark',
		boardlocation:'d8',
	},

	{
		pieceid:'k',
		teamid:'dark',
		boardlocation:'e8',
	},
	
	{
		pieceid:'b',
		teamid:'dark',
		boardlocation:'f8',
	},
	
	{
		pieceid:'n',
		teamid:'dark',
		boardlocation:'g8',
	},
	
	{
		pieceid:'r',
		teamid:'dark',
		boardlocation:'h8',
	},
	
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'a7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'b7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'c7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'d7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'e7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'f7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'g7',
	},
	{
		pieceid:'p',
		teamid:'dark',
		boardlocation:'h7',
	},

];