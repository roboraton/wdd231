const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, type: "WDD", completed: false },
  { code: "CSE110", name: "Programming Building Blocks", credits: 2, type: "CSE", completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 3, type: "CSE", completed: false },
  { code: "CSE210", name: "Programming with Classes", credits: 3, type: "CSE", completed: false },
  { code: "WDD231", name: "Frontend Web Development I", credits: 3, type: "WDD", completed: false }
];

const courseContainer = document.getElementById("course-cards");
const totalCredits = document.getElementById("total-credits");

function displayCourses(filteredCourses) {
  courseContainer.innerHTML = "";
  let credits = 0;

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p>`;
    courseContainer.appendChild(card);
    credits += course.credits;
  });

  totalCredits.textContent = `Total credits for courses listed above is ${credits}`;
}

document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("cse").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "CSE")));
document.getElementById("wdd").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "WDD")));

displayCourses(courses);