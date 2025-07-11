//While		
// "1.Write a program that prints numbers from 1 to 10 using a while loop.
let int=1
while(int<=10){
    console.log(int)
    int++;
}


//2.Write a program that asks the user to enter a password repeatedly until the correct one is entered using a while loop.
let code=23456
let password=""
while(password !== code){
    password=prompt("enter the password")
    if(password==code){
        console.log("password is valid")
    }
    else{
        console.log("try again")
    }
}

//do...while 		
// Use a do...while loop to prompt a user to enter a number greater than 100. Keep asking until they do.
let user=""
    do{
        console.log("highest number")}
while(user>=100){
    user=prompt("enter the highest number")
    if(user>=100){
        console.log("your value is higher then 100")
    }
    else{
        console.log("enter number above 100")
    }
user++;
    }


//for		
//1.Write a program that prints all even numbers from 2 to 20 using a for loop.
for(let i=2; i<=20; i++)
{
    if(i%2==0) console.log(i)
}



//  2.Write a program that calculates the factorial of a number using a for loop.
let num=5;
let factorial=1;
for(let i=1; i<=num; i++){
    factorial=factorial*i
}

console.log(factorial)



//break/continue	
// 	"1.Write a program that prints numbers from 1 to 10 but stops if the number is 5 using break. 
for(let i=1; i<=10; i++){
    if(i==5){
        break;
       
    }
     console.log(i)
}



//2. Write a program that prints numbers from 1 to 10 but skips even numbers using continue.

for(let i=1; i<=10; i++){
    if(i%2==0){
        continue;
       
    }
     console.log(i)
}



//for...of loop	
// 	Given an array of fruits, use a for...of loop to print each fruit name.
let fruit=["apple","banana","strawbery"]//for-of

for(let value of fruit){
    console.log("fruits:"+value)
}
//output
//fruits:apple
//fruits:banana
//fruits:strawberry




//for...in loop		
// Create an object person = {name: "John", age: 25, city: "New York"} and print all the keys and values using a for...in loop.
let fruits=["apple","banana","strawbery"]//for-in

for(let value in fruits){
    console.log(fruits[value])
}
//output
//apple
//banana
//strawberry