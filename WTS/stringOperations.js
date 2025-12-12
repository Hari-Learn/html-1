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



