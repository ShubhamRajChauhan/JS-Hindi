//Lec 42: Object Oriented in Javascript


//--------Object literal -----------
const user = {
    username: "bikky",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




//------Constructor Function-------
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);





/*
About new keyword:
Step 1: jab aap new keyword use karenge to sabse pehle ek empty object create hota hai jisko hum instances bolte hai
Step 2: constructor function call hota hai new keyword ke karan, ye kya karta hai jitne v aapke arguments hai ye sab ushke under pass on ho jaate hai
Step 3: this mai wo arguments add ho jayenge aur aapko mil jayega
*/