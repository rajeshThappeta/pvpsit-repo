//global
let a=10;

function getValue(value){
    //function scope
    let b=value;
   return function findSum(){
        //inner function scope
        let sum=a+b;
        return sum;
    }
}

//call getValue
let result=getValue(20)
let sum=result()
console.log("sum :",sum)//30