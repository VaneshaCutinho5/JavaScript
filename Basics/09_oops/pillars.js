class User{
    #balance;  //private field - encapsulation

    constructor(username, balance){
        this.username = username;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    addFunds(amount){
        this.#balance += amount
        console.log(`${this.name} added ${amount}. New Balance is ${this.#balance}`);
    }
    makePayments(amount){
        if(amount > this.#balance){
            console.log(`${this.username} has insufficient balance.`);
            return false;
        }
            this.#balance -= amount
            console.log(`${this.username} paid ${amount}. Remaining balance is ${this.#balance} `);   
            return true;
    }
}

class RegularUser extends User{    //inheritance
    constructor(username, balance){
        super(username, balance)
    }
    makePayments(amount){
        console.log("Regular user payment:");
        return super.makePayments(amount)
    }
}
class PremiumUser extends User{    //inheritance
    constructor(username, balance){
        super(username, balance)
    }
    makePayments(amount){
        const discount = 0.1 * amount;
        const finalDiscount = amount - discount
        console.log("Premium user payment:");
        return super.makePayments(finalDiscount)
    }
}

const alice = new RegularUser("Alice", 1000);
const bob = new PremiumUser("Bob", 1000);

alice.makePayments(1200);
// Output: Regular user payment: Alice paid ₹200...

bob.makePayments(200);
// Output: Premium user payment with 10% discount: Bob paid ₹180...

console.log(alice.getBalance()); // 800
console.log(bob.getBalance());   // 820


// | OOP Concept       | Where It's Applied                                      |
// | ----------------- | ------------------------------------------------------- |
// | **Abstraction**   | User only sees `makePayment()`, not inner balance logic |
// | **Encapsulation** | `#balance` is private – can’t be changed directly       |
// | **Inheritance**   | `RegularUser` and `PremiumUser` extend `User`           |
// | **Polymorphism**  | Both override `makePayment()` with different logic      |
