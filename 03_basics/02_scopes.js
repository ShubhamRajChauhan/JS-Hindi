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






//----------------------------------------------------------------------------------------------------------------------------------
//Lec 22: Scope level and mini hoisting in javascript 

//nested function  -->child function parent function ko access kar paate hai pr parent child ko nhi
function one() {
    const username = "shubham"

    function two() {
        const website = "youtube"
        console.log(username);        
    }
    //console.log(website);

    two()
    
}
one()



//scope in loops
if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
    console.log(username);
}
//console.log(username);



//++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
//console.log(addone(5))  -->agr hum function aaishe declare karte hai to agr hum call upr v karenge to koii problem nhi aayegi
function addone(num) {
    return num + 1
}
console.log(addone(5))


//or
//addTwo(5)  -->problem aa jayegi 
const addTwo = function(num) {
    return num + 2
}
addTwo(5)