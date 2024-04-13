

//primitives
let data=10;
//create copy
let dataCopy=data;

console.log("data :",data);
console.log("data copy :",dataCopy)

//check
data=200;
console.log("data :",data);
console.log("data copy :",dataCopy)

//non-primitives
let test={
    a:10,
    b:20
}

//create copy
//let testCopy=test; // Wrong
    //using spread operator
    let testCopy={...test}


console.log("test :",test)
console.log("test copy :",testCopy)

//check
test.a=123;
console.log("test :",test)
console.log("test copy :",testCopy)
