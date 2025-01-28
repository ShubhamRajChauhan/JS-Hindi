//Lec 48: Getter Setter and Stack Overflow  (A)

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()   //use _
    }
    set email(value){
        this._email = value   //use _
    }

    get password(){
        return `${this._password}hitesh`   //use _
    }

    set password(value){
        this._password = value    //use _
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);  //abchitesh
console.log(hitesh.email); //H@HITESH.AI
