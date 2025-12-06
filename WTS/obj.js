//Javascript Objects Methods

const obj = {a:1,b:2,c:3};

console.log(Object.keys(obj))

console.log(Object.values(obj))

console.log(Object.entries(obj))

const source = {a:1}

const target = {b:2,c:3}

const result = Object.assign(source,target)

console.log(result)


const objSeal = Object.seal({name:"Objects in JS"})

console.warn(Object.isSealed(objSeal))

objSeal.name  = "Name will change in seal"

objSeal.age = 25 //This wont add property in seal but existing property value can be updated

console.log(objSeal)

const objFreeze = {name:"Thavasi"}

Object.freeze(objFreeze);

objFreeze.name = "Thulasi" // This wont change the value, thulasi kuda vasam marum aana object freeze marathu 🤣🤣🤣

console.log(objFreeze.name)




//object creation

const objCreation = {greet(){console.log("Gotcha")}}

const newPerson = Object.create(objCreation)
newPerson.greet();

//object define properties

const obj3 = {}

Object.defineProperty(obj3,'name',{value:"Bala"})

console.log(obj3.name)

obj3.age = 35

console.log(obj3.name, obj3.age)

