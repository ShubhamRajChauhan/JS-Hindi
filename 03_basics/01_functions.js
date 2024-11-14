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

 



//----------------------------------------------------------------------------------------------------------------------
//Lec 20: Functions with objects and array in javascript
/*
function calculateCartPrice(...num1){  //...num1 = [ 200, 400, 500 ], give like this
    return num1
}

console.log(calculateCartPrice(200, 400, 500));
*/



function calculateCartPrice(val1, val2, ...num1){  
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)); //will give [ 500, 2000 ] ,because val1 takes the value 200 and val2 takes the value 400



//using object
const user = {
    username: "shubham",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//(or)
handleObject({
    username: "sam",
    price: 399
})



//using arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//(or)
console.log(returnSecondValue([200, 400, 500, 1000]));
