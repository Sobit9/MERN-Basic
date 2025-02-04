// Variables
// var name = "John";

// let
// let name = "John";

// const
// const name = "John";

// Data Types
// String
// let name = "John";
// Number
// let age = 25;
// Boolean
// let isMarried = true;
// Null
// let car = null;
// Undefined
// let test;
// Float
// let height = 1.75;

// Concatenation
// let greeting = "Hello"
// let name = "John"
// let message = greeting + " " + name

// console.log(message)

// Template String - ES6 - String Interpolation - Backticks
let greeting = "Hello"
let name = "John"
let message = `${greeting} ${name}`

console.log(message)

// functions
function sayHello() {
  console.log("Hello")
}

sayHello()

// fucntion with parameters
function sayHelloTo(name) {
  console.log(`Hello ${name}`)
}

sayHelloTo("John")

// Arrow functions
const sayHello2 = () => {
  console.log("Hello")
}

sayHello2()

// String properties and methods
let string = "Hello World! World"
// length
console.log(string.length)
// toUpperCase()
console.log(string.toUpperCase())
// toLowerCase()
console.log(string.toLowerCase())
// charAt()
console.log(string.charAt(4))
// indexOf()
console.log(string.indexOf("W"))
// lastIndexOf()
console.log(string.lastIndexOf("l"))
// substring()
console.log(string.substring(0, 5)) // Hello

// Array and it's methods and properties
let fruits = ["apple", "banana", "orange", "mango"]
// length
console.log(fruits.length) // 4
// push()
fruits.push("pear")
console.log(fruits) // ["apple", "banana", "orange", "mango", "pear"]
// pop()
fruits.pop()
console.log(fruits) // ["apple", "banana", "orange", "mango"]
// unshift()
fruits.unshift("pear")
console.log(fruits) // ["pear", "apple", "banana", "orange", "mango"]
// shift()
fruits.shift()
console.log(fruits) // ["apple", "banana", "orange", "mango"]
// indexOf()
console.log(fruits.indexOf("banana")) // 1
// splice()
fruits.splice(1, 2)
console.log(fruits) // ["apple", "mango"]
fruits.splice(1, 0, "banana", "orange")
console.log(fruits) // ["apple", "banana", "orange", "mango"]
// concat()
let vegetables = ["potato", "tomato", "onion"]
let fruitsAndVegetables = fruits.concat(vegetables)
console.log(fruitsAndVegetables) // ["apple", "banana", "orange", "mango", "potato", "tomato", "onion"]
// slice()
let fruitsCopy = fruits.slice(1, 3)
console.log(fruitsCopy) // ["banana", "orange"]
// sort()
fruits.sort()
console.log(fruits) // ["apple", "banana", "mango", "orange"]
const arr2 = [1, 22, 11, 5, 3, 2, 14]
arr2.sort() // [1, 11, 14, 2, 22, 3, 5]
arr2.sort((a, b) => a - b) // [1, 2, 3, 5, 11, 14, 22]
arr2.sort((a, b) => b - a) // [22, 14, 11, 5, 3, 2, 1]
// reverse()
fruits.reverse() // ["orange", "mango", "banana", "apple"]
