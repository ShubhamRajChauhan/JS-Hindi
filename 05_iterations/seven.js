//Lec 30: Filter map and reduce in javascript(Part: 2)
//----------------------Map---------------------------------------

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/*
const newNums = myNumers.map( (num) => num + 10)
//or
//const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);
*/





//chaining -> 2,3 method direct laga do
//Q.pehle each nums 10 se multiply kr do then each nums mai 1 add kr do then print only the numbers that are greater than 40
const newNums = myNumers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums);
               


