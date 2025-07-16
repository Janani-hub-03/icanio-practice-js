//if..else
//1.Take three numbers as input and print which one is the largest using nested if...else. 

let b=30;
let c=60;
if(a>b>c){
    console.log(`${a} is greater then ${b} , and ${b} is grater then ${c}`)
}
else{
    console.log(`${a} is less then ${b} , and ${b} is less then ${c}`)
}



// 2.Write a program to check if a year is a leap year using multiple conditions: 
//  Divisible by 4,Not divisible by 100 unless divisible by 400

 let year=2000;
 if(year%4==0 && year%100==0 || year%400==0){
    
    console.log("leap year")

 }else{
    console.log("not a leap year")
 }




// 3. Write a program that takes a number and checks if it is even or odd using if...else.

let num=20;
if(num % 2 ==0){
    console.log("even")
}
else{
    console.log("odd")
}



//switch
//4. Create a switch-based program that prints "Vowel" if the input character is a, e, i, o, u; otherwise prints "Consonant".

let vowels="a"
let vowelis;
switch(vowels){
    case "a": vowelis=`${vowels} is a vowel`
    break;
    case "e": vowelis=`${vowels} is a vowel`
    break;
    case "i": vowelis=`${vowels} is a vowel`
    break;
    case "o": vowelis=`${vowels} is a vowel`
    break;
    case "u": vowelis=`${vowels} is a vowel`
    break;
    default: vowelis="consonant"

}
console.log(vowelis)


// Exceptional Handling 	 
// 5. 	Write a program that asks the user for input and tries to convert it to an integer. Handle errors if the input is not a number.


let input=prompt("enter a number")
if(isNaN(input)){
    throw("not an number")
}
else{
    console.log(input)
}


// 6. Write a function that accepts a number. If the number is negative, throw an error saying "Negative numbers not allowed".

function num(){
    num=prompt("enter a number")
    if (num<0){
        throw("negative number is not allowed")
    }
    else{
        console.log(num)
    }
}
console.log(num())


// try/catch/finally	
// 	7.Ask the user to input a number and convert it to an integer. If it fails, handle the error using try/catch/finally. 

try{
    user=prompt("enter a number:")
    if(isNaN(user)){
        throw("enter a valid number")
    }
    else{
        console.log ("valid number")
    }
  
    
}
catch(ex){
    console.log("string is not allowed")
}


// 8. Write a program that divides two numbers. Use try/catch/finally to handle division by zero and display a proper message.

function divide(a,b){
    try{
    if(b==0 || a==0){
        throw("not divisible my zero")
    }

    let c=a/b;
    console.log("result:",c)
   } 
   catch(e){
    console.log("error",e.message)
   }
   finally{
    console.log("division is attempted")
   }
}

divide(10,2)



// Error Objects	
// 9.Create a function that throws a custom error if a password is less than 6 characters, and catch the error using try/catch.

function password(a){
    if(a.length < 6  && isNaN(a)){
        throw new Error("password myst be 6 chracters long and also  not an string")
    }
    console.log("password is valid")
}
try{
    password("123")
}
catch(e){
    console.log(e)

}








































