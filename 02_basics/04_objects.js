//Lec 17: Objects in Javascript part 2

//const tinderUser = new Object() //singleton object 
const tinderUser = {} //non-singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)




//object ke under object
const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "shubham",
            lastname: "chauhan"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.lastname)



//  merge two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = { obj1, obj2 }  <-- don't use this
const obj3 = Object.assign({}, obj1, obj2)  //<--- use this
console.log(obj3);
