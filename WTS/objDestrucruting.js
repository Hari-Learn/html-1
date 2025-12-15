//What is Object Destructuring?
//Object Destructuring lets you extract value from objects into variable in a clean and readable WebAssembly.

//without obj des - older way
const user = {
    name:"Hari",
    age:40
}

const names = user.name;
const ages = user.age;
console.log(`User obj : ${names} and age is ${ages}`);

//With obj destruc

const {name, age} = user;
console.log(`User obj : ${name} and age is ${age}`);

