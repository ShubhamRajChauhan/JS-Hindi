//Lec 26: Control flow in javascript  (Part 3)


//const userEmail = "@iambikky"  //Got user email
//const userEmail = ""  //Don't have user email
const userEmail = []  //Got user email

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



//to check is it array
if(userEmail.length === 0) {
    console.log("Array is empty");    
}



//to check is it object
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");    
}




//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN, else all are truthy values 
//truthy values: "0", 'false', " ", [], {}, function(){}




/*
false == 0   --> true
false == ''  --> true
0 == ''  --> true
*/




// Nullish Coalescing Operator (??) : null   undefined
let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10  //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 15  //10
console.log(val1);



//Terniary Operator -->   condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



