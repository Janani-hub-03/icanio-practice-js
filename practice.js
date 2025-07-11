 /* 1.Create a program using var to declare a variable inside a loop and access it outside the loop. Explain what happens..*/

for(var i=0;i<3;i++){
    console.log("inside loop", i)


}
console.log("outside loop",i)


/*Create a program that declares a variable with let inside a block and tries to access it outside the block. 
Observe and explain the result.*/

{
    let value="hello icanio"
    console.log(value)//output
}
console.log(value)//value is not defined


/*Create a program using const to declare a constant object and modify one of its properties. 
Try to reassign the entire object and observe what happens.*/

const value=100

console.log(value)
//const value=200 //error , value has already declared
//console.log(value)


/*Create a program with a block {} that declares variables using var, let, and const.
 Try accessing each variable outside the block and explain what is accessible and why.*/

 {
    var name="janani";
    let lname="priya";
    const age=20;
}
console.log(name)//output
console.log(lname)//lname is not defined
console.log(age)//no execution



/*Create a function that declares variables using all three keywords (var, let, const).
 Log the variables inside and outside the function and explain the results.*/

function vehicle(){
var names = "hyundai";
let color= "Green";
const price= 100000;

console.log("inside function:")
console.log("vehicle name:", names)
console.log("vehicle color:", color)
console.log("vehicle price", price)
}
vehicle()
//in outside function nothing will define
console.log("outside function:")
console.log("vehicle name:", names)//name is not defined
console.log("vehicle color:", color)
console.log("vehicle price", price)


/*Create a global variable and use it in multiple functions. 
Modify the value in one function and print the updated value from another function. */

let user="janani";
function modify(){
    user="priya"
}

function updated(){
    console.log("updated value:", user)
}
updated()
modify()
updated()