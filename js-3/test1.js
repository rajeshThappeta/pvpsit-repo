//object literal(objects of different types)
let person={
    pid:100,
    name:'ravi',
    getDetails:function(){
        console.log(this.pid,this.name)
    }
}


person.getDetails()

let tv={
    sno:100,
    brand:'sony'
}

let dog={
    breed:'golden retriver',
    color:'brown'
}

//10 x 100= 1000 lines of code
// 10 + 100 = 110 lines of code

//Constructor function or Class(multiple objects of same type)
  //Create a type(Constructor function or Class)
    // function Student(sno,name,age,branch){
    //     //object initialization logic
    //     this.sno=sno; //sno:
    //     this.name=name;
    //     this.age=age;
    //     this.branch=branch;
      
    // }

    // //add methods to prototype of constructor
    // Student.prototype.getStudentDetails=function(){
    //     console.log(this.sno,this.name)
    // }


        class Student{

            constructor(sno,name,age,branch){
                //object initialization logic
                this.sno=sno;
                this.name=name;
                this.age=age;
                this.branch=branch;
            }

            //methods
            getStudentDetails(){
                console.log(this.sno,this.name)
            }
        }



  //create objects of that type
  let std1=new Student(100,'ravi',21,'cse')
  
  console.log(std1)
  let std2=new Student(200,'bhanu',21,'ece')
  console.log(std2)
  