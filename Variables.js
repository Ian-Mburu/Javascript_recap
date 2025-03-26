// variables = they store data e.g numbers, texts, objects, arrays, functions
// variables are declared with var, let, const
// var is function scoped
// let is block scoped
// const is block scoped
// const cannot be reassigned
// const cannot be redeclared
// const must be initialized
// const is immutable (immutable means it cannot be changed)
// const is used to declare variables that are not meant to be changed
// const is used to declare variables that are meant to be used as constants (constants are variables that are not meant to be changed)
// const is used to declare variables that are meant to be used as immutable variables  
// variables are used to store data that can be used later in the program


// Variables names identifiers
// variables names must start with a letter, underscore or dollar sign
// variables names cannot start with a number
// variables names can contain letters, numbers, underscores and dollar signs
// variables names are case sensitive


let x = 10; // x is a variable that stores the number 10
let y = 20; // y is a variable that stores the number 20
let sum = x + y; // z is a variable that stores the sum of x and y

console.log(sum); // 30

let firstName = "John"; // firstName is a variable that stores the string "John"
let lastName = "Doe"; // lastName is a variable that stores the string "Doe"
let fullName = firstName + " " + lastName; // fullName is a variable that stores the full name of John Doe

console.log(fullName); // John Doe


// 1. What happens when you use const with an object or an array?
// const person = {name: 'ian', age: 20}; // person is a constant variable that stores an object
// person.age = 30;

// person = {name: 'Murray', age: '30'}
// console.log(person); // {name: 'ian', age: 30}



// 2. What is temporal dead zone?
// temporal dead zone is the period between the creation of a variable and its initialization
// console.log(name); // undefined
// let name = 'ian';


// 3. What is variable shadowing in javascript
// variable shadowing is when a variable in an inner scope has the same name as a variable in an outer scope
let name = 'ian';
{
    let name = 'Murray';
    console.log(name); // Murray
}
console.log(name); // ian

// 4. What is hoisting in javascript
// hoisting is the process of moving variable and function declarations to the top of their scope before the code is executed
console.log(car)
var car = 'BMW'; // undefined


// 5. How does hoisting work with function expression and function declarations ?
// function declaration
console.log(add(2, 3)); // 5
function add(a, b) {
    return a + b;
}

// function expression
// console.log(subtract(5, 3)); // TypeError: subtract is not a function
let subtract = function(a, b) {
    return a - b;
}
console.log(subtract(5, 3)); // 2


// 5. What is the difference between globalThis, window and global objects?
// globalThis is a global object that provides a consistent way to access the global object in any environment
// window is a global object in the browser that represents the browser window
// global is a global object in Node.js that represents the global scope


// 6. What is the difference between null and undefined?
// null is a value that represents the absence of a value
// undefined is a value that represents the absence of a value


// 7. What is the difference between == and ===?
// == is an equality operator that compares the values of two variables
// === is a strict equality operator that compares the values and types of two variables
// example
console.log(1 == '1'); // true
console.log(1 === '1'); // false


// 8. What is block scope function in javascript?
// block scope function is a function that is declared inside a block of code
// block scope function is not hoisted to the top of the scope
{
    function greet() {
        console.log('Hello');
    }
    greet(); // Hello
}





// variables interview questions (advanced)
// what is the difference between var, let and const?
// var is function scoped, let is block scoped, const is block scoped
// var can be reassigned, let can be reassigned, const cannot be reassigned
// var can be redeclared, let cannot be redeclared, const cannot be redeclared
// var does not have to be initialized, let must be initialized, const must be initialized