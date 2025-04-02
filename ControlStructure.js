// Control structure 

// Types of control structure
// 1. if...else, switch...case

// if...else
// if (condition) {
//     // code to run if condition is true
// } else {
//     // code to run if condition is false
// }

// example

let age = 18;
if (age >= 18) {
    console.log('You are an adult');
}

// if...else if...else
// if (condition1) {
//     // code to run if condition1 is true
// } else if (condition2) {
//     // code to run if condition2 is true
// } else {
//     // code to run if condition1 and condition2 are false
// }

// example

let time = 14;
if (time < 12) {
    console.log('Good morning');
} else if (time < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
} 


// switch...case
// switch (expression) {
//     case value1:
//         // code to run if expression is equal to value1
//         break;
//     case value2:
//         // code to run if expression is equal to value2

//         break;
//     default:
//         // code to run if expression is not equal to any value
// }

// example

let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    default:
        console.log('Today is not Monday or Tuesday');
}

// the first function is executed first and the second function is executed second



// Write a program that takes a positive integer n as input and outputs the sum of all numbers between 1 and n that are divisible by 3 or 5 (or both).

// For example, if n is 15, the program should output 45, since the numbers between 1 and 15 that are divisible by 3 or 5 are: 3, 5, 6, 9, 10 and 12 and their sum is 45.

// Here are some additional requirements and hints:

// Use a loop to iterate over all the numbers between 1 and n.
// Use an if statement and the modulus operator (%) to check if a number is divisible by 3 or 5.
// Use a variable to keep track of the running sum, and update it on each iteration of the loop.
// You can assume that the input n will be a positive integer.

// example

let n = 30;
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum); // 45

// explain 
// The program takes a positive integer n as input and initializes a variable sum to 0. It then uses a for loop to iterate over all the numbers between 1 and n. For each number i, it checks if i is divisible by 3 or 5 using the modulus operator (%). If i is divisible by 3 or 5, it adds i to the sum. Finally, it outputs the sum of all the numbers between 1 and n that are divisible by 3 or 5.



// Write a program that takes a positive integer n as input and outputs the nth Fibonacci number.

// The Fibonacci sequence is a series of numbers in which each number (after the first two) is the sum of the two preceding ones. The sequence starts with 0 and 1, so the first few Fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

// For example, if n is 5, the program should output 3, since the 5th Fibonacci number is 3.
 // working

let y = 5;
let a = 0;
let b = 1;
let c;
for (let i = 2; i <= y; i++) {
    c = a + b;
    a = b;
    b = c;
}

console.log(c); 


// if ... else

let years = 20;
if (years >= 20) {
    console.log("adult")
} else {
    console.log("child")
}


// Write a program that takes a positive integer n as input and outputs the sum of all numbers between 1 and n that are divisible by 3 or 5 (or both).

for (let x = 0; x <= 10; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("X is divisible by both 3 and 5")
    } else if (x % 3 === 0) {
        console.log("X is divisible by 3")
    } else if (x % 5 === 0) {
        console.log("X is divisible by 5")
    } 
}


// OBJECTS

// Objects - complex data structures that can store multiple values as key pairs.
// are defined using curly braces {}
// e.g 
let Ian = {"fullname": "ian", "age": 22, "race": "black"};
console.log(Ian.fullname)
console.log(Ian)


// Accessing Object Properties

// you can access object properties using dot notation or square brackets
let person = {name: "John", age: 30, isStudent: false};
console.log(person.name)
console.log(person['age'])


// OBJECTS METHODS - functions stored as values in object properties.
// allow one to perform action on objects data.
// e.g
let car = { type: "audi", model: 2023, seller: function() {
    console.log("This is " + this.type + this.model + "!")
} }

car.seller()