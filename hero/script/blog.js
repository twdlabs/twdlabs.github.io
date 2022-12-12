

// Create blog post elements. 
/* let */ result = '';
for(post of blog) {
	result += `
	<!-- item -->
	<div class="item">
		
		<!-- head -->
		<div class="head" style="background-image:url('${post.piclink}');">

			<!-- metadata -->
			<div class="metadata">

				<!-- date -->
				<span class="date meta">
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
					</svg>
					<span class="caption">21 May 2021</span>
				</span>
				<!-- /date -->

				<!-- author -->
				<span class="author meta">
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
					</svg>
					<span class="caption">Admin</span>
				</span>
				<!-- /author -->

			</div>
			<!-- /metadata -->

		</div>
		<!-- /head -->
		
		<!-- foot -->
		<div class="foot">
			<h3 class="title">${post.title}</h3>
			<p class="textcopy">${post.content}</p>
			<a class="link" href="${post.link}">Read more</a>
		</div>
		<!-- /foot -->

	</div>
	<!-- /item -->`;
}

// Insert blog post elements into page. 
/* let */ inserthere = document.querySelector('section#blog main');
inserthere.innerHTML = result;
