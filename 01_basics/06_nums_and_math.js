//Lec 12: Number and Maths in Javascript

//NUMBERS : 

const score = 400
console.log(score);



const balance = new Number(100)  //now this 100  is 100% number
console.log(balance);


//console.log(balance.toString().length);
console.log(balance.toFixed(2));  //two decimal points after number = 100.00


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //start from index 0 and give the precise value


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000




//------------------------------------------------------------------------------------------------------------------
//MATHS :

/*

console.log(Math);
console.log(Math.abs(-4));  //- to +
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));  //5 - means thoda sa bhi 4 se jada hua to 5 return karega
console.log(Math.ceil(4.9));  //4 - means 4.9 bhi hai to 4
console.log(Math.min(4, 3, 6, 8));  //returns minimum value
console.log(Math.max(4, 3, 6, 8));  //returns maximum value

*/

console.log(Math.random());  //gives value between 0 to 1 mostly decimal values
console.log((Math.random()*10) + 1); // +1 to avoid 0 values
console.log(Math.floor(Math.random()*10) + 1); //to get single value


//to get value between minimum and maximum
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)  //this is the FORMULA to get the values b/w min. and max.





