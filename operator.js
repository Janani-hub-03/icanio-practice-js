/*1.Create a program that takes two numbers and performs all arithmetic operations (+, -, *, /, %, **). Print each result with a label.*/

let a=20,b=10;

let add=a+b,sub=a-b,mul=a*b,div=a/b,mod=a%b,exp=a**b;
console.log("Arithmetic opertors of a=20, b=10")
console.log( "Addition of a and b:", add, "subtraction of a and b:",sub, "multiplication of a and b",mul, "division of a and b:",div, "modulus of a and b :",mod, "Exponential of a and b :",exp)






/*2.Create a program that declares a variable with a numeric value and modifies it using assignment operators (=, +=, -=, *=, /=, %=). 
Print the variable after each operation.*/

let n=20,n1=30,n2=10;
let add1= n+=n1;
let sub1= n1-=n2;
let mul1=n*=n2;
let div1= n2/=n1;
let mod1=n2/=n;

console.log("addition of += :",add1)
console.log ("substraction of -= :",sub1)
console.log ("multiplication of *= :",mul1)
console.log  ("division of /= :",div1)
console.log ("modulus of %= : ",mod1)


/*3.Create a program that compares two variables (number and string) using ==, ===, !=, !==, <, <=, >, >=.
 Print the result of each comparison.*/
let digit=12345;
let str="12345";
double_equal= digit==str;
triple_equal= digit===str;
not_equal= digit!=str;
not_equal_equal= digit!==str;
greater_than_equal= digit>=str;
less_than= digit<str;
less_than_equal= digit<=str;
greater_than= digit>str;

console.log("==: ",double_equal )
console.log("===: ",triple_equal )
console.log("!=: ",not_equal )
console.log("!==: ",not_equal_equal )
console.log(">=: ",greater_than_equal)
console.log("<",less_than)
console.log("<=: ",less_than_equal)
console.log(">",greater_than)



/*4.Create a program that checks if a number is positive, negative, or zero using nested ternary operators.
 Print the appropriate message.*/

let number=-20
let result= number>0? "positive": number<0? "negative" : "zero";
console.log("the number is:",result)