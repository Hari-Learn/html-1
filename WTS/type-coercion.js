console.log(0==false); //true
console.log(0===false); // false because o is number and false is boolean
console.log(""==false); //true because of not even space in string become false then false == false is true
console.log(""===false);//string != boolean so false
console.log(null == undefined);// false == false is true
console.log(null === undefined); // both are obj
console.log([] == false); //[].toString() become "" == false => false == false -> true
console.log({}==false); //false
console.log([1] == true);//true

//Falsy & Truthy in conditional logic

console.log(null || "somevalue"); //somevalue
console.log(undefined || "1"); //1
console.log("Rajini"||"kamal"); //Rajini

console.log(null && "hello"); //null
console.log('1'&&'2');//2


console.log(undefined ?? "fallback"); //fallback
console.log(0??42);//0















