//1.Object Literal
const obj = {name:"Arul",age:20}
console.log(obj.name)


//2.Using New object
let obj1 = new Object();
obj1.name = "Banu"
obj1.age = "80"

console.log(obj1.name,obj1.age)

//3.Using a constructor function

function Person(name,age){
    this.name = name;
    this.age = age;
}

let person = new Person("Keanu",50)
console.log(person.name,person.age)

//4. JSON.parse(from json string)

let jsonStr = '{"name":"Dog","age":5}'//here is the string of json have to use parse to get back to json obj

let objParse = JSON.parse(jsonStr)

console.log(objParse)

//1. Curly → Object Literal

//Create an object using curly braces.

//2. Function → Factory Function

//Create objects by returning them from a normal function.

//3. Capital → Constructor Function

//Create objects using a function whose name starts with a capital letter and called with new.

//4. Class → ES6 Class

//Create objects using the modern class syntax.

//5. Create → Object.create()

//Create an object directly from a specified prototype.