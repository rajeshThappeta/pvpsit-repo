//person object
let person = {
  id: 100,
  name: "ravi",
};

//accessing properties
console.log(person.id);
console.log(person.name);
console.log(person["id"]);

//iterate (for-in)
for (let key in person) {
  console.log(person[key]);
}

//Insert
person.city = "hyd";
//Delete
delete person.id;
//Update
person.name = "kiran";

console.log(person);

let sno = 123;

//complex object
let student = {
  sno: 100,
  name: "bhanu",
  city: "vijayawada",
  marks: [90, 89, 56],
  address: {
    plot: 302,
    street: "benz circle",
  },
  getAverage: function () {
    console.log("sno is ", this.sno);
    console.log(sno);
    //business logic to find average marks
  },
};

console.log(student.marks);
console.log(student.address.street);
student.getAverage();

let product = {
  productId: 123,
  name: "TV",
  brand: "Sony",
  reviews: [
    {
      user: "ravi",
      comment: "good product",
    },
    {
      user: "bhanu",
      comment: "average product",
    },
    {
      user: "manasa",
      comment: "worth to buy",
    },
  ],
};


[1,2,3]//array of numbers
['abc','cde']//array of strings
[{},{},{}] //array of objects