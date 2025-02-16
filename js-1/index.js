//all data types

//number
let a=10;
let b=23.45

//string
let c='hello'
let d="hello"

//boolean
let e=true;

console.log(typeof e)
console.log("value of e is ",e)


//array
let marks=[100,98,67]
let names=['ravi','kiran','madhu']
console.log(typeof marks)

//object
let person={
    pid:100, //property ( key : value )
    name:'Ravi',
    age:24,
    email:'ravi@mail.com'
}

console.log(typeof person)

//function declaration
function test(){
    return "test called"
}

console.log(typeof test)
//call function
let result=test()
console.log(result)