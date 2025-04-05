//destructuring (unpacking)
//packing- array / object
let arr = [10, 5, 7, 90]
let person = {
    id: 10,
    name: 'ravi',
    age: 21
}

//unpack array
// for(let v of arr){
//     console.log(v)
// }

let [a, b, c, d] = arr;
console.log(a)
console.log(b)

//unpack object
// for(let k in person){
//     console.log(person[k])
// }

let { id, name, age } = person;

console.log(id)
console.log(name)


let student = {
    rollno: 100,
    studentName: 'bhanu',
    address: {
        city: 'vijayawada',
        pincode: 999999
    }
}


let { rollno, studentName, address: { city, pincode } } = student;

console.log(rollno)
console.log(studentName)
//console.log(address)
console.log(city)
console.log(pincode)




//types of params
    //default value params
function test(a=1,b=1) {
    console.log("quotient is ", a / b)

}


test(1)

//rest param
function findSum(...a){
   
    let sum=a.reduce((acc,element)=>acc+element)
    console.log(sum)
}


findSum(1,2,3,4,23,34,45,45,45,45,45,33,22,12,12,3,545,66,76,76,76,75,64,34,3,4)

//template literal


//Modules