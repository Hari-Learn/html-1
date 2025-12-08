// find the max number of products in a item of array

const arr = [1,2,3,4,5,6]
let firstMax = Math.max(...arr)
console.log(firstMax);
console.log(arr.indexOf(firstMax))
let firstMaxPosition = arr.indexOf(firstMax);
const arr1 = arr.filter((i,j)=> j!= firstMaxPosition);
let secondMax = Math.max(...arr1)
console.log("Product of 2 max numbers in array as "+firstMax*secondMax);


//using splice method

arr.splice(arr.indexOf(firstMax),1)
console.log(arr)
let second = Math.max(...arr.splice(arr.indexOf(firstMax),1))
console.log(second);
console.log('Product of largest 2 element in array :'+firstMax*second);


//Using Sort method

const numb = [1,23,4,5,6,8]
numb.sort((a,b)=>b-a) //desending
console.log("Product of largest 2 number in array : "+numb[0] * numb[1]);


//single statement to blank an array there are 3 ways to blank array

let test = [5,23,6,4,2,1]
//test.length = 0
//test = []
test.splice(0)
console.log(test);

//Object merge - if merge two obj then if key are same in 2 obj then overwrites it otherwise merge it 
const obj1 = {name:'Ajay',age:20}
const obj2 = {name:'Bagu',age:52}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const obj11 = { a: 1, info: { x: 10 } };
const obj21 = { b: 2, info: { y: 20 } };

const merged = {
  ...obj11,
  ...obj21,
  info: { ...obj11.info, ...obj21.info }
};

console.log(merged);

