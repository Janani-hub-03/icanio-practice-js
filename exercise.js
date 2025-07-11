/*1. Write a program that determines whether a given number is positive or negative.
2. Write a program that checks if a number is even or odd.
3. Write a program to determine the greater of two numbers.
4.Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
5.Write a program that calculates the ticket price based on age with the following 
conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10,
 age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
6.Write a program that determines if a year is a leap year.
7.Write a program that calculates a discount based on the purchase amount.Prices equal or over
 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
8. Write a program that greets the user based on the time of day. Display good morning, good afternnon or good
 evening based on the time of day when you run the code.
9. Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: 
weight / (height * height).
10. Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players
 clues if their guess is higher, lower or correct.
*/
 

//ex1
let number=-20;
if(number>0){
    console.log("positive")

}
else{
    console.log("negative")
}

//ex2
let num=20;
if(num % 2 ==0){
    console.log("even")
}
else{
    console.log("odd")
}


//ex3
let n1=30;
let n2=40;
if(n1>=n2){
    console.log(`${n1} is greater`)

}
else{
    console.log(`${n2}is greater`)
}

//ex4
let mark=30;
let grade;
if(mark>=90){
    grade="A"
}
else if(mark>=80){
    grade="B"
}
else if(mark>=60){
    grade="C"
}
else if(mark >=40){
    grade="E"
}
else{
    grade="F "
}

console.log("grade :", grade)


//ex5
/*5.Write a program that calculates the ticket price based on age with the following 
conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10,
 age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.*/

 
 let age=90;
 let ticketprice;
 if (age<=12){
    ticketprice=5
 }
 else if(age<=18){
    ticketprice=10
 }
 else if(age<=60){
    ticketprice=20
 }
 else{
    ticketprice=15
 }

 console.log("Your Ticket price is:", ticketprice)




 //ex6
 let year=2000;
 if(year%4==0 && year%100==0 || year%400==0){
    
    console.log("leap year")

 }else{
    console.log("not a leap year")
 }

 //ex7
 //Write a program that calculates a discount based on the purchase amount.Prices equal or over
 //100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let price=prompt("enter your price");
let discount;
if(price>=100){
    discount=20
}
else if(price>=50){
    discount=10
}
else{
    discount=0
}
console.log("discount is:",discount)






//ex8
let time=14
let greet;
if(time>=1 && time<=4){
    greet="Early morning"
}
else if(time>=5 && time<=12){
    greet="Good Morning Buudy!"
}
else if(time>=13 && time<=15){
    greet="Good Afternoon Buddy!"
}
else if(time>=16 && time<=19){
    greet="Good Evening Buddy !"
}
else if(time>=20 && time<=24){
    greet="Good night buddy !"
}

else{
    greet="Enter a timw betweeen 1 to 24 only"
}

console.log(greet)



//ex9
let height=30;
let weight=240;
let bmi=weight/(height*height)
console.log("the BMI VALUE is :",bmi )






//ex10
let secretnumber=6;
let guess=prompt("enter your guessing number")
if(guess==secretnumber){
    console.log("Congratulations!, your have guess the number correctly!")
}
else if(guess<=secretnumber){
    console.log(`Try some higher number then ${guess}`)
}
else{
    console.log( `try some lesser number than ${guess}`)
}

