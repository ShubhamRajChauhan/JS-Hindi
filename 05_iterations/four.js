//Lec 29: High Order Array loops (Part:2)


//-------------for in--------------
/*
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/





/*
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}
*/




/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United Stated of America")
map.set('Fr', "France")
map.set('IN', "India") 

for (const key in map) {
    console.log(key);    //won't print any thing because map is not itteratable
}
*/


//NOTE: mainly for array we use for of loop & for object we use for in