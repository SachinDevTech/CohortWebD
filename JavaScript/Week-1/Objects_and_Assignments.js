// An ibject is a collection of key-value pairs where, each key is a string and each value can be a valid js data type, including another object.

let user = {
    myName: "Sachin Kumar",
    age: 22,
    gender: "male"
}

console.log("Hello Mr. " + user.myName + " your age is " + user.age);


//Function that takes object as an input
let user_1 = {
    myName: "Ashish Kumar",
    age: 18,
    gender: "male"
}

let greetFxn = function (user_1) {
    let islegalToVote = user_1.age >= 18 && user_1.age < 110 ? console.log(`hii ${user_1.myName}, you can vote as your age is above or equal to ${user_1.age}.`) : console.log(`you can't vote!`);
}
greetFxn(user_1);
