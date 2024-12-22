//Lec 29: High Order Array loops (Part:1)

//----------for of---------------

// ["", "", ""]
// [{}, {}, {}]


/*
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
*/





/*
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
*/





//----------Maps-------------  -> hold key value pair , no duplicate value , all values are unique, not itteratable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United Stated of America")
map.set('Fr', "France")
map.set('IN', "India") //--> won't print it again

//console.log(map);

for (const key of map) {
    //console.log(key);  //--->     [ 'IN', 'India' ]
                       //         [ 'USA', 'United Stated of America' ]
                       //         [ 'Fr', 'France' ]
}


for (const [key, value] of map) {
    //console.log(key, ':-', value);    //-->   IN :- India
                                      //      USA :- United Stated of America
                                      //      Fr :- France
}






const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);     //myObject is not iterable
}



