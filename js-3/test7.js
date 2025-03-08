let data=10;

//create copt of data
let copyData=data;

console.log("data :",data)
console.log("Copy data :",copyData)

//modify data
data=200;

console.log("data :",data)
console.log("Copy data :",copyData)


let obj={
    x:10,
    y:20
}

let arr=[1,2,3]

//create copy of obj
//let copyObj=obj; wrong
let copyObj={...obj}
let copyArr=[...arr]

//make change to obj
obj.x=123; 
arr.push(100)


console.log("obj :",obj)
console.log("copy obj :",copyObj)


console.log(arr)
console.log(copyArr)