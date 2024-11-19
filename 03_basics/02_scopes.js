//Lec 21: Global and local scope in javascript

//var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);
    
}


//console.log(a); //a is not defined
//console.log(b); //b is not defined
//console.log(c); //30

console.log(a);



// INTERVIEW: jab aap apne browser ke undr jaate hai , to console ke under jo scope use krte hai wo alag hai aur jab aap code environment mai node ke through run krte hai to aapka global socpe alg hai
