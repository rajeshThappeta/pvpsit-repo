//basic operations on array
let marks = [90, 78, 98, 45] //array of numbers
let names = ['ravi', 'bhanu', 'manasa'] //array of strings


// get length of array
//console.log(marks.length)

//access elements
// console.log(marks[0])
// console.log(marks[20])

//iterate array
//basic for loop
// for (let index = 0; index < marks.length; index++) {
//     console.log(marks[index])
// }

// //while loop
// let index = 0;
// while (index < marks.length) {
//     console.log(marks[index])
//     index++;
// }

// //for-of loop
// for (let e of names) {
//     console.log(e)
// }


//insert elements
// at start
let l1 = marks.unshift(1, 2, 3, 4, 5)
console.log(marks)
console.log(l1)
//at end
marks.push(100, 200)
console.log(marks)
//insert elements in between(index based insertion)
marks.splice(4, 0, 123, 234)
console.log(marks)

//remove
//start
let element1 = marks.shift()
console.log(marks)
console.log("removed element is ", element1)
//end
let element2 = marks.pop()
console.log(marks)
console.log("removed element is ", element2)
//in between
let element3 = marks.splice(2, 3)
console.log(marks)
console.log("removed element is ", element3)

//update elements
marks.splice(1, 1, 300)
console.log(marks)




let numbers = [12, 34, 45, 63, 78, 23, 90]

//1. Find even numbers and push them into a new array
//2. Find odd numbers and push them into a new array
//3. Find  numbers between 30 and 60 and push them into a new array

let even, odd, between30and60;

function getEvenNumbers(arr) {
    let temp = [];
    for (let n of arr) {
        if (n % 2 === 0) {
            temp.push(n)
        }
    }

    return temp;
}

even = getEvenNumbers(numbers)
console.log(even)