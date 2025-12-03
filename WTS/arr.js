const arr = [1, 2, 3, 4, 5,'d','r','f','g','f','s','sd'];
const arrString = arr.filter(i => typeof i === 'string');
const arrNumber = arr.filter(i => typeof i === 'number');
console.log(arrString,arrNumber)