// let status = "new";
//  let scared = true;
//   if (status === "new") { 
//     console.log("Welcome to Javascript!");
//      if (scared) {
//        console.log("Don't worry you will be fine!");
//        } else { 
//         console.log("You're brave! You are going to do great!");
//        } 
//       } else { 
//         console.log("Welcome back, I knew you'd like it!"); 
//       }

      /* This is a practice demo  
      for multiple line */
      //This a comment for single line //

      // let a = 10; // i have set the value of a to 10
      // console.log(a);
       /* Some Javascript variables and functions
      prompt("Hi! How are you");
      Math.random(); to generate random number which are in fraction
      console.log(Math.random() * 100);
      Math.floor() add this to avoid fraction i.e from 0-100
      console.log(Math.floor(Math.random() * 100));  */
      // let language = "Javascript";
      // let message = `Let's learn ${language}`;
      // console.log(message);

      // let str = "Hello, what's your name? Is it \"mike\"?";
      // console.log(str);
      // let str2 = `Hello, what\'s your name? Is it "Mike"?`;
      // console.log(str2);
      // let str3 = "New \nline,";
      // let str4 = "Im containing a backlash: \\!";
      // console.log(str3);
      // console.log(str4);

      // let intNr = 1;
      // let decNr = 1.5;
      // let expNr = 1.4e15;
      // let octNr = 0o10; //decimal version would be 8 
      // let hexNr = 0x3E8; //decimal version would be 1000
      // let binNr = 0b101; //decimal version would be 5

      // let inNr2 = 3434;
      // let intNr3 = -111;
      // let decNr2 = 45.78;
      // let binNr2 = 0b100; //decimal version would be 4
      // let bigNr =9007199254749920n;

      // let bool1 = false;
      // let bool2 = true;

      // let objectIsDeleted = false;
      // let lightIsOn = true;

      // let str1 = "JavaScript is fun!";
      // let str2 = "JavaScript is fun!";
      // console.log("These two strings are the same:", str1 === str2);

      // let sym1 = Symbol("JavaScript is fun!");
      // let sym2 = Symbol("JavaScript is fun!");
      // console.log("These two Symbols are the same:", sym1 === sym2);

      // let unassigned; 
      // console.log(unassigned);

      // let terribleThingToDo = undefined;
      // let lastName;
      // console.log("Same undefined:", lastName === terribleThingToDo);

      // let betterOption = null; 
      // console.log("Same null:", lastName === betterOption);
      
      // let nrToStr = 6;
      // nrToStr = String(nrToStr);
      // console.log(nrToStr, typeof nrToStr);

      // let strToNr = "12";
      // strToNr = Number(strToNr);
      // console.log(strToNr, typeof strToNr);

      // let strToBool = "any string will return true";
      // strToBool = Boolean(strToBool);
      // console.log(strToBool, typeof strToBool);

      // let strToNr2 = "hello";
      // strToNr2 = Number(strToNr2);
      // console.log(strToNr2, typeof strToNr2);

      // let nr1 = 12;
      // let nr2 = 14;
      // let result1 = nr1 + nr2;
      // console.log(result1);
      
      // let str1 = "Hello ";
      // let str2 = "addition";
      // let result2 = str1 + str2; 
      // console.log(result2);

      // let myName = "Timothy ";
      // let age = 30 ;
      // let myAbility = " I can code JavaScript";
      // let myResult = myName + age + myAbility;
      // console.log(myResult);


      // let first = "Hello, my name is Maaike,";
      // let second = " I am 29 years old";
      // let third = " I can code Javascript"
      // console.log(first + second + String(third));

      
      //exponential
    /*  let nr1 = 2;
      let nr2 = 3;
      let result1 = nr1 ** nr2;
      console.log(result1);*/

    /*  let nr1 = 10;
      let nr2 = 3;
      let result1 = nr1 % nr2;
      console.log(`${nr1} % ${nr2} = ${result1}`);

      let nr3 = 8;
      let nr4 = 2;
      let result2 = nr3 % nr4;
      console.log(`${nr3} % ${nr4} = ${result2}`);

      let nr5 = 15;
      let nr6 = 4;
      let result3 = nr5 % nr6;
      console.log(`${nr5} % ${nr6} = ${result3}`); */

      /* let nr1 = 4;
      nr1++;
      console.log(nr1);

      let nr2 = 4;
      nr2 --;
      console.log(nr2);

      // x^2 is the same as x**=2
      let x = 2
      x += 2;
      console.log(x);
      x-=2;
      x*=6;
      x/=3;
      x**=2;
      x %=3;
      console.log(x);

      x +=5, is also x = x+5
      x **=3, is also x = x^3 or x**3

      */

      // let b =2;
      // let c =3;
      // let d =4;
      // c +=b;
      // b /=d;
      // d %=4;
      // console.log(b);
      // console.log(c);
      // console.log(d);

     

      let x = 5;
      let y = 6;
     
      console.log(y > x);

      let arr = [" hi there", 5, true];
      console.log(typeof arr[0]);
      console.log(typeof arr[1]);
      console.log(typeof arr[2]);

      cars = ["Toyota", "Renault", "Volkswagen"];
      console.log(cars[0]);
      console.log(cars[1]);
      console.log(cars[2]);
      console.log(cars[3]);
      console.log(cars[-1]);

      //overwriting the elements
      cars[0] = "Tesla";
      console.log(cars[0]);
      console.log(cars);

      //overwriting the elements that does not exist
      cars [3]= "kia";
      cars[-1] = "Fiat";

      console.log(cars[3]);
      console.log(cars);

      colors= ["black","orange", "pink"]
      booleans = [true,false, false, true];
      emptyArray =[];

      console.log("Length of colors:", colors.length);
      console.log("Length of booleans:", booleans.length);
      console.log("Length of empty array:", emptyArray.length);

      // index or an array starts from 0 while the length is the total number of items in the arrays, to get the index in an array 1 can be substract from the length 
      lastElement = colors[colors.length - 1];

      numbers = [12, 24, 36];
      numbers[5]= 48;
      console.log(numbers.length);
      console.log("numbers", numbers);


      // PUSHING ELEMENT METHOD 
      shops = ["Milk", "Bread", "Apples"];
      console.log(shops.length);

      shops[1]= "Banana";
      console.log("Shopping list",shops);
      
      favoriteFruits = ["grapefruit", "orange", "lemon"];
      favoriteFruits.push("tangerine");

      let lengthOfFavoriteFruits = favoriteFruits.push("lime");

      console.log(favoriteFruits);

      favoriteFruits.push("Mango");

      console.log(favoriteFruits);

      let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
      arrOfShapes.splice(2, 2, "square", "trapezoid");
      console.log(arrOfShapes);

      let arr5 = [1, 2, 3];
      let arr6 = [4, 5, 6,];
      let arr7 = arr5.concat(arr6);
      console.log(arr7);

      let arr8 = arr7.concat(7, 8, 9);
      console.log(arr8);

      // DELETING ELEMENTS

      arr8.pop(); //deleting from backward, one at a time 
      arr8.shift(); // deleting from front, one at a time 
      console.log(arr8);

      // splice() can also be use to delete 
      arr8.splice(1, 3);
      console.log(arr8);

      // To leave the value empty without replacement
      delete arr8[0];
      console.log(arr8);

      //finding elements 
      arr8 = [2, 6, 7, 8 ];
      let findValue = arr8.find(function(e) { return e  === 6});
      let findValue2 = arr8.find(e => e === 10);
      console.log(findValue, findValue2);

      arr8 = [2, 6, 7, 8 ];
      let findIndex = arr8.indexOf(6);
      let findIndex2 = arr8.indexOf(10);
      console.log(findIndex, findIndex2);

      arr8 = [2, 6, 7, 8 ];
      let findIndex3 = arr8.indexOf(6, 2);
      console.log(findIndex, findIndex3);

      let animals = ["dog", "horse", "cat", "platypus", "dog"];
      let lastDog = animals.lastIndexOf("dog");
      console.log(lastDog);

      // FOR SORTING
      let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
      names.sort(); 
      console.log(names);

      let ages = [ 18, 72, 33, 56, 40];
      ages.sort();
      console.log(ages);

      names.reverse();
      console.log(names);


      // Practise

      let list = ["Milk", "Bread", "Apples"];
      list.push("Bananas", "Eggs");
      list.pop();
      console.log(list);

      list.sort();
      console.log(list);

      let lastList = list.lastIndexOf("Milk");
      console.log(lastList);

      list.push("Carrot", "Lettuce");
      let newList = [ "Juice", "Pop"];
      let totalList = newList.concat(list);
      console.log(totalList);

      let lastTotal = totalList.lastIndexOf("Pop")
      console.log(lastTotal);

      expres2 = function(name) {
        let family = "Us"
        if(name === "dami") {
          console.log("You are not my child");
        } else {
          console.log(family);
        return "You are not my family";
        }
        
      }
      expres2("dami")

      let emma = 2;
      emma =5;

      switch(emma) {
        case 2:
          console.log("Value is 2")
          break;
          case 5:
            console.log("5")
            break;
      }

            switch(20) {
        case 5:
          console.log("Value was five");
          break;
          case 10:
            console.log("The Value was ten");
            break;
            default:
              console.log("The value was something unexpected");
      }

      let someValue1 = [1, 2, 3];
      let someValue2 = [4, 5, 6];
      let someValue3 = [7, 8, 9];

      let arrOfArrays = [someValue1, someValue2, someValue3];
      let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      console.log(arrOfArrays);
      console.log(arrOfArrays2);

      let value1 = arrOfArrays[0][1];
      

      






// /* =============================
//     NUMBER OF TIME LOOP IS RUN
//   ==============================

//   LOOPS

//   Skip an iteration
//   - with the use of continue, you can skip an iteration

//   exit a loop 
//   - break statement will immediately exit the loop and move on to any code that follows it.

//   for...
//   for(initializer; condition; final-expression) {
//     code to run
//   }
  
//   - use of for keyword
//   - Best used to iteration over a known quatity.

//   for...of 
//   - use of for keyword followed by a of 
//   - iterate the values stored in an iterable data structure like array.

//   */
//  let randomize = () => Math.floor(Math.random() * 20)
//  let random = randomize()
//  console.log(` The number is not ${random}`);
// The number is not 9
// while( random !== 5){console.log(` The number is not ${random}`);
//       random = randomize();
// }

// for( let z = 0; z< 5; z++){
//   console.log(`the value is ${z}`);
// }


// // FUNCTION

// function functionName(parameters){
//   //block statement or function body 
//   return; //optional return statement
// }

// /* Invoking a function
// -  a function does nothing until it is called.
// -  a function is called with the identifier and a ()

// Parameters and Arguments 
// - The placeholder value contained in the () when a function is declared is known as a parameter. 
// - The values in the () when a function is invoked is known as arguments.

// Expressing a function 
// - Used to create anonymous functions - absence of an identifier
// - created when an expression is required
// - The addEventListener() is a good example of a function receives a function as an argument.*/

// const myVariable1 = () => {
//   /** function body */
// }

// //  
//  Syntax;
//  - Pair of parentheses ()to hold parameters if any 
//  - An arrow made up of equal 

//  Function Scope 
//  scope - identifies the current context of execution in which values and expressions are visible and can be referenced. 

//  variables and expressions defined inside a function are not accessible outside of that function. 


// CONSTRUCTORS FUNCTIONS FOR PERSON OBJECT
/* function Person (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName =function() {
    return this.firstName + " " + this.lastName + " "+ this.age + " " + this.eyeColor
  };
  
}

// Create a Person object
const myFather = new Person ("John", "Doe", 50, "Blue");
const myMother = new Person ("Stella", "Doe", 48, "Green");
const myself = new Person ("Maaike", "Doe", 29, "Brown");

//Display full name
document.getElementById("demo").innerHTML = "My father is " + myFather.fullName();

    function countscores() {
      for (let i=1; i<=5; i++) {
        alert("Score is " + i);
      }
    } */

      //EXAMPLE OF AN OBJECT 
      // let dog = { dogName: "JavaScript",
      //   weight: 2.4;
      //   breed: "Chihuahua",
      //   age: 3,
      //   burglarBiter: true
      // };

      // dog["color"] = "blue"; // is the same as the below
      // dog.color = "blue";

      let company = { companyName: "Healthy Candy",
        activity: "food manufacturing",
        address: {
          street: "2nd street",
          number: "123",
          zipcode: "33116",
          city: "Miami",
          state: "Florida" 
        },
        yearOfEstablishment: 2021
      };
      // we can change or modify any properties with this two approaches:
      company.address.zipcode = "33117";
      company["address"]["number"] = "100";


      // Arrays in objects 

      company = { companyName: "Healthy Candy",
        activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
        address: {
          street: "2nd street",
          number: "123",
          zipcode: "33116",
          city: "Miami",
          state: "Florida"
        },
        yearOfEstablishment: 2021
      };

      // To access the secon value in the activities array:
      let activity = company.activities[1];

      // in a case where our company has many addresses:
       let addresses = [{
          street: "2nd street",
          number: "123",
          zipcode: "33116",
          city: "Miami",
          state: "Florida"
       },
      {
          street: "1st West avenue",
          number: "5",
          zipcode: "75001",
          city: "Addison",
          state: "Texas"
      }];

      // The street name of the first object can be fetched using :
      let streetName = addresses[0].street;


      //Objects in arrays in objects
            company = { companyName: "Healthy Candy",
        activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
        address: [{
          street: "2nd street",
          number: "123",
          zipcode: "33116",
          city: "Miami",
          state: "Florida"
        },
      {
        street: "1st West avenue",
          number: "5",
          zipcode: "75001",
          city: "Addison",
          state: "Texas"
      }],
        yearOfEstablishment: 2021
      };

      // access street name of healthy candy first address:
      let streetName = company.address[0].street;

      // im at Page 93 Javascript





      // TS class JSON And Asynchronous 
      // json stands for JavaScript Object Notation, it is a format for storing and transporting data. It is often used when data is sent from a server to a web page. JSON is "self-describing" and easy to understand.

       const parseData = `{
        "name": "John Doe",
        "age": 30,
        "email": "",
        "children": [
          {
            "name": " Ada Doe",
            "age": 5
          },
          {
            "name": "Alex Doe",
            "age": 3
          }
        ]
      }`;

      // change a string into an object
      console.log(JSON.parse(parseData));

      const data = {
        "name": "John Doe",
        "age": 30,
        "email": "",
      }

      // change an object into a string 
      console.log(JSON.stringify(data));