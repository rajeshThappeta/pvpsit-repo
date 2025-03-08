//Array of objects
let students = [
    { sno: 1, name: "ravi", marks: 80, city: "hyderabad" },
    { sno: 2, name: "kiran", marks: 179, city: "vijayawada" },
    { sno: 3, name: "manasa", marks: 68, city: "warangal" }
];


//find 
//students from vijayawada city(find())
let studentsOfVij = students.find(studentObj => studentObj.city === 'vijayawada')
console.log(studentsOfVij)
//find the sum of marks of all students(reduce())
//find the student who has secured highest mark
let studentWIthHighMark = students.reduce((acc, studentObj) => acc.marks > studentObj.marks ? acc : studentObj);
console.log(studentWIthHighMark)
//find students from city "guntur"(find())

