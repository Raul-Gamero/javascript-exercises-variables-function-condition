//Variables

// Create a variable called "name" that contains a string.
let name = "John";

// Create a variable called "age" that contains an integer.
let age = 25;

// Create a variable called "hasHobbies" that contains a boolean.
let hasHobbies = true;

// Create a variable called "empty" that is undefined.
let empty;

// Create a variable called "undefinedVariable" that is undefined without using the word undefined.
let undefinedVariable = null;

// Create a variable called "nullVariable" that is null.
let nullVariable = null;

// Functions

// Create a function called "sayHello" that returns "Hello".
function sayHello() {
  return "Hello";
}

// Create a function called "add" that receives two numbers as arguments and returns their sum.
function add(num1, num2) {
  return num1 + num2;
}

// Create a function called "sayHelloTo" that receives a name as an argument and returns "Hello, {name}".
function sayHelloTo(personName) {
  return `Hello, ${personName}`;
}

// Conditional Statements

// Create a condition that returns "true" if "firstParam" is greater than "secondParam" and "false" if not.
function compareGreater(firstParam, secondParam) {
  return firstParam > secondParam;
}

// Create a condition that returns "true" if "firstParam" is equal to "secondParam" and "false" if not.

function compareEqual(firstParam, secondParam)  {
  return firstParam === secondParam;
}

// Create a condition that returns "true" if "firstParam" is different from "secondParam" and "false" if not.
function compareDifferent(firstParam, secondParam) {
  return firstParam !== secondParam;
}

// Create a function called "isEven" that receives a number and returns "true" if even, or "false" if odd.
function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function isPositive(number) {
  return number > 0;
}

// Create a condition that returns "true" if "firstParam" is greater than "secondParam" or "thirdParam" is greater than "fourthParam".
function compareOr(firstParam, secondParam, thirdParam, fourthParam) {
  return firstParam > secondParam || thirdParam > fourthParam;
}

// Create a condition that returns "true" if "firstParam" is greater than "secondParam" and "thirdParam" is greater than "fourthParam".
function compareAnd(firstParam, secondParam, thirdParam, fourthParam) {
  return firstParam > secondParam && thirdParam > fourthParam;
}

// Create a function called "getAgeByName" that receives a name and returns the role based on specific conditions.
function getAgeByName(personName) {
  if (personName === "Giorgio" || personName === "Ivan") {
    return "LI";
  } else if (personName === "Marcos") {
    return "TA";
  } else {
    return "Not found";
  }
}

// Example Usage
console.log(sayHello()); // Output: Hello
console.log(add(5, 10)); // Output: 15
console.log(sayHelloTo(name)); // Output: Hello, John
console.log(compareGreater(10, 5)); // Output: true
console.log(isEven(4)); // Output: true
console.log(getAgeByName("Giorgio")); // Output: LI