const section1 = document.querySelector(".test1");
const section2 = document.querySelector(".test2");
const section3 = document.querySelector(".test3");
const section4 = document.querySelector(".test4");
const section = document.querySelector(".test6");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
const para5 = document.createElement("p");
const para8 = document.querySelector(".test5 p");



// do not edit the code above here!

 
// code for test 1 
// Fix the following code

let myName = "Default";
myName = "Chris";

let myAge = 42;

// Don't edit the code below here!
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section1.appendChild(para1);
section1.appendChild(para2);








// code for practice 2 
// insert your code here

// bodmas - bracket, order, division, 1:21:10
let result = (7 + 13 / 9) + 7;
let result2 = (100 / 2) * 6;

result = result * result;
result *= result2;

const finalResult = result.toFixed(2);


const finalNumber = Number(finalResult);

// Don't edit the code below here!
para3.textContent = `Your finalResult is ${finalResult}`;
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para4.textContent = finalNumberCheck;
section2.appendChild(para3);
section2.appendChild(para4); 

// code for practice 3

const quoteStart = ["Don't judge each day by the harvest you reap "];
let quoteEnd = [" but by the seed you plant"];
let finalQuote = quoteStart.concat(quoteEnd);

// Add your code here

// Don't edit the code below here!
para5.textContent = finalQuote;
section3.appendChild(para5); 



// code for practice 4
const para6 = document.querySelector(".score");
const para7 = document.querySelector(".response");
const switchButton = document.querySelector(".switch");

let machineActive = false;
let response;
let random = () => Math.floor( Math.random() * 100 ) + 1;
let score = 0;



// Don't edit the code below here!
switchButton.addEventListener("click", () => {
  machineActive = !machineActive;
  score = machineActive ? score = random() : 0; 

  // Add your code here

  if (machineActive) {
    if(score < 0 || score > 100) {
      response = "This is not possible, an error has occurred "
    }
    else if(score > 0 && score < 19) {
      response = "This is was a terrible score --- total fail!"
    }
    else if(score > 20 && score < 39 ) {
      response = "You know some things, but its a pretty bad score. Needs improvement."
    }
    else if (score > 40 && score < 70) {
      response = "You did a passable job, not bad!"
    }
    else if (score > 70 && score < 89) {
      response = "That's a great score, you really know your stuff"
  }
  else if (score > 90 && score < 100){
    response = "What an amazing score! Did you cheat? Are you for real?"
  }
  else {
    response = "Machine is off, Please turn on the machine to process score."
    }
  }
 

    // do not edit the code below
  para6.textContent = score;
  para7.textContent = response;
  switchButton.textContent = machineActive ? "Machine is on" : "Machine is off";
}); 
  







 // code for practice 5

 const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");
// Don't edit the code above here!

// Update the code below here

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter((name) => name.length < 5);
para8.textContent = shortNames;



// code for practice 6

let i = 500;
const para9 = document.createElement("p");

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

section.appendChild(para9);


 

const list = document.querySelector("ul");
const input =document.querySelector("input");
const button = document.querySelector(".addItem");

button.addEventListener("click", (event) => {
  event.preventDefault();

  let listOption = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listTest = document.createElement("span");
  const listBtn = document.createElement("button");


  if (listOption){
       listItem.appendChild(listTest);
  listTest.textContent = listOption;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);
  }
 
  listBtn.addEventListener("click", () =>  {
    listItem.remove(); 
    // list.removeChild(listItem);
  })

  input.focus();

});

const person = {
  name : ["Bob", "Smith"],
  age : 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
},
  introduceSelf: function () {
  console.log(`Hi! I'm ${this.name[0]}.`);
  },
};


// Create an Object 

const pet = {
  firstName: "John",
  LastName: "Doe",
  Id: 5566

};

// Add a Method 
pet.name = function(){
  return (this.firstName + " "+ this.lastName);
};

// Display Object Data
document.getElementById("demo").innerHTML = "My Father is " + pet.name();