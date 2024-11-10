//Lec 16: Objects in depth in javascript

//singleton ---> if made by constructor --> will know in future
//Object.create




const mySym = Symbol("key1")

//object literals
const JsUser = {        //<----- object declaration
    name: "Shubham", //name and shubham both are string
    "full name": "Shubham Raj Chauhan",
    //mySym: "mykey1",  //string and string 
    [mySym]: "mykey1",  //symbol and string 
    age: 18,
    locatin: "Jaipur",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//access object
console.log(JsUser.email) //<-- we prefer this
//or
console.log(JsUser["email"])   //<---we prefer this for cases like --> "full name": "Shubham Raj Chauhan",
console.log(JsUser["full name"])
console.log(JsUser[mySym])  //<---- important


//change the value of object
JsUser.email = "shubham@chatgpt.com"


/*
//freeze --> no one will change the value
Object.freeze(JsUser) 
JsUser.email = "shubham@microsoft.com"
console.log(JsUser)
*/


//lets add function in our object 
//java script mai aap function variables ki trh use kijiye koii diqat nhi hai
//1.
JsUser.greeting = function() {
    console.log("Hello JS User");    
}
//2.
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //<--- interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());