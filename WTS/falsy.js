console.log((null ? "true":"null is false"));
console.log((undefined ? "true":"undefined is false"));
console.log((0?"true":"false"));
console.log(NaN ? "true" : "NaN is false");
console.log(''?"true":"empty string without space is false");
console.log(-0?"true":"negative zero is false");
console.log(-1?"negative one is true":"Negtive one is not false");
console.log(0n ? "true":"bigint is false");



