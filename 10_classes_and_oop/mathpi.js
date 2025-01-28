//Lec 47: Now you know Objects in Javascript



// console.log(Math.PI); //3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  //3.141592653589793 -->unable to overwrite
//so the QUESTION is can we change the value from 3.14 to like 5 or 6  , yes we can but behind the scene it is very hard coded as false, but Object ke pass ye sab properties hoti hai and you can also define these kinds of properties

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);    //   {
                            //    value: 3.141592653589793,
                            //    writable: false,   //here it it hard coded as false, but we can change
                            //    enumerable: false,
                            //    configurable: false
                            //  }


//---now we create an Object and do changes----
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //ishki writable true hai

//to make changes
Object.defineProperty(chai, 'name', {
    writable: false,  //here ee changed to false
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//-------------------
for (let [key, value] of Object.entries(chai)) { //we use Object.entries(chai) to make the object iteratable
    if (typeof value !== 'function') {
         console.log(`${key} : ${value}`);
    }
}


