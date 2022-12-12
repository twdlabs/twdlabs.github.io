

// Create portfolio elements. 
let result = '';
for(work of portfolio) {
	result += `
	<!-- item -->
	<div class="item" style="background-image:url('${work.piclink}');">
		<div class="inner">
			<h3 class="name">${work.name}</h3>
			<p class="textcopy">${work.description}</p>
			<a class="link" href="${work.link}">Read more</a>
		</div>
	</div>
	<!-- /item -->`;
}

// Insert portfolio elements into page. 
let inserthere = document.querySelector('section#portfolio main');
inserthere.innerHTML = result;
