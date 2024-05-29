/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function Without Parameters

const sum = () => 2 + 2;

console.log(sum());

// Single Line Arrow Function With Parameters

const sum2 = (a,b) => (a + b)*2;
console.log(sum2(4,6));

// multiline arrow function

const test = ( a, b , c) => {
    let result = a + b + c;
    console.log(result);
}

test(2,2,2);

// spread operator - spread operator(...) copies the given array( testArray inn this case) into the new array

let testArray = [ 2,2,2];
let spreadArray =[ 1,2,...testArray];
console.log(testArray);
console.log(spreadArray);

// spread operator can also copy objects

let obj1 = { a:1, b:2};
let obj2 = { ...obj1, c:3};
console.log(obj1);
console.log(obj2);

// Implicit Returns

// Returning Multiple Lines
