// singleton 
// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "ghufran",
    "full name" : "md ghufran alam ",
    [mySym]: "mykey1",
    age: 18,
    location: "Muzaffarpur",
    email: "ghufranalam855@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["monday", "saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ghufran123@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "ghufranalam1234@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());