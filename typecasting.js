
//Type Conversion vs Coercion

/*Create a program that adds a string and a number, then compares it with the result of converting the string to a number explicitly. 
Print both results and explain the difference between type coercion and type conversion*/

let dig=20;
let str="25"
console.log(dig + str)
console.log(typeof (dig + str))

console.log( dig +Number( str))


//Implicit typr Casting
/*Create a program that uses implicit type casting in operations like +, -, ==, and compares a string with a number. 
Log the results and use typeof to analyze the behavior. */

let digit=20;
let value="30"
console.log(value  + digit)
console.log(typeof (value  + digit))
console.log(value - digit)
console.log(typeof (value  - digit))
console.log(value == digit)
console.log(typeof (value  == digit))




//Explicit type Casting
/*Create a program that takes a string input representing a number and converts it to an actual number using Number(), 
parseInt(), and parseFloat(). Then perform arithmetic operations on it.*/

let string="50"
console.log(Number(string))
console.log(typeof(Number(string)))///number
console.log(parseInt(string))
console.log(typeof(parseInt(string)))//number
console.log(parseFloat(string))
console.log(typeof(parseFloat(string)))//number

console.log("Arithmetic Operations")
console.log("number add",Number(string) + 20)
console.log("number sub",Number(string) - 20)
console.log("number mul",Number(string) *  2)
console.log("parseint add",parseInt(string) +20)
console.log("parseint sub",parseInt(string) -20)
console.log("parseint mul",parseInt(string) *2)
console.log("parsefloat add",parseFloat(string) +20)
console.log("parsefloat sub",parseFloat(string) -20)
console.log("parsefloat mul",parseFloat(string) *2)



