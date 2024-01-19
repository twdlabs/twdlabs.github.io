
let result = '';

for(let post of postdata) {

	let username = userdata[post.authorid].name;
	let userpicurl = userdata[post.authorid].photourl;

	result += `
	<!-- post -->
	<div class="post">

	<!-- author -->
	<div class="author">
		
		<!-- avatar -->
		<a class="avatar" href="javascript:void(0)">
			<img src="${userpicurl}"/>
		</a>
		<!-- /avatar -->
		
		<!-- textcopy -->
		<div class="textcopy">
			
			<!-- username -->
			<a class="username" href="javascript:void(0)">${username}</a>
			<!-- /username -->
			
			<!-- description -->
			<div class="description">
				This is the post description
			</div>
			<!-- /description -->
			
		</div>
		<!-- /textcopy -->
		
		<!-- overflowmenu -->
		<div class="overflowmenu">

			<!-- btn -->
			<div class="btn">
				
				<!-- icon -->
				<svg class="icon dots" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
				</svg>
				<!-- /icon -->

			</div>
			<!-- /btn -->
		
		</div>
		<!-- /overflowmenu -->
	
	</div>
	<!-- /author -->
	
	<!-- media -->
	<div class="media">
		<img src="abc.png"/>
		<video src="${post.vidurl}"></video>
	</div>
	<!-- /media -->
	
	<!-- reactbox -->
	<div class="reactbox">
		
		<!-- btn -->
		<div class="btn toggle">
			<!-- icon -->
			<svg class="icon heart off" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
			</svg>
			<!-- /icon -->

			<!-- icon -->
			<svg class="icon heart on" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
			</svg>
			<!-- /icon -->
		</div>
		<!-- /btn -->
		
		<!-- btn -->
		<div class="btn">
			<!-- icon -->
			<svg class="icon chatbubble" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
				<!-- <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> -->
			</svg>
			<!-- /icon -->
		</div>
		<!-- /btn -->
		
		<!-- btn -->
		<div class="btn">
			<!-- icon -->
			<svg class="icon share" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
			</svg>
			<!-- /icon -->
		</div>
		<!-- /btn -->
		
		<!-- space -->
		<div class="space"></div>
		<!-- /space -->
		
		<!-- btn -->
		<div class="btn toggle">
			<!-- icon -->
			<svg class="icon bookmark off" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
			</svg>
			<!-- /icon -->

			<!-- icon -->
			<svg class="icon bookmark on" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
			</svg>
			<!-- /icon -->
		</div>
		<!-- /btn -->
		
	</div>
	<!-- /reactbox -->
	
	<!-- likebox -->
	<div class="likebox">
		
		<!-- avatar -->
		<span class="avatar"></span>
		<!-- /avatar -->
		
		<!-- textcopy -->
		<div class="textcopy">
			Liked by 
			<a id="likeuser" href="javascript:void(0)">username</a> 
			and 
			<span id="likecount">100</span> others
		</div>
		<!-- /textcopy -->
		
	</div>
	<!-- /likebox -->
	
	<!-- commentbox -->
	<div class="commentbox">
		
		<!-- #caption -->
		<div id="caption">
								
			<!-- username -->
			<a class="username" href="javascript:void(0)">${username}</a>
			<!-- /username -->
			
			<!-- content -->
			<span class="content">This is a post caption</span>
			<!-- /content -->

		</div>
		<!-- /#caption -->
		
		<!-- #comments -->
		<div id="comments">
			
			<!-- comment -->
			<div class="comment">
				
				<!-- username -->
				<a class="username" href="javascript:void(0)">${'username'}</a>
				<!-- /username -->
				
				<!-- content -->
				<span class="content">This is a post comment</span>
				<!-- /content -->
				
			</div>
			<!-- /comment -->
			
		</div>
		<!-- /#comments -->
		
	</div>
	<!-- /commentbox -->
	
	<!-- time -->
	<div class="time">3 hours ago</div>
	<!-- /time -->
	
	</div>
	<!-- /post -->`;
}

document.querySelector('div#container main').innerHTML = result;


let togglebtns = document.querySelectorAll('div.reactbox div.btn.toggle');
for(let btn of togglebtns) btn.addEventListener('click',(event)=>{event.currentTarget.classList.toggle('active');})
