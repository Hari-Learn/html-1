//push() – Adds one or more elements to the end of an array.
let fruits1 = ['apple', 'banana'];
fruits1.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']



//pop() – Removes the last element from an array and returns it.
let fruits2 = ['apple', 'banana', 'orange'];
let last = fruits2.pop();
console.log(last);   // 'orange'
console.log(fruits2); // ['apple', 'banana']

//shift() – Removes the first element from an array and returns it.
let fruits3 = ['apple', 'banana', 'orange'];
let first = fruits3.shift();
console.log(first3);  // 'apple'
console.log(fruits3); // ['banana', 'orange']

//unshift() – Adds one or more elements to the beginning of an array.
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']

//forEach() – Executes a function for each array element (does not return a new array).

let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));

//includes() – Checks if an array contains a certain element, returns true or false.

let fruits5 = ['apple', 'banana', 'orange'];
console.log(fruits5.includes('banana')); // true
console.log(fruits5.includes('grape'));  // false

//indexOf() – Returns the first index of an element, or -1 if not found.

let fruits6 = ['apple', 'banana', 'orange'];
console.log(fruits6.indexOf('banana')); // 1
console.log(fruits6.indexOf('grape'));  // -1