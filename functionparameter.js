// Default Parameters
// 1.	Create a function that prints 3 favorite subjects without taking any input.

function favsub(sub1,sub2,sub3){
    console.log("favourite Subjects:",sub1,sub2,sub3)
}
favsub("tamil", "english", "computer")

// 2.	Create a function createCounter() that returns another function which increments and returns a count variable every time it's called.
function createCounter(){
    let count =0;
    return function(){
        count++
        return count;
    }
}
let counter=createCounter()
console.log(counter())
console.log(counter())
console.log(counter())





// Arrow Functions	
// 3.	Write a function called outerFunction() that defines a variable greeting. 
// Inside it, define an arrow function innerFunction that uses the greeting variable and prints a personalized message.

function outerfunction(){
    const greeting="hai good moring !"

    let innerfunction = () =>{
        console.log(greeting + "janani")

    }
    innerfunction()
}
outerfunction()


// IIFEs	
// 4.	Write an IIFE that calculates the square of a number and prints it.
(function(num) {
    console.log("The square is:", num * num);
})(5)


// arguments Object	
// 5.	Write a function that accepts any number of arguments and returns their sum using the arguments object.
function sum(){
    let total=0;
    for(let i=1;arguments.length;i++){
        total+=arguments[i]
    }
    return total;
}
let result=sum(10,20,30)
console.log(result)