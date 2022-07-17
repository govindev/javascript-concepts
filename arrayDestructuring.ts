let employee = ["Chandler", "Bing", "Female"];

let [fname, lname, gender] = employee;

console.log(fname); // Chandler
console.log(lname); // Bing
console.log(gender); // Female

// Undefined for missing
employee = ["Chandler", "Bing"];

[fname, lname, gender] = employee;

console.log(fname); // Chandler
console.log(lname); // Bing
console.log(gender); // undefined

// Default Value
employee = ["Chandler", "Bing"];

[fname, lname, gender="Male"] = employee;

console.log(fname); // Chandler
console.log(lname); // Bing
console.log(gender); // Male

// Rest operator
employee = ["Chandler", "Bing", "Female"];

let [firstName, ...elements] = employee;

console.log(firstName); // Chandler
console.log(elements); // [ "Bing", "Female"]