


// Define video data. 
let videoData = [
	{
		title:'Video Title A',
		authorid:0,
		viewcount:1,
		uploaddate:1640533308052,
		vidurl:'media/0000001.mp4',
		thumbnailurl:'pic/0000001.png',
	},
	{
		title:'Video Title B',
		authorid:7,
		viewcount:12,
		uploaddate:1640533308052,
		vidurl:'media/0000002.mp4',
		thumbnailurl:'pic/0000002.png',
	},
	{
		title:'Video Title C',
		authorid:1,
		viewcount:123,
		uploaddate:1640533308052,
		vidurl:'media/1436812.mp4',
		thumbnailurl:'pic/1436812.png',
	},
	{
		title:'Video Title D',
		authorid:6,
		viewcount:1234,
		uploaddate:1640533308052,
		vidurl:'media/1437396.mp4',
		thumbnailurl:'pic/1437396.png',
	},
	{
		title:'Video Title E',
		authorid:2,
		viewcount:12045,
		uploaddate:1640533308052,
		vidurl:'media/1583096.mp4',
		thumbnailurl:'pic/1583096.png',
	},
	{
		title:'Video Title F',
		authorid:5,
		viewcount:123456,
		uploaddate:1640533308052,
		vidurl:'media/1644693.mp4',
		thumbnailurl:'pic/1644693.png',
	},
	{
		title:'Video Title G',
		authorid:3,
		viewcount:1234567,
		uploaddate:1640533308052,
		vidurl:'media/1654216.mp4',
		thumbnailurl:'pic/1654216.png',
	},
	{
		title:'Video Title H',
		authorid:4,
		viewcount:12345678,
		uploaddate:1640533308052,
		vidurl:'media/1720219.mp4',
		thumbnailurl:'pic/1720219.png',
	},
	{
		title:'Video Title I',
		authorid:0,
		viewcount:1234567890,
		uploaddate:1640533308052,
		vidurl:'media/1722697.mp4',
		thumbnailurl:'pic/1722697.png',
	},
	{
		title:'Video Title J',
		authorid:0,
		viewcount:12345678901,
		uploaddate:1640533308052,
		vidurl:'media/1723017.mp4',
		thumbnailurl:'pic/1723017.png',
	},
	{
		title:'Video Title K',
		authorid:0,
		viewcount:123456789012,
		uploaddate:1640533308052,
		vidurl:'media/2063228.mp4',
		thumbnailurl:'pic/2063228.png',
	},
	{
		title:'Video Title L',
		authorid:0,
		viewcount:1234567890123,
		uploaddate:1640533308052,
		vidurl:'media/2169880.mp4',
		thumbnailurl:'pic/2169880.png',
	},
	{
		title:'Video Title M',
		authorid:0,
		viewcount:12345678901234,
		uploaddate:1640533308052,
		vidurl:'media/2231485.mp4',
		thumbnailurl:'pic/2231485.png',
	},
	{
		title:'Video Title N',
		authorid:0,
		viewcount:123456789012345,
		uploaddate:1640533308052,
		vidurl:'media/2818546.mp4',
		thumbnailurl:'pic/2818546.png',
	},
];


// Define customer account data. 
const userdata = [
	{
		name:'UserName A',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName B',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName C',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName D',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName E',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName F',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName G',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
	{
		name:'UserName H',
		email:'UserName@mail.com',
		photourl:'pic/avatar-m.png',
		
		// Define initial list of liked videos. 
		likedIds:[ 8, 2, 5, 7 ],
		
		// Define initial list of disliked videos. 
		dislikedIds:[ 3, 4 ],
		
		// Define initial list of downloaded videos. 
		downloadedIds:[ 8, 5, 2 ],
		
		// Define initial list of downloaded videos. 
		savedIds:[ 8, 5, 13, 2 ],
		
		// Define initial list of playlists. 
		playlists:[
			{
				plistname:'Playlist Name',
				vidIds:[ 2, 5, 3, 6, 7, 1 ]
			}
		],
		
		// Define initial subscriptions. 
		subscriptions:[ 7, 5, 1, 2, 0 ],
		
		// Define initial subscriber count. 
		subscribercount:6789,
	},
];
