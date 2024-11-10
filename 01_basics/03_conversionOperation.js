//Lec 6: Datatype conversion confusion

/*
//let score = "33"
//let score = "33abc"
//let score = null
let score = undefined


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)  //convert into number
console.log(typeof valueInNumber)
console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) //convert into boolean
console.log(booleanIsLoggedIn);


// 1 => true, 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let strictNumber = String(someNumber) //convert into string
console.log(strictNumber)
console.log(typeof strictNumber)

*/




//********************************  OPERATIONS  ***********************************************
//Lec 7: Why string to number conversion is confusing

let value = 3
let negValue = -value
//console.log(negValue)



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " bikky"

let str3 = str1 + str2
console.log(str3)


console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32


console.log(true); //true
console.log(+true); //1  -> don't  use these kind of things 
console.log(+""); //0    -> don't  use these kind of things 

//don't prefer this in your code
/*
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
*/

//prefix and postfix increment -> read mdn documentation
let gameCounter = 100
// gameCounter++;
// ++gameCounter;
console.log(gameCounter);


//link to study (Type Conversion) -> https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

