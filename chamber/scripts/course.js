const courses = [
    { name: "CSE 110", category: "CSE", completed: true, credits: 3 },
    { name: "WDD 130", category: "WDD", completed: true, credits: 3 },
    { name: "CSE 111", category: "CSE", completed: false, credits: 3 },
    { name: "CSE 210", category: "CSE", completed: true, credits: 4 },
    { name: "WDD 131", category: "WDD", completed: false, credits: 3 },
    { name: "WDD 231", category: "WDD", completed: true, credits: 3 }
];


const courseContainer = document.querySelector('.course-list');
const totalCreditsDisplay = document.querySelector('.total-credits');

function displayCourses(filteredCourses) {
    courseContainer.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        

        if (course.completed) {
            courseDiv.classList.add('completed');
        }

        courseDiv.textContent = `${course.name} (${course.credits} credits)`;
        courseContainer.appendChild(courseDiv);
    });

    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
}


function filterCourses(category) {
    if (category === 'All') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.category === category);
        displayCourses(filteredCourses);
    }
}

document.querySelector('.filter-all').addEventListener('click', () => filterCourses('All'));
document.querySelector('.filter-cse').addEventListener('click', () => filterCourses('CSE'));
document.querySelector('.filter-wdd').addEventListener('click', () => filterCourses('WDD'));


displayCourses(courses);
