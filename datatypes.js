/*1.Create a program that declares a string, number, and boolean, and prints both their values and types */

let user="janani";
const age=20;
let eligible=true;
console.log(typeof(user))
console.log(typeof(age))
console.log(typeof(eligible))


/*2.Create a program where you assign undefined to a variable and log the result. Then reassign a value to the same 
variable and print the type again. */

var users= undefined
console.log(user)
users="janani"

console.log(typeof(users))

/*3.Create a program that defines two Symbol variables with the same description and compares them using ===. 
Explain why the result is false. */

let sym1=Symbol("hello icanio this is jannani");
let sym2=Symbol("hello icanio this is jannani");
console.log(sym1===sym2)//false  //symbol is unique even the description is same


let sym3=Symbol.for("hello icanio this is jannani");
let sym4=Symbol.for("hello icanio this is jannani");
console.log(sym3===sym4)// true(it makes it global)



/*4.Create a program that checks if a person is eligible to vote using a Boolean variable. 
Age should be taken as a number and checked against a condition. */

let myage=20
if(myage>=18){
    console.log("eligible",myage)
}else{
    console.log("not eligible",myage)


}


/*5.Create a program that initializes a variable with null, then reassigns it to a number. Use typeof both times and log the outputs. */

let value=null;
console.log(value)
console.log(typeof (value))
value=30;
console.log("updated value",value,"type:", typeof(value))



/*6.Create a program that adds two large integers using BigInt and logs the result.
 Also, try to mix a BigInt and Number in an operation and observe the error. */

 let value1=12345678909948398158727158956478691784696728104567610847n;
let value2=49832872089780851075684973065760423895875603895748584752348n;
console.log(value1 + value2) //executed

let number=31427128;
console.log(value1+number)// cannot add number and bigint


/*7.Create a program that performs basic arithmetic operations (add, subtract, multiply, divide) on two numbers and logs the results. */


const a=10,b=20,c=40;
let add=a+b+c;
let sub=a- b-c;
let mul=a*b*c;
let divide=a/b;
console.log("addition od a,b,c is= ", add, "subtraction of a,b,c is=",sub, "multiplication of a,b c is=" ,mul, "division of a,b is=",divide)


/*8.Create a program that takes a first name and last name as strings, combines them using template literals, and prints the full name. */

let p_name="janani";
let city="tirunelveli";
let person_age= 20
let introduction= `hello everyone, I'm ${p_name} , I'm coming from ${city} , my age is ${person_age}`;
console.log("About",introduction)


/*9.Create a program that declares a variable but does not assign it any value. Print the variable and its type. */

let valuess;
console.log(typeof(valuess))  //output undefined