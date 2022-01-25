

// 
let result = '';

// 
for(let index in podcastData) {
	let monthnames = [ 'Jan','Feb','Mar', 'Apr','May','Jun', 'Jul','Aug','Sep', 'Oct','Nov','Dec'];
	
	// 
	let n = 1*index + 1;
	// console.log('n',n);
	// console.log('n<10',n<10);
	
	// 
	let item = podcastData[index];
	let date = item.date;
	let mincount = 1*item.lengthmin;

	// 
	result += `
	<!-- item -->
	<div class="item">

		<!-- left -->
		<div class="left">
			<!-- albumart -->
			<img class="albumart" src="${item.arturl}">
			<!-- /albumart -->
		</div>
		<!-- /left -->

		<!-- right -->
		<div class="right">

			<!-- title -->
			<div class="title${ (item.playedbefore) ? ('') : (' new') }">
				<!-- caption -->
				<span class="caption">Episode ${ (n<10) ? ('00'+n) : ( (n<100)?('0'+n):(''+n) ) }: ${item.title}</span>
				<!-- /caption -->
			</div>
			<!-- /title -->

			<!-- excerpt -->
			<div class="excerpt">${item.description}</div>
			<!-- /excerpt -->

			<!-- bar -->
			<div class="bar">

				<!-- playbtn -->
				<a class="playbtn" href="javascript:void(0)">
					<!-- icon -->
					<svg class="icon" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
					</svg>
					<!-- /icon -->
				</a>
				<!-- /playbtn -->

				<!-- metadata -->
				<div class="metadata">

					<!-- icon -->
					<svg class="icon explicit${ (!item.isexplicit) ? (' gone') : ('') }" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
						<path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11Zm4.326 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z"/>
					</svg>
					<!-- /icon -->

					<!-- date -->
					<span class="date">${ monthnames[date.m-1]} ${date.d}</span>
					<!-- /date -->

					<!-- bull -->
					<span class="bull">&bull;</span>
					<!-- /bull -->

					<!-- length -->
					<span class="length">${ (mincount<60) ? (`${mincount}min`) : (`${Math.floor(mincount/60)}hr ${mincount%60}min`) }</span>
					<!-- /length -->

				</div>
				<!-- /metadata -->

			</div>
			<!-- /bar -->

		</div>
		<!-- /right -->

	</div>
	<!-- /item -->`;
}

// 
document.getElementById('main').innerHTML = result;
