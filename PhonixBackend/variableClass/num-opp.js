let firstNum =1;
let secondNum = 2;

let sum = firstNum ** secondNum;

// exponentiation is **
// increment is ++
// decrement is --
// modulus is %
// floor division is //

console.log(sum);

// Assignment operators 
let x = 10; 
x += 5; // x is now 15, it simply means x = x + 5
x -= 3; // x is now 12, it simply means x = x - 3

// Comparison operators
let score = firstNum == secondNum; // false, this == is only checking the value and not the type
let isEqual = firstNum === secondNum; // false, this === is checking both value and type
let isNotEqual = firstNum != secondNum; // true, this != is checking the value and not the type
let isNotStrictEqual = firstNum !== secondNum; // true, this !== is checking both value and type
let isGreater = firstNum > secondNum; // false
let isLess = firstNum < secondNum; // true
let isGreaterOrEqual = firstNum >= secondNum; // false
let isLessOrEqual = firstNum <= secondNum; // true

// && is the logical AND operator, it returns true if both operands are true
// || is the logical OR operator, it returns true if at least one operand is true
// ! is the logical NOT operator, it returns true if the operand is false and vice versac

// concatenation operator is +, it is used to concatenate strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// interpolation is done using template literals, which are enclosed in backticks (`) and can contain placeholders for variables or expressions, which are indicated by the ${} syntax
let age = 30;
let message = `My name is ${fullName} and I am ${age} years old.`;
console.log(fullName);
console.log(message);

// string methods
let str = "Hello, World!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.indexOf("o"));
console.log(str.slice(0, 5)); 

var myName = "John";
console.log(myName);
if (myName === "John") {
  console.log("Hello, John!");
} else {
  console.log("Hello, stranger!");
}

if(firstNum === "Hello" && secondNum === "Hello") {
  console.log("Both conditions are true");
  }
  if (firstNum >= "Hello" || secondNum === "World") 
    console.log("At least one condition is true");
  
  
// LoopS
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// it can be used to count array elements etc
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// while loop
while (firstNum ==="Hello") {
  console.log("this will run forever");
  break; // this will break the loop and prevent it from running forever
}

Array.forEach(element => {
  
});
// relational operators are used to compare values and return a boolean value (true or false) based on the comparison. They include:
// == (equal to): checks if two values are equal (ignoring type)
// === (strict equal to): checks if two values are equal (considering type)