//Lec 24: Immediately Invoked Function Expressions IIFE

//global scope ke pollution se problem hoti hai kai baar to us global scope ke jo variable ya jo v pollution hai ushke pollution ko hatane ke liye humne IIFE ka use kiya 
(function chai(){
    //named IIFE -> because ish function ka ek naam hai = chai
    console.log(`DB CONNECTED`);
})();  //Output: DB CONNECTED  //have to add semicolon , to end this code and to run the next one (means writing two IIFE)


/*
( () => {
    console.log(`DB CONNECTED TWO`);    
})()
*/


( (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);    
})('shubham')