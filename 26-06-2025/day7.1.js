// class BankAccount{
//     constructor(name,account,pin){
//         this.name=name;
//         this.balance=account;
//         this.pin=pin;
//         this.accountNumber=Math.floor(Math.random()*900000+100000)
//     }
//     deposit(amount){
//         if(amount>0){
//             this.balance+=amount
//             console.log(`Deposited ${amount}. New Balance: Rs. ${this.balance}`)
//         }
//         else{
//             console.log("Deposited amount must be greater than 0")
//         }
//     }
//     withDraw(amount){
//         if(amount>0 && amount <= this.balance){
//             this.balance-=this.amount
//             console.log(`withdraw amount: ${amount}. New balance: ${this.balance}`)
//         }
//         else{
//             console.log("Insufficient amount")
//         }
//     }
//     getAllDetails(pin){
//         if(this.pin == pin){
//         console.log(`Name is ${this.name}, Balance is ${this.balance} and AccountNumber is ${this.accountNumber}`)
//         }
//         else{
//             console.log("invalid pin")
//         }
//     }
// }

// const p1=new BankAccount("Prakash",5000000,8765)
// console.log(p1.deposit(5000))
// // console.log(p1.withDraw(5000))
// console.log(p1.getAllDetails(8765))


// (function (name) {
//     console.log(`Hello, ${name}!`);
// })('Prakash');

// function outer(){
//     let name="prakash"
//     function inner(){
//         console.log(name)
//     }
//     return inner
// }

// let greet = outer()
// console.log(greet())



// function sum(...x){
//     console.log(x)
// }
// sum(1,2,3,4,5,6)



