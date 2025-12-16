//1.What is Object Destructuring?
//Object Destructuring lets you extract value from objects into variable in a clean and readable WebAssembly.

//without obj des - older way
const user = {
    name:"Hari",
    age:40
}

const names = user.name;
const ages = user.age;
console.log(`User obj : ${names} and age is ${ages}`);

//With obj destruc(ES6)

const {name, age} = user;
console.log(`User obj : ${name} and age is ${age}`);


//2.Basic Syntax
//const {key} = object
//variable name must match keys
const person = {
    firstName : "Hari",
    lastName:"Haran"
}

const{firstName,lastName} = person;
console.log(firstName,lastName);

const{firstnames,lastnames} = person;
console.log(firstnames,lastnames); //undefined undefined so key must match with variable name

//3.Renaming variables
const person1 = {
     firstN : "Hari",
    lastN:"Haran 1"
}
//const {fname:firstN,lname:lastN} = person1; // wrong way mistake 
//syntax const { originalPropertyName: newVariableName } = object;
const {firstN:fName,lastN:lName} = person1
console.log(fName,lName);

//4.default values

const setting = {
    theme:"vanilla"
}

//const {theme,defaultTheme:"Dark"} = setting; //SyntaxError: Invalid destructuring assignment target not : but =
//const { propertyName = defaultValue } = object;
const{theme,defaultTheme="Dark"} = setting;
console.log(theme,defaultTheme);

//nested object destructuring
const user2 = {
    name:"Arun",
    address:{
        city:"Chennai",
        zip:600119
    }
}

console.log(user2);

const {address:{city,zip}} = user2;
console.log(city,zip);


//Destructuring in rest parameters
const employee = {
    name:"Balu",
    age:"40",
    email:"b@b.com",
    mobile:9898989898,
    address:{
        city:"Chennai",
        zip:600119
    }

}

function restParam({name,age,...rest}){
    console.log(name,age,rest);    
}
restParam(employee)

//Destructring in loops
const piyush = {
    name:"Padayappa",
    greet:function(){
        console.log(this.name);        
    }
};
const sayHi = piyush.greet;
console.log(sayHi);

console.log("x-x-".repeat(40));
console.log("TestPad".padStart(10,'*'));
console.log('Hari'.padEnd(10,'-'));

