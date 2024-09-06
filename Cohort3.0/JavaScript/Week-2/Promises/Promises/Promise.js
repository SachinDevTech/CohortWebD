// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.


// Using a function that returns a promise

// How It's Working?
// 1. setTimeoutPromisified(3000) creates a promise that resolves after 3 seconds.
// 2. The then(callback) waits for the promise to be fulfilled (which happens after 3 seconds), and when it is, it runs the callback function, which logs "3 seconds have passed" to the console.




// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)
   


function waitFor3s(resolve){
    return setTimeout(resolve, 3000);
}
function main() {
    console.log("Printed after 3 Seconds!");
}

waitFor3s(main); //main fxn is passes in waitFor3s as resolve fxn as param which is gonna execute asynchronously after 3s.  