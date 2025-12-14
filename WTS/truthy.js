if([]){
    console.log("Empty array is truthy");
}
if({}){
    console.log("empty obj is truthy");    
}
if(" "){
    console.log('Empty string too truthy with empty space');
    console.log("".length);
    console.log(" ".length);        
    console.log('"" is falsy because their length is 0');
    console.log('" " is truthy because their length is 1');
    
}

if(""){
    console.log('This will not run because of empty strin without even single space');    
}

if("0"){
    console.log('This will run because of string not a value of 0');
}
if(0){
    console.log('This will not run because of boolean val of false is zero so else block will run');    
}
else{
    console.log('if(0) run in else block only');
    
}

if(function(){}){
    console.log('This will run because fucntion is an object thats what if block running');
    
}
if([]==false ){
    console.log('test');    
}
if({}==false){
    console.log('testing');    
}
console.log([]=="");
console.log([]+" e");
