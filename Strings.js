var str = 'Hello Muskan this side!!!'
var str1 = 'how\'s you ???'

var str2 = 'My father told me one day,"Live a life that you will remember." '

console.log(str)
console.log(str1)
console.log(str2)


// string methods 

console.log(str.length)

var vari = str2.indexOf("one")

console.log(vari)

console.log(str1.indexOf("o"))

console.log(str1.indexOf("o" , 5))  // o is word we want to search and 5 is index after which we want our search

var stri = "If the facts don't fit the theory, change the facts.";

var pos1 = stri.indexOf("facts", 20);
console.log(pos1); // 0utputs: 46
 
// Searching backwards
var pos2 = str.lastIndexOf("facts", 20);
console.log(pos2); // 0utputs: 7


console.log(str2.lastIndexOf("one"))

console.log(str1.lastIndexOf("o"))

console.log(str.slice(10))
// slice(start index, end index) where end index is optional

console.log(str.slice(10, 18))


console.log(str.replace("Hello", "Greetings"))

console.log(str.toUpperCase())
console.log(str.toLowerCase())

var str3 = str.concat(str1)

console.log(str3)

var str4 = str + ' ' + str1

console.log(str4)

console.log(str.charAt(6))

console.log(str[7])

console.log(str1.split("'"))

var splitstr = str1.split("'");

console.log(splitstr[0])

console.log(splitstr[1])

var splitstr1 = str1.split("?");

console.log(splitstr1)