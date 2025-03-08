
//Inheritance (Student is a Person)
    //class
    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
    }

    class Student extends Person{
        constructor(name,age,course,collegeFee){
            //call to parent class constructor
            super(name,age)
            this.course=course;
            this.collegeFee=collegeFee;
        }
    }


    //create student obj
    let std=new Student("ravi",21,'B.Tech',150000);
    console.log(std)


    //constructor function
        function Person1(name,age){
            this.name=name;
            this.age=age;
        }


        function Student1(name,age,course,collegeFee){
            //pass name and age to Person1
            Person1.call(this,name,age)
            this.course=course;
            this.collegeFee=collegeFee;
        }

        //set Person prototype to Student prototype
        Student1.prototype=Object.create(Person1.prototype)


         //create student obj
        let std1=new Student1("manasa",21,'B.Tech',150000);
        console.log(std1)



// composition(has a relationship)
        //person has an address
        class Address{
            constructor(city,pincode){
                this.city=city;
                this.pincode=pincode;
            }
        }

        class Person2{
            constructor(name,address){
                this.address=address;
                this.name=name;
            }
        }

       
        let address=new Address('hyd',555555)
        let person1=new Person2('kiran',address)
        let person2=new Person2('Vikas',address)

        console.log(person1)
        console.log(person2)


         //car has an engine