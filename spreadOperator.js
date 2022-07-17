"use strict";
/* Spread Operator / Rest Operator */

// add the elements of an existing array into a new array
let certsToAdd = [5, 6];
let certs = [1, 2, 3, 4, ...certsToAdd, 7, 8];
console.log(certs); // [1,2,3,4,5,6,7,8];

// pass elements of an array as arguments to a function
function addThreeNumber(x, y, z) {
    console.log(x+y+z);
}
var args = [0,1,2];
addThreeNumber(...args); // 3

// copy arrays
var arr = [1,2,3];
var arr2 = [...arr];
arr2.push(4);
console.log(arr); // 1,2,3
console.log(arr2); // 1,2,3,4

// concetenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr1.concat(arr2);
arr1 = [...arr1, 5000, ...arr2];
console.log(arr1); // 0,1,2,5000,3,4,5


// REST ; condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}
var arr = multiply(2,1,2,3);
console.log(arr);