

// Get circle container. 
const circle = document.querySelector('main.symbol div.circle');

// Add lines. 
let result = '';
for(let i=0 ; i<36 ; i++) {
	result += `<span class="line long" style="--i:${i};"></span>`;
	result += `<span class="line short" style="--i:${i};"></span>`;
}

// Add needle. 
result += `<div class="needle"></div>`;

// Put lines and needle into circle. 
circle.innerHTML = result;
