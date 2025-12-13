const num = [1,2,33,44,55]
const reduceTotal = num.reduce((stomach,burger)=> stomach+burger,1000)
console.log(`Total number of arrays : ${reduceTotal}`);


const arrayofedible = ['chicken','mutton','fish']
const iTake = arrayofedible.reduce((stomach,currentIteminEdibleArray)=>{
    //console.log(`would like to know what is in stomach-${stomach} and edibleItems-${currentIteminEdibleArray}`);
    return stomach+'-'+currentIteminEdibleArray
})
console.log(`Final result : ${iTake}`)

const nums = [1, 2, 3, 4];

const evens = nums.reduce((stomach, num) => {
  if (num % 2 === 0) stomach.push(num);
  return stomach;
}, []);
// [2, 4]

const numss = [1, 2, 3];

const doubled = numss.reduce((stomach, num) => {
  stomach.push(num * 2);
  return stomach;
}, []);
// [2, 4, 6]

const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];

const nameCounts = {};

for (const person of names) {
  nameCounts[person] = (nameCounts[person] || 0) + 1;
}

console.log(nameCounts);


const arrItems = ['apple','orange','kiwi','apple','kiwi','pomo']
const results = arrItems.reduce((result,item)=>{
    result[item] = (result[item] || 0) + 1;
    return result;
},{})
console.log(`Result is ${results}`);
console.log(results);



const count = {};
for(const items of arrItems){
    count[items] = (count[items] || 0)+1;}
console.log(count);

const arms = ['pistol','double bearer gun','shotgun','revolver','pistol','shotgun']
const inventoryArms = arms.reduce((gun,item)=>{
    gun[item]  = (gun[item] || 0) + 1;
    return gun;
},{})
console.log(inventoryArms);





