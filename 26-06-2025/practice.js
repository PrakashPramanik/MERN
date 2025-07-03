//  1. Reverse a String

// var a = "Prakash";
// ans=""
// for(let i of a){
//     ans=i+ans
// }
// console.log(ans)


// 2. Check for Palindrome

// var a="hello"
// ans=""
// for(let i of a){
//     ans=i+ans
// }
// console.log(ans==a)

// 3.

// var s="The quick brown fox jumped over the lazy dog"
// longest_word = ''
// var b = s.split(" ")
// for(let a of b){
//     if (a.length>longest_word.length){
//         longest_word=a
//     }
// }
// console.log(longest_word)


// 4.

// var a=[1, [2, [3, 4], 5], 6]
// console.log(a.flat(3));
// console.log(a.flat(Infinity));
// console.log([String(a)])


// 5.

// var a = [1, 2, 2, 3, 4, 4, 5]

// console.log([...new Set(a)])

// 6.

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const x = (str) => str.toLowerCase().split('').sort().join('');
//   return x(str1) === x(str2);
// }

// console.log(isAnagram("silent","listen"))

// 7.

// var s="hello world"

// var k=s.split(" ")
// ans=""
// for(let a of k){
//     ans+=a.charAt(0).toUpperCase() + a.slice(1)+" "
// }
// console.log(ans.trim())

// 9.

// var numbers = [1, 2, 3, 4];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);

// 10.

// async function getData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch failed:', error);
//   }
// }

// getData();


// 11.

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// const counter = outer();
// counter();

// 13.

// var s="this_is_a_test"
// var k=s.split("_")
// ans=k[0]
// for(let a of k.slice(1)){
//     ans+=a.charAt(0).toUpperCase() + a.slice(1)
// }
// console.log(ans)


// 15.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }

// }

// class Student extends Person {
//   constructor(name, grade) {
//     super(name); 
//     this.grade = grade;
//   }

//   study() {
//     console.log(`${this.name} is studying in grade ${this.grade}.`);
//   }
// }

// var obj1=new Student("xyz",10)
// obj1.greet()


