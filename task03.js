console.log("\n Task 3.1 ");

const student = {
    name: "Kavindu",
    age: 21,
    faculty: "Computing",
    subjects: ["Web Development", "Database Systems", "Programming"]
};

// print properties
console.log("Name:", student.name);
console.log("Faculty:", student.faculty);

// add new property
student.year = 2025;

// update age
student.age = 22;

// print subjects
console.log("Subjects:");
student.subjects.forEach(sub => console.log(sub));