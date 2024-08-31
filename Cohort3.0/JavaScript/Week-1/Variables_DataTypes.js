//Variables
let fName = "Sachin";
const age = 22;
var isStudent = true;
console.log(fName);


// JS is dynamic
// The value of fname is changed to 100 and you can see initially the datatype was String but now its int.
fName = 100;
console.log(fName);



//Data types in JS
"JavaScript is a dynamically typed language, which means you don't need to declare the data type of a variable before using it. The interpreter automatically determines the data type based on the value assigned to the variable."

// Primitive Data Types:-
// ___________________________________________________________________________________

// Primitive data types are immutable, meaning their values cannot be changed after they are created.
"Number: Represents numeric values, including integers, floating-point numbers, and special values like Infinity and NaN (Not a Number)."

let num1 = 10; // Integer
let num2 = 3.14; // Floating-point number
let num3 = Infinity;


//String: Represents textual data, enclosed in single or double quotes.
let str1 = "Hello, world!";
let str2 = 'This is also a string';

//Boolean: Represents logical values, either true or false.
let isTrue = true;
let isFalse = false;

//null: Represents the intentional absence of any object value.
let emptyValue = null;

//undefined: Represents a variable that has been declared but not assigned a value.
let notAssigned; // undefined

//Symbol: Represents a unique and immutable value, often used as object property keys.
let symbol1 = Symbol("mySymbol");

//BigInt: Represents integers with arbitrary precision, useful for large numbers.
let bigNumber = 123456789012345678901234567890n;
// ------------------------------------------------------------------------------------



//Non-Primitive Data Types (Objects)
// ________________________________________________________________________________________
"Objects are complex data structures that store collections of properties."

// Object: A collection of key-value pairs.
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// Array: An ordered collection of values.
let numbers = [1, 2, 3, 4, 5];

//Function: A block of code that performs a specific task.
function greet(name) {
    console.log("Hello, " + name + "!");
}

//Date: Represents a specific point in time.
let today = new Date();

//RegExp: Represents regular expressions for pattern matching.
let pattern = /hello/g;

"Note: Although not strictly a data type, typeof is an operator used to determine the data type of a value."

console.log(typeof 10); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (a historical quirk)
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () { }); // function


