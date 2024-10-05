// function sayHi() {
//     let date = new Date();
//     console.log(date.getSeconds());
//     console.log("hi!");

//     function sayHello() { 
//         console.log("hello");

//         function helloThere() {
//             console.log("hello there!");
//             let date1 = new Date();
//             console.log(date1.getSeconds());
//         }

//         // Call helloThere 2 seconds after sayHello (which is 5 seconds after sayHi)
//         setTimeout(helloThere, 2000);
//     }

//     // Call sayHello 3 seconds after sayHi
//     setTimeout(sayHello, 3000);
// }

// // Call sayHi 1 second after the script starts
// setTimeout(sayHi, 1000);
 



// Doesnt really have callbacks
// function step3Done() {
//     console.log("hello there");
//   }
  
//   function step2Done() {
//     console.log("hello");
//     setTimeout(step3Done, 5000);
//   }
  
//   function step1Done() {
//     console.log("hi");
//     setTimeout(step2Done, 3000);
//   }
  
//   setTimeout(step1Done, 1000);
  



//   Promisified version
// Now use the promisified version we saw in the last slide

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Solution #1 (has callback hell)

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});