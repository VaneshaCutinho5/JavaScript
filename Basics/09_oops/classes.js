// class User{
//     constructor(username){
//         this.username = username;
//     }
//     logMe(){
//         console.log(`Username is ${this.username}`);
        
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)

//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`A new course has been added by ${this.username}`);
        
//     }
// }

// const chai = new Teacher("chai", "chai@gmail.com", "123");
// chai.addCourse();

// const masalaChai = new User("masala")
// masalaChai.logMe();
// // masalaChai.addCourse(); 
// chai.logMe(); //inheritance

// console.log(chai === Teacher);
// console.log(chai instanceof Teacher);
// console.log(chai instanceof User)

class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
    static createId(){              //static stops giving access 
        return `123`
    }
}

const user = new User("hitesh")
console.log(user.createId());
