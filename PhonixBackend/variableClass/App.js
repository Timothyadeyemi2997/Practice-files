let firstNum = 1;
let secondNum = 2;
const sum = firstNum + secondNum;
console.log(sum);

// this is a sting variable
var myName = "John";
console.log(myName);

//this is a number (integer) variable
const myAge = 30;
console.log(myAge);

//this is a boolean variable
let isStudent = true;
console.log(isStudent);

//this is an array variable
const myArray = [1, 2, 3, 4, 5];
const namesArray = ["Alice", "Bob", "Charlie"];
console.log(myArray)
console.log(namesArray);

//this is an object variable
const person = {
  name : "Alice",
  age: 25,
  isStudent : true
};
console.log(person);

//floating point number
const pi = 3.14;
console.log(pi);

//undefined variable
let undefinedVariable;
console.log(undefinedVariable);

//null variable
const nullVariable = null;
console.log(nullVariable);

//symbol variable
const uniqueId = symbol("id");
console.log(uniqueId);


// forEach 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2); // Output: 2, 4, 6,)
});
console.log(numbers); // Outputs: [1, 2, 3,] (original array unchanged)

// map
const Numbers = [1, 2, 3,];
const doubledNumbers = Numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Outputs: [2, 4, 6]
console.log(Numbers); // Outputs: [1, 2, 3] (original array unchanged)

// filter
const nums = [1, 2, 3, 4, 5];
const evenNumbers = nums.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Outputs: [2, 4]
console.log(nums); // Outputs: [1, 2, 3, 4, 5] (original array unchanged) 

// ES6+ 
// Array destructuring 
const Number = [1, 2, 3];
const [first, second, third] = Number; // first = 1, second = 2, third = 3
console.log(first); // Outputs: 1

//Object destructuring
const person = {name: "Alice", age:30};
const {name, age} = person; // name = "Alice", age = 30


