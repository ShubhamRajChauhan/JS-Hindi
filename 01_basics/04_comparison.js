//Lec 8: Comparison of datatypes in javascript

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);   // Output = false  
console.log(null == 0);  // Output = false
console.log(null >= 0);  // Output = true 
/* 
The reason is that an equality check == and comaparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is flase.
*/


//strict check (===)
console.log("2" == 2); //true
console.log("2" === 2); //false


//We avoid these kinds of comaprision , always follow clean code