
let a=10;

//basic operations on an object
let student={
    sno:100,
    name:"ravi",
    age:21,
    skills:["html",'react','angular'],
    address:{
        street:"benz circle",
        plotno:"67/34",
        city:"vijayawada"
    }
}


//access properties
// console.log(student.sno)
// console.log(student['sno'])

// console.log(student.name)
// console.log(student.dob)//undifined
// console.log(student.address.city)
// console.log(student.skills)

//iterate object(for-in loop)
for(let key in student){
   // console.log(key +" is "+student[key])
   console.log(student[key])
}

//insert property
student.phoneno=898989899;
student.qualification='Science graduate'

//delete property
delete student.sno

//update property
student.age=34;

let product={
    serialNo:12345,
    name:"Washing machine",
    brand:"LG",
    mrp:30000,
    discount:10,
    //method to return discount price
   
}

//salary=basic+hra(15% of basic)+da(10% basic)
//10000+1500+1000=12500

let employee={
    eno:100,
    name:"bhanu",
    basic:10000,
    getSalary:function(){
        //calculate salary
        let hra= 0.15*this.basic
        let da=0.10*this.basic;
        let salary=this.basic+hra+da;
        return salary;
    }

}

// "this" refers to current object

console.log(employee.getSalary())