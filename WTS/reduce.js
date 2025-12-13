const num = [1,2,33,44,55]
const reduceTotal = num.reduce((stomach,burger)=> stomach+burger,1000)
console.log(`Total number of arrays : ${reduceTotal}`);


const arrayofedible = ['chicken','mutton','fish']
const iTake = arrayofedible.reduce((stomach,currentIteminEdibleArray)=>{
    //console.log(`would like to know what is in stomach-${stomach} and edibleItems-${currentIteminEdibleArray}`);
    return stomach+'-'+currentIteminEdibleArray
})
console.log(`Final result : ${iTake}`)

