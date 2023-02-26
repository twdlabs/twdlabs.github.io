


// Define theme class names. 
const themes = ['b','y','p','g','d'];

// Toggle theme selector. 
function toggleThemeSelector() {
	// 
	themeselector.classList.toggle('active')
}

// Select theme. 
function selectTheme(t) {

	// De-activate all themes. 
	for(let ot of themes) {
		container.classList.remove(ot);
	}

	// Activate selected theme. 
	container.classList.add(t);
}
