// Simple Interest Calculation

let principal = 100; // Principal amount
let rate = 5;        // Interest rate in %
let time = 2;        // Time in years

// Calculate simple interest
let simpleInterest = (principal * rate * time) / 100;

// Total amount to be paid
let totalAmount = principal + simpleInterest;

console.log("Simple Interest: " + simpleInterest); // 10
console.log("Total Amount: " + totalAmount);      // 110
