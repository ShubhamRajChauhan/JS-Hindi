//Lec 40: Promise in javascript

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {  //connected to resolve means (resolve and then are connected to each other) <-- important 
    console.log("Promise consumed");
})



//(or)
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})






//pass data 
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})





//chaining
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);  //do the change (let error = false) , then username will be print
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))






//using async await   ---->thode der wait karta hai kaam ke hone ka, agr wo ho jata hai tab hi aaage badhta hai, warna wahi pr aapko error de deta hai
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()







//Example:
/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()
*/

//same example in (then and catch) format
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);  //yahan value aayegi jo upr wale then ne bheji hai matlab (response.json)
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.