
//  Primitive  ------  7 tpyes : String, Number, Boolean, null, undefined, Symbol, Bigint

// Non primitive(reference) ---- Array ,Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

//const bigNumber = 3673763677898978n

const heros = ["salman", "srk", "amir"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);


// https://tc39.es/ecma262/#sec-typeof-operator




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory - Stack (Primitive), Heap(Non-Primitive)

let myYoutubename= "ghufranalam"
let anothername = myYoutubename
anothername = "ghufrancode"

console.log(myYoutubename);
console.log(anothername)


let userOne = {
    email: "user@google.com",
    upi: "usr@ybl"

}

let userTwo = userOne
userTwo.email = "ghufran@google.com"

console.log(userOne.email)
console.log(userTwo.email)
