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

