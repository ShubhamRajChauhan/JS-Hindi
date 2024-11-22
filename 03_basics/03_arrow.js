//Lec 23: THIS and Arrow function in javascript
const user = {
    username: "shubham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //this refers current context  
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);




/*
function chai() {
    let username = "shubham"
    console.log(this.username);  //we can't use this in functions , only in objects
}

chai()
*/

//(or)

/*
const chai = function() {
    let username = "shubham"
    console.log(this.username); //we can't use this in functions , only in objects
}

chai()
*/


//----------------------ARROW FUNCTION----------------------------------
const chai = () => {
    let username = "shubham"
    console.log(this.username);
}

//chai()


/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));
*/


//(or)
//implicit return 
const addTwo = (num1, num2) => num1 + num2
//(or) const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));


//const addTwo = (num1, num2) => ({username: "shubham"}) //jab object return karwana ho to , parentheses lagana hoi hoga



//key point: both arrow function and normal function dono mai this use nahi hota hai