
// Student Dataset
const students = [
    { id: 1, name: "Rahul", marks: 85, city: "Delhi" },
    { id: 2, name: "Priya", marks: 92, city: "Mumbai" },
    { id: 3, name: "Amit", marks: 45, city: "Patna" },
    { id: 4, name: "Sneha", marks: 76, city: "Pune" },
    { id: 5, name: "Rohit", marks: 35, city: "Delhi" }
];

// Arrow Function
const displayMessage = () => {
    console.log("Welcome to Student Marks Dashboard!");
};

displayMessage();

// Array Destructuring
const [firstStudent, secondStudent] = students;

console.log("First Student:", firstStudent.name);
console.log("Second Student:", secondStudent.name);

// Object Destructuring
const { name, marks, city } = firstStudent;

console.log(`Student: ${name}, Marks: ${marks}, City: ${city}`);

// filter() - Students scoring 50 or more
const passedStudents = students.filter(
    ({ marks }) => marks >= 50
);

console.log("Passed Students:", passedStudents);

// map() - Get student names
const studentNames = students.map(
    ({ name }) => name
);

console.log("Student Names:", studentNames);

// reduce() - Calculate total marks
const totalMarks = students.reduce(
    (total, { marks }) => total + marks,
    0
);

console.log("Total Marks:", totalMarks);

// Calculate Average
const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);

// Template Literal
const welcomeText = (studentName) => {
    return `Hello ${studentName}! Welcome to the dashboard.`;
};

console.log(welcomeText("Rahul"));

// Interactive Component
const studentList = document.getElementById("studentList");
const searchBtn = document.getElementById("searchBtn");
const showAllBtn = document.getElementById("showAllBtn");
const studentNameInput = document.getElementById("studentName");
const averageElement = document.getElementById("averageMarks");

// Display Students
const renderStudents = (studentData) => {

    if (studentData.length === 0) {
        studentList.innerHTML = "<p>No students found.</p>";
        return;
    }

    studentList.innerHTML = studentData.map(
        ({ name, marks, city }) => `
            <div class="student-card">
                <h3>${name}</h3>
                <p>Marks: ${marks}</p>
                <p>City: ${city}</p>
            </div>
        `
    ).join("");
};

// Search Student Event Listener
searchBtn.addEventListener("click", () => {

    const searchName = studentNameInput.value.trim().toLowerCase();

    const filteredStudents = students.filter(
        ({ name }) => name.toLowerCase().includes(searchName)
    );

    renderStudents(filteredStudents);
});

// Show All Students Event Listener
showAllBtn.addEventListener("click", () => {
    renderStudents(students);
    studentNameInput.value = "";
});

// Display Average Marks
averageElement.textContent =
    `Class Average Marks: ${averageMarks.toFixed(2)}`;

// Show all students initially
renderStudents(students);
