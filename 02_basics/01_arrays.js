//Lec 14: Array in Javascript 

//----------------------------------------Array------------------------------------------

//1.JS arrays are resizable and contain a mix of different data types 
//2.JS array-copy operations create swallow copies.
//3.A (shallow copy) of an object is a copy whose properties share the same references
//4.A (deep copy) of an object is a copy whose properties do not share the same refereces

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);


//---------------------------------------Array methods-----------------------------------

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) //insert in the start, but not a good method because to put this in first position we have to shift other elements , and that is time consuming
//myArr.shift() //remove from fisrt position



// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1 means doesn't exist
// console.log(myArr.indexOf(3)); //3



// const newArr = myArr.join()
// console.log(myArr); //arr type
// console.log(newArr); // convert into string type
// console.log(typeof newArr);



//best question for intrview 
//slice, splice

console.log("A", myArr);  //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //[ 1, 2 ] , and don't manipulate the arr
console.log(myn1);
console.log("B", myArr); //B [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) 
console.log(myn2); //// [ 1, 2, 3 ] , and manipulate the arr
console.log("C", myArr); // C [ 0, 4, 5 ]







