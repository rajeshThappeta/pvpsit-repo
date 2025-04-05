let futureCondition = false;

//create a promise
// let promiseObj = new Promise((fulfilled, rejected) => {

//     if (futureCondition === true) {
//         fulfilled('promise is fulfilled')
//     } else {
//         rejected('the promise is rejected')
//     }
// })


//consume promise
// promiseObj
//     .then((msg) => {
//         console.log('msg in then :',msg)
//     })
//     .catch((err) => {
//         console.log("err in catch :", err)
//     })





//You promise to ur  frnd that u can meet him in next 5 mins

//condition
let amIfree = true;

console.log("You promise to your frnd that u will meet him in next 5 secs")
//promise created by you
let meetFrndPromise = new Promise((fulfilled, rejected) => {
    //create 5 sec delay
    setTimeout(() => {
        if (amIfree === true) {
            fulfilled("Hello frnd...How are you!")
        } else {
            rejected("Sorry frnd..meet you later")
        }
    }, 7000)

})



//promise consumed by your frnd
meetFrndPromise
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


console.log("Good morning")
console.log("good bye")