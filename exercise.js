// FizzBuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// i++ - means increment the value of i by 1


var car = new Vehicle("Honda", "white", "2010", "UK")
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model
    this.color = color
    this.year = year
    this.country = country
}

// Output - Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }


function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y)

// Output - 1 undefined number


var a = 200
{
    var a = 400
}
let b = a
{
    let b = 500
}

console.log(b)

// whats happening here is that the variable a is being redeclared with the value of 400 and then the value of a is being assigned to b. The value of b is then being redeclared with the value of 500. The value of b is then being logged to the console. The value of b is 400.

// functions

function greet() {
    return "Hello World"
}

console.log(greet())


// what are asynchronous functions - functions running in parallel
// example
// setTimeout(function() 

 setTimeout( myFunction, 3000 ) 
    function myFunction() {
        console.log("Today Is a great day")
    }


// what are synchronous functions - functions running in sequence
// example
function myFunction() {
    console.log("Today Is a great day")
}


// Promise - a promise is an object representing the eventual completion or failure of an asynchronous operation.
// example
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000)
})

promise.then(

    result => console.log(result),
    error => console.log(error)

)

// Output - done!


function myFunction() {
    return Promise.resolve("ian");
}

console.log(myFunction())