//Functions
    //lowercase (sum)
    //lower camel case(sumOfTwoNumber)
    //upper camel case 
//function declaration or function statement
    function sumOfTwoNumbers(a,b){
        return a+b;
    }

    //call fucntion sum
    let result=sumOfTwoNumbers(10,20)
    console.log("sum is ",result)


// function expression
    let a=function (x,y){
        return x*y
    }

    let product=a(5,6)
    console.log(product)


    //arrow function(simplify function expression)
    let productOfTwo= (x,y)=>x*y

    let product2=productOfTwo(12,12)
    console.log(product2)
    


//write a function to find big in given two numbers

    //function declaration
    function getBig(a,b){
        if(a===b){
            return "both equal"
        }else if(a>b){
            return " a is big"
        }else{
            return "b is big"
        }
    }

    let big1=getBig(100,30)
    console.log(big1)

     //function expression
     let getBig2=function (a,b){
        if(a===b){
            return "both equal"
        }else if(a>b){
            return " a is big"
        }else{
            return "b is big"
        }
    }

    let big2=getBig2(100,30)
    console.log(big2)


     //arrow function 
     let getBig3= (a,b)=>{
        if(a===b){
            return "both equal"
        }else if(a>b){
            return " a is big"
        }else{
            return "b is big"
        }
    }

    let big3=getBig3(100,30)
    console.log(big3)