const name = "ghufranalam"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String ("ghufran")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("f"));

const newString  = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3,4)
console.log(anotherString);

const newStringOne = "   ghufran   "
console.log(newStringOne);
console.log(newStringOne.trim());

// study for trim ---https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://ghufran.com/ghufran%20ghufran"
console.log (url.replace('%20', '-'))

console.log(url.includes('ghufran'))
console.log(url.includes('arman'))

/// split ---https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

