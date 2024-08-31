// JavaScript is a scripting language, which means it is interpreted.
// The code is executed line-by-line by an interpreter (like a web browser).

console.log("Hello, World!"); // This line is interpreted and executed immediately.

// Compiled languages (like C or C++) are converted into machine code by a compiler before execution.
// The entire program is translated into machine code first, and then executed.



// -----------------------2. How High-Level Code is Converted into Machine Code ------------------

// High-level code (like JavaScript) is written in a human-readable format.
// An interpreter or a Just-In-Time (JIT) compiler translates this code into machine code that the computer can understand and execute.

let message = "This is high-level code."; // Human-readable code
console.log(message); // The interpreter converts this line to machine code and executes it.



// ------------3. What are Compilers------------

// A compiler is a program that translates high-level code into machine code before execution.
// Example in a compiled language (like C):
// C code: printf("Hello, World!");
// The compiler converts this into machine code which the CPU can execute.

console.log("In JavaScript, an interpreter or JIT compiler handles this process.");


// -------------------------Syntax-----------------

// Syntax refers to the set of rules that define the structure of a programming language.
// Example of correct syntax in JavaScript:

let name = "Alice"; // Declaring a variable
console.log(name);  // Outputting the variable to the console

// Incorrect syntax will result in errors:
// let name "Alice" // Missing the equal sign (=)


// ---------------------5. If-Else Statements-------------

// If-else statements are used to perform different actions based on different conditions.

let age = 18;

if (age >= 18) {
    console.log("You are an adult."); // This block executes if the condition is true
} else {
    console.log("You are a minor."); // This block executes if the condition is false
}


// ------------------6. Variables and Data Types--------

// Variables are used to store data values.
// JavaScript supports various data types such as strings, numbers, booleans, arrays, and objects.

let stringVar = "Hello, World!"; // String data type
let numberVar = 42; // Number data type
let booleanVar = true; // Boolean data type

console.log(stringVar); // Output: Hello, World!
console.log(numberVar); // Output: 42
console.log(booleanVar); // Output: true


// ----------------7. Arrays------------------


// Arrays are used to store multiple values in a single variable.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry



// ---------------Object and Object Chaining------------
// Objects are used to store keyed collections of various data and more complex entities.

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(person.firstName); // Output: John
console.log(person.address.city); // Output: Anytown (this is object chaining)




// ---------------------------------- JS Functions ---------------------

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));



// Callbacks - functions call fxn from inside.

function calcArithmetic(a, b, sumFxn) {
    const ans = sumFxn(a, b);
    return ans;
}
console.log("\nThe answer by callback: " + calcArithmetic(5, 6, sum));



// SetTimeout

function Greet() {
    console.log("hello bro!");
}
// So after 2 seconds the green function will be called.
setTimeout(Greet, 1 * 2000) //second args - time in (ms)


//SetInterval

function greetAlien() {
    console.log("Heyy! Alien.");
}
setInterval(greetAlien, 1 * 1000);