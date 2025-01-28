//Lec 48: Getter Setter and Stack Overflow  (C)

//----implementation of getter and setter jab classes nhi hoti thi----
//using objects

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);  //H@HC.COM
