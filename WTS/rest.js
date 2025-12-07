// Rest with array
const movies = ['Titanic','Inception','The Dark Knight','Reverant']
const [firstMovie, ...leftOver]= movies;
console.log('------------------------');
console.log(firstMovie);
console.log('------------------------');
console.log(leftOver);

// Skipping elements in rest

const [,secondItem,remainingItem] = movies;
console.log('------------------------');
console.log(secondItem);
console.log('------------------------');
console.log(remainingItem);

//Rest with objects

const movie = {title:'Titanic',year:1997,genre:'survial',director:'JamesCameron'}
const{title,year,...others} = movie
console.log(title);
console.log(year);
console.log(others);

//Rest with functions

function movies1(firstArg,...otherArg){
    console.log(firstArg);
    console.log(otherArg);    
}

let str = "String".split('');
movies1('firstArg',...str)

//tests

function testFunc(a,...b){
    console.log(a);
    console.log(b);    
}
let arr = [1,2,3]
testFunc('1stArg',arr)
testFunc('1stArg',...arr)

//show letters 
// second arg always form an array by whatever type of elements send

function showLetters(a,...b){
    console.log(a);
    console.log(b);   
}

let word = 'hello'
showLetters('X',...word)

function combine(a,...b){
    console.log(a);
    console.log(b);   
}

let letters = ['A','B','C']
combine(...letters,'D','E')

//showData

function showData(first,...rest){
    console.log(first);
    console.log(rest);    
}

let numbers = [1,2]
let alpha = ['A','B']
showData(...numbers,...alpha,3)

//output as 1 and [2,A,B,3]

function combine(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

const arr = [1, 2, 3];
combine(...arr, 4, 5);


function show(first, ...rest) {
    console.log(first);
    console.log(rest);
}

show('X', ...'HELLO', 'Y');


function data(first, ...rest) {
    console.log(first);
    console.log(rest);
}

const nums = [1, 2];
const letters = ['A', 'B'];
const obj = {x: 10};

data(...nums, obj, ...letters);
