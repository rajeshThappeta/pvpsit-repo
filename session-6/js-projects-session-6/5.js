//object literal ( multiple objects of different types)
let person={
    pid:100,
    name:'ravi'
}


//multiple objects of same type
    //create class
    class Student{
        //initialize an object
        constructor(sno,name){
            this.sno=sno;
            this.name=name;
        }
        //methods
        getStudent(){
            console.log("Sno :",this.sno)
            console.log("Name :",this.name)
        }
    }

    //create objects for that class
    let std1=new Student(1,'manohar')
    let std2=new Student(2,'vikas')
    console.log(std1)
    console.log(std2)