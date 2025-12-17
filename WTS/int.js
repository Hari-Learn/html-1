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
