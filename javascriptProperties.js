// 1. Object Properties e.g
// a. constructor - returns an object that creates the object's prototype.
// b. prototype - allows you to add properties and methods to an object.
// c. __proto__ - allows you to add properties and methods to an object.

let obj = { name: "Alice", age: 25 };
console.log(obj.constructor); // "Alice"
console.log(obj.prototype); // undefined
console.log(obj.__proto__); // {}

let num = [1, 2, 3, 4, 5];
console.log(num.constructor); // [Function: Array]
console.log(num.length) // 5

// toString - returns a string representing the object.
num.toString()
console.log(num) 

// pop - removes the last element from an array and returns that element.
num.pop()
console.log(num) // 5 


// push - adds one or more elements to the end of an array and returns the new length of the array.
num.push(5, 6, 7, 8)
console.log(num) // 6

// at - returns the element at the specified index.
console.log(num.at(2)) // 3 

// join - joins all elements of an array into a string.
console.log(num.join()) // 1,2,3,4,5,6,7,8

// shift - removes the first element from an array and returns that removed element.
num.shift()
console.log(num) // 2

// unshift - adds one or more elements to the beginning of an array and returns the new length of the array.
num.unshift(1)
console.log(num) // 1

// reverse - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
num.reverse()
console.log(num) // 8

// sort - sorts the elements of an array in place and returns the sorted array.
num.sort()
console.log(num) // 1,2,3,4,5,6,7,8

// splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
num.splice(2, 0, 3)
console.log(num) // 1,2,3,4,5,6,7,8

// slice - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
console.log(num.slice(2, 4)) // 3,3

// includes - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(num.includes(3)) // true

// indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(num.indexOf(3)) // 2

// lastIndexOf - returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
console.log(num.lastIndexOf(3)) // 2


