let studentCollegeDetails = {
  college: "pvpsit",
  city: "vijayawada",
  phno: 26352632,
  branch: "CSE",
};

let std1 = {
  sno: 1,
  name: "ravi",
};

let std2 = {
  sno: 2,
  name: "bhanu",
};

//set studentCollegeDetails as prototytpe of std1
Object.setPrototypeOf(std1, studentCollegeDetails);

//set studentCollegeDetails as prototytpe of std2
Object.setPrototypeOf(std2, studentCollegeDetails);
console.log(std1.city);
console.log(std2.city);

//modern syntax

class College {
    constructor(collegeName,city){
        this.collegeName=collegeName;
        this.city=city;
    }
}

class Student extends College {
    constructor(collegeName,city,sno,name){
        //invoke parent class constructor
        super(collegeName,city)
        this.sno=sno;
        this.name=name
    }
}

//create obj for student
let std3=new Student('pvpsit','vijayawada',3,'abcd')

console.log(std3)