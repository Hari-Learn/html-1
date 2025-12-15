//basic Array destructruing
//Array destruct work based on position
const arr = ["red","green","yellow"]
const[first,second] = arr;
console.log(first,second);
//using comma to skip elements
const colors = ["red","green","blue","black"]
const [,seconds,,last] = colors;
console.log(seconds,last);

//default values used when value is undefined
const nums = [5]
const [a=5,b=10] = nums
console.log(a,b);

//swapping variables

let i = 10;
let j = 20;

[i,j] = [j,i]
console.log(i,j);

//using rest operator to collecting remaining elements

const fruits = ["banana","apple","orange","kiwi"]

const [firstFruit,...restofFruits] = fruits;
console.log(firstFruit,restofFruits);

//Nested array destructruing

const numss = [1,[2,3],4];
const[one,[two,three],four]=numss;
console.log(one,two,three,four);

//real world example

const response = ["success",200,{data:"ok"}]
const [status,code,realData] = response;
console.log(status,code,realData);
