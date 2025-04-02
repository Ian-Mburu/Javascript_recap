// Loop - loops are used to execute block of code until a certain condition is met

// for - used to know how many times you want to execute the code

for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i)
}

// while - used when the number of iteration is not known in advance

// while (true) {
//     //do something
//   }

// do...while - always execute block of code at least once

let i = 0;
do {
  console.log("Iteration " + i);
  i++;
} while (i < 5);


// Recursion - is a function calling itself to solve a problem

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))

// When to Use Recursion - Recursion is suitable for solving problems that can be broken down into smaller, similar sub-problems.
