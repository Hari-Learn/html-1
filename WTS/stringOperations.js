<<<<<<< HEAD
//Reverse a string
=======
>>>>>>> c2702793cf36903766760c6c6708bbdee23da0ff
const str = "Hariharan"
let s = str.split('');
console.log(s.length);
let reverse = [];
for(let i =s.length-1;i>=0;i--){
    //console.log(s[i]);
    
    reverse.push(s[i])
}

console.log(reverse.toString());

let res = reverse.reduce((s,v)=> s+v,'');
console.log(res);

<<<<<<< HEAD
//using for of
let result = "";


for(let c of s){
    result = c+result;
}

console.log(`Result reverse : ${result}`);

//using While loop
const str1 = "Hariharan";
let reversed = "";
let i = str1.length - 1;

while (i >= 0) {
    reversed += str1[i];
    i--;
}

console.log(reversed); // "tpgtahc"
=======
>>>>>>> c2702793cf36903766760c6c6708bbdee23da0ff


