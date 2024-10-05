// Traditional way of updating an array like we have to just multiply each value by 2:

// let oldArr = [1,2,3,4,5];
// let newArr = [];

// for (let index = 0; index < oldArr.length; index++) {
//     newArr.push(oldArr[index] * 2);
// }

// console.log(newArr);



// Now we use map function to do the same
/*map() iterates over each element of the array, applies the provided function to each element, creates a new array with the resulting values, and does not modify the original array.*/


// const arr = [1,2,3,4,5];
// function transform(i) {
//     return i * 2;
// }
// const ans = arr.map(transform); // will create a new updated array
// console.log(arr);//old array
// console.log(ans);//new array



//Creating a map fxn which is taking two inputs one is arr and second is the transformation fxn and performing the operation.


// const oldArr = [2, 4, 6, 8, 10];
// function map(arr, transform) {
//     return arr.map(transform); // Using the native map() function
// }

// function transform(i) {
//     return i * 2;
// }

// const newAns = map(oldArr, transform);
// console.log(newAns); // Output: [4, 8, 12, 16, 20]



// filter fxn: filters out the values based on some condition right

// const arr = [2,3,4,5,6,7,8,9];

// function filteringFxn(n) {
//     return n % 2 == 0;
//  } 

// const ans = arr.filter(filteringFxn);
// console.log(ans);


// We also can write it as:
const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const newAns = arr.filter((n) => {
   return n % 2 == 0;
});
console.log(newAns); // Output: [2, 4, 6, 8]
