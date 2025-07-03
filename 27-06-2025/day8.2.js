// 1.

// let email="email@email.com"
// let regex = /^\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/
// if(regex.test(email)){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }


// 2.

// let s="4534543"

// let regex = /^\d+$/
// if(regex.test(s)){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }


// 3.

// let p = "21002"
// let regex = /^\d{5}$/
// if(regex.test(p)){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }

// 4.

// let p = "8881002213"
// let regex = /^[6-9]\d{9}$/
// if(regex.test(p)){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }

// 5.

let p = "pRakash6789"
let regex = /[A-Z]/.test(p) &&  /[a-z]/.test(p) &&  /\d/.test(p)
if(regex){
    console.log("valid")
}
else{
    console.log("invalid")
}


// 6.


// let p = "hello1"
// let regex = /^hello/
// if(regex.test(p)){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }


// 7.

// let p = "hello .co"
// let regex = /\.com$/
// if(regex.test(p)){
//     console.log("valid")
// }
// else{
//     console.log("invalid")
// }

// 9.

// let p = "hello             .co"
// let regex = p.replace(/\s+/g, ' ')
// console.log(regex)