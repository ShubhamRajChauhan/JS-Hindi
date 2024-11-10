//Lec 11: Strings in Javascript

const name = "shubham"
const repoCount = 50

// console.log(name + repoCount + " Value");
// String Interpolation and we use this :
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string
const gameName = new String('shubhamraj-chauhan')
console.log(gameName[0]);  //s
console.log(gameName.__proto__);  //to see objects

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,6) //last value not included  
console.log(newString);

const anotherString = gameName.slice(-18,6)  //we can also give negative values
console.log(anotherString);


const newStringOne = "     shubham  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shubham.com/shubham%20chauhan"
console.log(url.replace('%20', '-'))  //to replace %20 by -
console.log(url.includes('shubham'))  //to ask


console.log(gameName.split('-')); //split the string on the basis of - means where this - comes, split form there 


