//var c = 300
let a = 400
if (true){
    let a = 10
const b = 20
//console.log("INNER: ", a);

}


//console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "hitesh"

    function two (){
        const website = " youtube"
        //console.log(username);
    }
    //console.log(website);

    two ()
}
one ()
if (true) {
    const username = " ghufran"
    if (username === "ghufran"){
        const website = " youtube"
       // console.log(username + website);

    }
    //console.log(website)
}
//console.log(username);



// +++++++++++++++++++++++++++  intersting  ++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne (num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}




