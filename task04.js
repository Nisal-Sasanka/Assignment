console.log("\n Task 4.1 ");

const students = [
    {name: "Kavindu", age: 21, faculty: "Computing"},
    {name: "Nimesha", age: 22, faculty: "Engineering"},
    {name: "Dinuka", age: 23, faculty: "Business"}
];

// print names
students.forEach(s => console.log(s.name));

// filter students older than 21
const older = students.filter(s => s.age > 21);
console.log("Students older than 21:", older);

// map → get all faculty names
const faculties = students.map(s => s.faculty);
console.log("Faculties:", faculties);


// Task 4.2
console.log("\n Task 4.2 ");

const classroom = {
    className: "IT2025",
    teacher: "Mr. Perera",
    students: [
        {name: "Kavindu", age: 21},
        {name: "Nimesha", age: 22},
        {name: "Dinuka", age: 23}
    ]
};

// print teacher name
console.log("Teacher:", classroom.teacher);

// add new student
classroom.students.push({name: "Sithum", age: 20});

// print student names
console.log("Students in classroom:");
classroom.students.forEach(s => console.log(s.name));

