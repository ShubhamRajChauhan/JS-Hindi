//Lec 13: Date and time in depth in javascript

//Dates

/*
let myDate = new Date()
console.log(myDate);   //2024-11-07T10:50:49.042Z
console.log(myDate.toString()); //Thu Nov 07 2024 16:20:49 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Nov 07 2024
console.log(myDate.toISOString()); //2024-11-07T10:50:49.042Z
console.log(myDate.toJSON()); //2024-11-07T10:50:49.042Z
console.log(myDate.toLocaleString()); //7/11/2024, 4:20:49 pm
console.log(typeof myDate);  //object
*/



//let myCreatedDate = new Date(2023, 0, 23) //Mon Jan 23 2023
//let myCreatedDate = new Date(2023, 0, 23, 5, 3) //23/1/2023, 5:03:00 am
//let myCreatedDate = new Date("2023-01-14") //14/1/2023, 5:30:00 am
let myCreatedDate = new Date("01-14-2023") //14/1/2023, 12:00:00 am
//console.log(myCreatedDate.toLocaleString()); 

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));  //to convert in seconds



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay()); //monday=1, tuesday=2, ans so on..


console.log(`${newDate.getDay()} and the month is ${newDate.getMonth()}`)


newDate.toLocaleString('default', {
    weekday: "long"
})