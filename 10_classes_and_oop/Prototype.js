//Lec 43: Magic of Prototype in javascript


/* 
Array -----> Object ------> null
String -----> Object ------> null
Function -----> Object ------> null
*/



// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  => we have to make a method(trueLength), jo true length return kare myName = "hitesh     " ke liye 6  aur  let mychannel = "chai     " ke liye 4


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//heroPower.hitesh() //hitesh is present in all objects
// myHeros.hitesh() //hitesh is present in all objects     //object ko power mili hai to power sabko mil gai 


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.heyHitesh() //Hitesh says hello  //array ko power mili to bs ushko hi mili hai
// heroPower.heyHitesh() //no access






//---------inheritance-----------
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()