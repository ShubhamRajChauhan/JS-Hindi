//Lec 9: Data types of javascript summary

/*  
  1.Primitive Datatypes :
    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



  2.JavaScript is a dynamic language, meaning that it has dynamic data types and variables can hold different types of values during runtime.


*/

  const score = 100
  const scoreValue = 100.3

  const isLoggedIn = false
  const outsideTemp = null
  //let userEmail;  (or) let userEmail = undefined



  const id  = Symbol('123')
  const anotherId = Symbol('123')
  console.log(id === anotherId);  //Output = false

  const bigNumber = 456754356678n

/*

  3.Refernce  or (Non primitive datatypes) :
    Array, Objects, Functions

*/

//array
const heros = ["shaktiman", "naagraj", "doga"] 

//object
let myObj = {                   
    name: "shubham",
    age: 22, 
}

//function
const myFunction = function(){
    console.log("Hello World");
}

//to get datatype
console.log(typeof bigNumber)   //bigint
console.log(typeof outsideTemp) //object
console.log(typeof scoreValue)  //number
console.log(typeof myFunction)  //function
console.log(typeof anotherId)   //symbol



/*
    typeof Operator Results

    Type of val                                                 Result
    Undefined                                                  "undefined"
    Null                                                       "object"
    Boolean                                                    "boolean"
    Number                                                     "number"
    String                                                     "string"
    Object(native and does not implement[[Call]])              "object"
    Object(native or host and does not implement[[Call]])      "function"
    Object(host and does not implement[[Call]])                Implementation-defined except may not be "undefined",
                                                               "boolean", "number", or "string".


    https://262.ecma-international.org/5.1/#sec-11.4.3                                                           
*/


//-------------------------------------------------------------------------------------------------------------------
//Lec 10: Stack and Heap memory in javascript

// Stack used in (Primitive) - we get a copy of declared variable 
// Heap used in (Non-Primitive) - here we get refernce or original value


//Stack
let myYoutubename = "shubhamdotcom"
let anothername = myYoutubename
anothername = "bikkydotcom"

console.log(myYoutubename);
console.log(anothername);


//Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shubham@google.com"

console.log(userOne.email);
console.log(userTwo.email);
