//Lec 26: Control flow in javascript 


// <, >, <=, >=, ==, !=, ===, !==


//if
const isUserloggedIn = true
const temperature = 41

/*
if( temperature < 50 ) {
    console.log("less than 50");
    
} else{
    console.log("temperatue is greater than 50");
}

console.log("execute");
*/





/*
const score = 200
if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`); // User power: fly
}
console.log(`User power: ${power}`); // won't execute because power is in another scope, and if we write  var power = "fly"  , then it will execute because var is for all scope  , so use let or const
*/




//short hand notation
const balance = 1000
if(balance > 500) console.log("test");
//if want to add more statement , but not do this
if(balance > 500) console.log("test"), console.log("test2");





