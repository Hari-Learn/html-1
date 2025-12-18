let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

let numbers = [10, 5, 20, 1];

// Without compare function (incorrect for numbers)
numbers.sort();
console.log(numbers); // Output: [1, 10, 20, 5] ❌

// Ascending
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 20]

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [20, 10, 5, 1]

//let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

// Sort by age ascending
users.sort((a, b) => a.age - b.age);
console.log(users);
/* Output:
[
  { name: "Bob", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 }Objec
]
*/
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // Output: [3, 2, 1]

//Sorting mixed numbers and strings
let arrq = [10, "2", 1, "20"];
arrq.sort();
console.log(arrq);

//Sorting multidimensional arrays
let arra = [[2,3], [1,4], [2,1]];
arra.sort((a,b) => a[0] - b[0]);
console.log(arra);
