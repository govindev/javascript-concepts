const arr = [1, 2, 3, 4, 5];

const reducer = (accumalator: number, currentValue: number) => accumalator + currentValue;

/*
* reduce(reducer, initialValue?)
* reduce method takes two values 
* reducer and the initital value
* reducer is called for all the values in the array
*/

console.log(arr.reduce(reducer)); // Prints 15
console.log(arr.reduce(reducer, 0)); // Prints 15
console.log(arr.reduce(reducer, 5)); // Prints 20