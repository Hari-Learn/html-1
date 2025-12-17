// 1️⃣ typeof typeof null
console.log(typeof typeof null); 
// "string"
// Explanation: typeof null → "object", typeof "object" → "string"


// 2️⃣ NaN comparison
console.log(NaN === NaN); 
// false
// Explanation: NaN is not equal to anything, even itself


// 3️⃣ [] + []
console.log([] + []); 
// ""
// Explanation: Arrays convert to empty string, "" + ""


// 4️⃣ [] + {}
console.log([] + {}); 
// "[object Object]"
// Explanation: {} converts to string "[object Object]"


// 5️⃣ {} + []
console.log({} + []); 
// 0
// Explanation: {} treated as block, +[] → 0


// 6️⃣ true + false
console.log(true + false); 
// 1
// Explanation: true → 1, false → 0


// 7️⃣ null + 1
console.log(null + 1); 
// 1
// Explanation: null → 0


// 8️⃣ undefined + 1
console.log(undefined + 1); 
// NaN
// Explanation: undefined → NaN in numeric context


// 9️⃣ !![]
console.log(!![]); 
// true
// Explanation: Non-empty objects are truthy


// 🔟 +[]
console.log(+[]); 
// 0
// Explanation: [] → "" → 0


// 1️⃣1️⃣ +"1" + +"1"
console.log(+"1" + +"1"); 
// 2
// Explanation: Unary + converts strings to numbers


// 1️⃣2️⃣ Floating point
console.log(0.1 + 0.2 === 0.3); 
// false
// Explanation: Floating-point precision issue


// 1️⃣3️⃣ [] == ![]
console.log([] == ![]); 
// true
// Explanation: ![] → false, [] → "" → 0, false → 0


// 1️⃣4️⃣ Math.max()
console.log(Math.max()); 
// -Infinity
// Explanation: No arguments returns lowest possible number


// 1️⃣5️⃣ delete literal
console.log(delete "hello"); 
// true
// Explanation: delete returns true for non-references


// 1️⃣6️⃣ String concatenation
console.log(1 + "2" + "2"); 
// "122"
// Explanation: Number + String → String concatenation


// 1️⃣7️⃣ Unary plus trick
console.log(1 + +"2" + "2"); 
// "32"
// Explanation: +"2" → 2, then string concatenation


// 1️⃣8️⃣ Unary minus trick
console.log(1 + -"1" + "2"); 
// "02"
// Explanation: -"1" → -1, then string concatenation


// 1️⃣9️⃣ typeof NaN
console.log(typeof NaN); 
// "number"
// Explanation: NaN is a numeric type


// 2️⃣0️⃣ typeof null
console.log(typeof null); 
// "object"
// Explanation: Legacy JavaScript bug


// 2️⃣1️⃣ Array comparison
console.log([] == []); 
// false
// Explanation: Objects compared by reference


// 2️⃣2️⃣ Object comparison
console.log({} == {}); 
// false
// Explanation: Different memory references


// 2️⃣3️⃣ parseInt trap
console.log(parseInt("10+2")); 
// 10
// Explanation: parseInt stops at non-numeric character


// 2️⃣4️⃣ parseInt with unit
console.log(parseInt("7px")); 
// 7
// Explanation: Extracts numeric prefix


// 2️⃣5️⃣ Boolean string
console.log(!!"false"); 
// true
// Explanation: Non-empty string is truthy


// 2️⃣6️⃣ false == "false"
console.log(false == "false"); 
// false
// Explanation: "false" → NaN, false → 0


// 2️⃣7️⃣ false == "0"
console.log(false == "0"); 
// true
// Explanation: Both convert to 0


// 2️⃣8️⃣ null == 0
console.log(null == 0); 
// false
// Explanation: null only equals undefined


// 2️⃣9️⃣ null >= 0
console.log(null >= 0); 
// true
// Explanation: null → 0 in relational comparison


// 3️⃣0️⃣ Ultra-tricky
console.log((!+[]+[]+![]).length); 
// 9
// Explanation:
// +[] → 0
// !0 → true
// true + [] → "true"
// "true" + false → "truefalse"
// "truefalse".length → 9
