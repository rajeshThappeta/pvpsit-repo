//Pending
//Fulfilled or Rejected

//Create a Promise
let areYouBusy = false;

const prObj = new Promise((fulfilled, rejected) => {
  if (areYouBusy !== true) {
    fulfilled("Hello frnd..how are you...");
  } else {
    rejected("You could not call frnd");
  }
});

//Consume promise call
prObj
  .then((message) => {
    console.log("message from then :", message);
  })
  .catch((message) => {
    console.log("message from catch :", message);
  });



  console.log("hello")