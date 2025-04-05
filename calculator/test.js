//get input elements
let input1 = document.querySelector("#first")
let input2 = document.querySelector("#second")
//get button elements
let sumBtn = document.querySelector(".sum")
let diffBtn = document.querySelector(".diff")
let result = document.querySelector(".result")



//find sum
sumBtn.addEventListener('click', () => {


    //read values of two input fields
    let firstNumber = Number(input1.value);
    let secondNumber = Number(input2.value);

    let sum = firstNumber + secondNumber;
    console.log(sum)
    result.textContent = sum;
})

