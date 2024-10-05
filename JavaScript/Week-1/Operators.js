// Arithmetic Operators in JavaScript

// Addition
let additionResult = 5 + 3;
console.log("Addition (5 + 3):", additionResult); // Output: 8

// Subtraction
let subtractionResult = 5 - 3;
console.log("Subtraction (5 - 3):", subtractionResult); // Output: 2

// Multiplication
let multiplicationResult = 5 * 3;
console.log("Multiplication (5 * 3):", multiplicationResult); // Output: 15

// Division
let divisionResult = 6 / 3;
console.log("Division (6 / 3):", divisionResult); // Output: 2

// Modulus (Remainder)
let modulusResult = 5 % 3;
console.log("Modulus (5 % 3):", modulusResult); // Output: 2



// 2. Assignment Operators
let x = 10;
x += 5; // Equivalent to x = x + 5
x -= 3; // Equivalent to x = x - 3
x *= 2; // Equivalent to x = x * 2
x /= 4; // Equivalent to x = x / 4
x %= 3; // Equivalent to x = x % 3

console.log("\nAssignment Operators:");
console.log("x after various assignments:", x); // Output will vary

// 3. Comparison Operators
let a = 10, b = 20;
console.log("\nComparison Operators:");
console.log("a == b:", a == b);    // false
console.log("a != b:", a != b);    // true
console.log("a === b:", a === b);  // false
console.log("a !== b:", a !== b);  // true
console.log("a > b:", a > b);      // false
console.log("a < b:", a < b);      // true
console.log("a >= b:", a >= b);    // false
console.log("a <= b:", a <= b);    // true

// 4. Logical Operators
let p = true, q = false;
console.log("\nLogical Operators:");
console.log("p && q:", p && q);    // false
console.log("p || q:", p || q);    // true
console.log("!p:", !p);            // false

// 5. Bitwise Operators
let bitwiseAnd = 5 & 1; // AND
let bitwiseOr = 5 | 1;  // OR
let bitwiseXor = 5 ^ 1; // XOR
let bitwiseNot = ~5;    // NOT
let leftShift = 5 << 1; // Left Shift
let rightShift = 5 >> 1;// Right Shift

console.log("\nBitwise Operators:");
console.log("5 & 1 (AND):", bitwiseAnd);       // 1
console.log("5 | 1 (OR):", bitwiseOr);         // 5
console.log("5 ^ 1 (XOR):", bitwiseXor);       // 4
console.log("~5 (NOT):", bitwiseNot);          // -6
console.log("5 << 1 (Left Shift):", leftShift);// 10
console.log("5 >> 1 (Right Shift):", rightShift);// 2

// 6. String Operators
let stringConcat = "Hello" + " " + "World";
console.log("\nString Operators:");
console.log("Concatenation ('Hello' + ' ' + 'World'):", stringConcat); // Hello World

// 7. Ternary Operator (Conditional)
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("\nTernary Operator:");
console.log("Can vote?", canVote); // Yes 