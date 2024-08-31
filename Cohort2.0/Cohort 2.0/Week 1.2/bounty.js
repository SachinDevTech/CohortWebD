// Problem Code

// let sum = 0;
// for (let index = 0; index < 1000000000000; index++) {
//     sum = sum + index;

// }

// console.log(sum);


// Solved Code: 1


// let sum = 0;
// let index = 0;
// const chunkSize = 1000000; // Adjust the chunk size as needed

// function computeChunk() {
//     const end = index + chunkSize;
//     while (index < end && index < 1000000000000) {
//         sum += index++;
//     }
//     if (index < 1000000000000) {
//         setTimeout(computeChunk, 0); // Schedule the next chunk
//     } else {
//         console.log(sum); // Final result
//     }
// }

// computeChunk();

