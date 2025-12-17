const arr = [1, 2, 3, 4, 2, 5, 1];

const duplicates = arr.filter((item, index) =>
  arr.indexOf(item) !== index
);

console.log([...new Set(duplicates)]);


const arr1 = [1, 2, 3, 4, 2, 5, 1];

const freq = {};
const duplicates1 = [];

for (let num of arr1) {
  freq[num] = (freq[num] || 0) + 1;
}

for (let key in freq) {
  if (freq[key] > 1) duplicates.push(Number(key));
}

console.log(duplicates1);
//Given an integer array nums, return true if any value appears at least twice, and false if every element is distinct.
let nums = [1,2,3,1]
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length;
};

//Find the first element that appears only once.
let numss = [4,1,2,1,2]
var firstUnique = function(numss) {
  const map = new Map();

  for (let num of numss) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of numss) {
    if (map.get(num) === 1) return num;
  }

  return -1;
};
