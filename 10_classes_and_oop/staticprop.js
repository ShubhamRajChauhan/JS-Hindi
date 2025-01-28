//Lec 45: Class constructor and static

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){   //static keyword access dene se rok deta hai
        return `123`
    }
}

const shubham = new User("shubham")
shubham.logMe()  //Username: shubham
// console.log(shubham.createId())  ---> nothing will print



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe() //Username: iphone
// console.log(iphone.createId());  //nothing will print because of no access of createId due to static keyword