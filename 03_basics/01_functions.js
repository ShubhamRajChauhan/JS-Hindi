//Lec 19: Functions and parameter in javascript

function sayMyName() {
    console.log("B");
    console.log("I");
    console.log("K");
    console.log("K");
    console.log("Y");
}

//sayMyName()



/*
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}


//addTwoNumbers(3, 4) //7
const result = addTwoNumbers(3, 5) //8
console.log("Result: ", result); //Result:  undefined
*/

 


/*
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) 
console.log("Result: ", result); 
*/



function loginUserMessage(username = "sam") {
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Bikky")) //Bikky just logged in
console.log(loginUserMessage()) 

 
