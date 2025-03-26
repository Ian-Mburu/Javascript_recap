// DataTypes are used to define the type of data variable can hold.
// All dataTypes = numbers, strings, booleans, objects, functions, undefined, null, arrays, symbols

// 1. What is the difference between primitive and non-primitive data types?
// primitive data types are immutable (immutable means they cannot be changed) 
// primitive data types are passed by value


// numbers
// numbers are used to store numerical values

let x = 10; // x is a variable that stores the number 10
let y = 20; // y is a variable that stores the number 20
let sum = x + y; // z is a variable that stores the sum of x and y

console.log(sum); // 30

// strings
// strings are used to store text values
let firstName = "John"; // firstName is a variable that stores the string "John"
let lastName = "Doe"; // lastName is a variable that stores the string "Doe"
let fullName = firstName + " " + lastName; // fullName is a variable that stores the full name of John Doe

console.log(fullName); // John Doe


// booleans
// booleans are used to store true or false values
let isTrue = true; // isTrue is a variable that stores the boolean value true
let isFalse = false; // isFalse is a variable that stores the boolean value false


// undefined
// undefined is used to represent the absence of a value
let name; // name is a variable that is declared but not initialized
console.log(name); // undefined


// null
// null is used to represent the absence of a value
let person = null; // person is a variable that stores the value null
console.log(person); // null


// objects
// objects are used to store collections of key-value pairs
let car = {'make': 'Toyota', 'model': 'Corolla'}; // car is a variable that stores an object
console.log(car); // {make: 'Toyota', model: 'Corolla'}



// arrays
// arrays are used to store collections of values
let numbers = [1, 2, 3, 4, 5]; // numbers is a variable that stores an array
console.log(numbers); // [1, 2, 3, 4, 5]


// functions
// functions are used to define reusable blocks of code
function add(x, y) {
    return x + y;
}

let result = add(10, 20); // result is a variable that stores the result of adding 10 and 20
console.log(result); // 30



function names(firstname, lastname) {
    return firstname + " " + lastname;
}

let fullname = names("John", "Doe"); // fullname is a variable that stores the full name of John Doe
console.log(fullname); // John Doe


// Challenge: Area and Perimeter of a Rectangle
// Create a function that takes in the length and width of a rectangle and outputs the area and perimeter of the rectangle

function rectangle(length, width) {
    let area = length * width;
    let perimeter = 2 * (length + width);
    return `Area: ${area}, Perimeter: ${perimeter}`;
}

console.log(rectangle(10, 20)); // Area: 200, Perimeter: 60


// Challenge: Area and Circumference of a Circle

function circle(radius) {
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
    return `Area: ${area}, Circumference: ${circumference}`;
}

console.log(circle(10)); // Area: 314.1592653589793, Circumference: 62.83185307179586

function circle2(radius) {
    let area = 3.14 * radius * radius;
    let circumference = 2 * 3.14 * radius;
    return `Area: ${area}, Circumference: ${circumference}`;
}

console.log(circle2(10)); // Area: 314, Circumference: 62.8

// Challenge: Area of a square

function Square(side) {
    let area = side * side;
    return `Area: ${area}`;
}

console.log(Square(10)); // Area: 100


// Another Challenge different topic
// Challenge: Reverse a String
// Create a function that takes in a string and reverses it

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // olleh


