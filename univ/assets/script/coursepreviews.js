

// Show preview of course data. 
showCourseData();

let c = getCourseById('CIS 255');
console.log('c:',c);


/*****/


// Show preview of course data. 
function showCourseData() {
	console.log('Course data:',courseData);

	for(let course of courseData) {
		console.log(`${course.programid} ${course.coursenumber}: ${course.title}`);
	}
}

// Get course by id. 
function getCourseById(courseid) {

	// Ensure capitalization of course id. 
	courseid = courseid.toUpperCase();

	// Go thru all course data items. 
	for(let course of courseData) {

		// Check for matching course. 
		let matchingCourse = courseid == (course.programid+' '+course.coursenumber);

		// Return matching course if found. 
		if( matchingCourse ) return course;
	}

	// Return nothing if course not found. 
	return null;
}
