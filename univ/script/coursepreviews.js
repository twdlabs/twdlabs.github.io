

// Show course data. 
console.log('Course data:',courseData);

for(let course of courseData) {
	console.log(`${course.deptid} ${course.coursenumber}: ${course.coursename}`);
}


/*****/


// Get course by id. 
function getCourseById(courseid) {

	// Initialize result. 
	let result = undefined;

	// Go thru course objects. 
	for(let course of courseData) {

		// Check for matching course. 
		if(courseid.toUpperCase()==course.deptid+' '+course.coursenumber) {

			// Save matching course as result. 
			result = course;

			// End loop after match found. 
			break;
		}
	}

	// Return matching course. 
	return result;
}
