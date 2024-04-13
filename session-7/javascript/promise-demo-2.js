//Usecae- Son make promise to Parent that he can get 1st rank in current sem

console.log("Son made promise to Parent thatbhe can get first rank");

let goodPerformance = false;
//promise made by Son
let firstRankPromise = new Promise((fulfilled, rejected) => {
  setTimeout(() => {
    if (goodPerformance === true) {
      fulfilled("Got first rank");
    } else {
      rejected("Missed first rank");
    }
  }, 6000);
});

//Promise consumed by Parent
firstRankPromise
  .then((message) => console.log(message)) //called after 6 secs
  .catch((message) => console.log(message)); //called after 6 secs


  console.log("attending to college")