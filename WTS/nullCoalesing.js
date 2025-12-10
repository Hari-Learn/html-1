let name = null;
let finalName = name ?? "Guest";
console.log(finalName); // Output: "Guest"


let user = {
  name: "",
  age: 0,
  city: null
};

let displayName = user.name ?? "Anonymous"; // "" is NOT null/undefined → keeps ""
let displayAge = user.age ?? 18;           // 0 is NOT null/undefined → keeps 0
let displayCity = user.city ?? "Unknown";  // null → uses "Unknown"

console.log(displayName); // ""
console.log(displayAge);  // 0
console.log(displayCity); // "Unknown"

//Key Points :

//?? only considers null or undefined as “empty.”

//Unlike ||, it doesn’t treat 0, false, or "" as empty.

//Works well when combining with objects that may have falsy values but are still valid.