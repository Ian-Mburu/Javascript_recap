// Callback function - this is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.

// example

// function callbackFunction(name) {
//     console.log("Hello" + name)
// }

// function outerFunction(callback){
//     let name = prompt("Please enter your name.")
//     callback(name);
// }

// outerFunction(callbackFunction)


// Why do we need callback Functions
// Because javascript is an event driven language - This means instead of waiting for a response, javascript will keep executing while listening for other events.

function firstFunction() {
    // simulate a code delay
    setTimeout(function () {
        console.log("first function called");
    }, 10)
}

function secondFunction() {
    console.log("second function called");
}

firstFunction();
secondFunction();


