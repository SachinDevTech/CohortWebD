//Date
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format



// Example 1---------------------------
let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-US').format(date);
console.log(formattedDate); // Output: "2/23/2024" (assuming today's date is Feb 23, 2024)


// Example: 2
// When some numbers are taken as the parameter 
// then they are considered as year, month, day, 
// hours, minutes, seconds, milliseconds 
// respectively.
let A = new Date(1996, 10, 13, 5, 30, 22);

console.log(A);






//Map

// example 1:
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));


// -------------------------

let map1 = new Map();

map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "geeksforgeeks")
map1.set("friend 1","gourav")
map1.set("friend 2","sourav");

console.log(map1);
    
console.log("map1 has website ? "+ 
                    map1.has("website"));

console.log("map1 has friend 3 ? " + 
                    map1.has("friend 3"));

console.log("get value for key website "+
                    map1.get("website"));

console.log("get value for key friend 3 "+
                    map1.get("friend 3"));
console.log("delete element with key website " 
                    + map1.delete("website"));
    
console.log("map1 has website ? "+ 
                    map1.has("website"));

console.log("delete element with key website " +
                    map1.delete("friend 3"));

map1.clear();

console.log(map1);
