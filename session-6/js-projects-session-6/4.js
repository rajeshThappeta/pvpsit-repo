let arr = [9, -23, 78, 65, 87, 12];

//filter(selection)
let result1 = arr.filter((element) => element > 50 && element < 80);

console.log(result1);

//map(modification)
let result2 = arr.map((element) => element + 10);
console.log(result2);

//add 10 for even number and 20 for odd numbers
let result3 = arr.map((element) => {
  if (element % 2 == 0) {
    return element + 10;
  } else {
    return element + 20;
  }
});
console.log(result3);

//forEach(iterate)
arr.forEach((element, index) => {
  console.log("element :", element, " at index :", index);
});

//search for element 20
let result5 = arr.find((element) => element === 78);
console.log(result5);

//search for index
let result6 = arr.findIndex((element) => element === 20);
console.log(result6);

let arr1 = [30, 20, 10];
//reduce (find sum of all elements)
let result7 = arr1.reduce((accumulator, element) => accumulator + element);
console.log(result7);

//find small element
let small = arr1.reduce((acc, element) => (acc < element ? acc : element));
console.log(small);

let emps = [
  {
    eno: 100,
    name: "ravi",
    age: 21,
    salary: 2000,
  },
  {
    eno: 200,
    name: "bhanu",
    age: 25,
    salary: 5000,
  },
  {
    eno: 300,
    name: "vikas",
    age: 30,
    salary: 30000,
  },
];
//Find the youngest emp
//give increment of 5000 for each emp
//find the emps whose age between 15 and 25

//sample obj
let testObj = {a: 10,b: 20,c: 30};

//get all keys
let k = Object.keys(testObj);
console.log(k);

//get values
let v = Object.values(testObj);
console.log(v);

//freeze , so that no changes can be done
Object.freeze(testObj);

//create copy of obj
let copy = Object.assign({}, testObj);
console.log(copy);

//merge objects
let obj1 = { x: 10};
let obj2={y:20};
let merged=Object.assign({},obj1,obj2)
console.log(merged)
