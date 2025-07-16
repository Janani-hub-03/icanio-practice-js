// Conditional Operators	
// 1.	Write a program that checks if a number is even or odd using the ternary operator.

let a3=23;
a3%2==0 ? console.log("even") :console.log("odd")


// Comma Operators	
// 2.	Write a program that declares multiple variables in a single statement using the comma operator:

let variables=(a=10,b=20,c=30,d=40)
console.log(variables)

//..
let variable=(a=20,b=30,c=a+b,d=10+a, a++,b++,c++,--d)
console.log(variable)



// Unary Opeartors	
// 3.Write a program to demonstrate the increment (++) and decrement (--) operators. 

let x=4;
let postinc=x++;
console.log("post increment :",postinc)

let preinc=++x;
console.log("Pre Increment:",preinc)

let postdec=x--;
console.log('Post decrement',postdec)

let predec=--x;
console.log("pre decrement:",predec)


// 3.1.Show the effect of unary minus (-) on a positive number.

let num=2, str="10";
let plus=+num;
let neg=-num;
let string=-str;
console.log(`${plus} is a positive number`)
console.log(`${neg} is a negative number`)
console.log(`${string} is a negative number`)


//  4.Check if a given number is positive or negative using unary + or -.

let number= 20;
if(+number >=0){
    console.log("positve number")
}
else{
    console.log(" negative number")
}


let numbers= -20;
if(-numbers >=0){
    console.log("positve number")
}
else{
    console.log(" negative number")
}



// Relational Operators	
// 	5.Compare two numbers and print which one is greater.
let ab=40; b=30;
if (a>b){
    console.log(`${ab} is greater than ${b}`)
}
else{
    console.log(`${ab} is less than ${b}`)
}


// 6.Check if a person is eligible to vote (age ≥ 18). 

let age=19;
if(age>=18){
    console.log("your are eligible to vote")
}
else{
    console.log("your are under voting capabiltiy")
} 

// 7.Check if two strings are equal using == and !=.
let str1="apple"
let str2="apples"
let result=str1 == str2
let result1=str1!=str2
console.log("apple==apples:",result, "apple!=apples",result1)




// Assignment Operators	
// 	8.Assign a value to a variable and use +=, -=, *=, /= to manipulate it.

let a=20;
let add= a+=10;
let sub= a-=5;
let mul= a*=2;
let div= a/=2;
console.log("Addition:",add, "subraction:",sub,  "multiplication",mul, "division",div)


// 9.Create a program that adds bonus marks to a student’s score using +=.
let student_mark=80;
let bonus_mark= student_mark +=10;
console.log("student bonus mark:", bonus_mark)



// Comparison Operators		
// 10 .Check if a number is even or odd using % and ==. 
let  check=27;
if (check%2==0){
    console.log("even number")
}
else{
    console.log("negative number")
}


// 11.Write a program to compare the age of two people and print who is older.
let person1_age=20;
let person2_age=85;
let checks=person1_age > person2_age
if(checks)
{
    console.log("oldest person")
}
else{
    console.log("youngest person")
}




// Arithmetic Operators 	
// 12.Calculate the area of a rectangle using *. 
let length=20;
let breath=50;
let area= length* breath
console.log("Area of rectangle is :" ,area)


// 13.Build a calculator that performs +, -, *, /, % on two inputs. 
let a1=10;  b=5;
let add1=a+b; sub=a1-b;  mul=a1*b ; div= a1/b; mod=a1%b;
console.log("addition:", add1, "subtraction", sub, "multiplication", mul, "division",div, "modulus",mod)



// 14.Find the average of 5 numbers.
let a2=20 ; b=12; c=30; d=40; e=50;
let sum_of= a2+b+c+d+e;
let average=sum_of/5;
console.log("Average of 5 number is:",average)





// Bitwise Operators		
// 15 .Show bitwise AND (&), OR (|), XOR (^), NOT (~) on two numbers. 
let n1=20; n2=30;
let and= n1 & n2 ;
let or= n1 | n2;
let carat= n1^n2
let not = ~n2;
console.log("Bitwise and :" ,and ,"Bitwise  OR :", or,"Bitwise XOR :", carat, "Bitwise Not :",not)


// 16 .Use bitwise shift (<<, >>) to multiply and divide by 2.
let num1=5;
let left=num1<<2;
let right=num1>>2;
console.log(left,right)


// Logical Operators	
// 17 .Check if a number is in the range 10 to 50 using and.
let range_num=40;
let checkin= range_num >=10 && range_num <=50
console.log(checkin)


//  18.Verify login with correct username and password using and/or. 
let user_name=prompt("Enter the username");
let password =prompt("enter your password");
if(user_name=="jan" && password == "123" ){
    console.log("login successful")
}
else{
    console.log("invalid password or username")
}



// 19.Check eligibility: age > 18 and has license.
let ages=20;
if(ages>=18){
    console.log("eligible to have license")
}
else{
    console.log("not eligible")
}

// BigInt Operators		
// 20 .Add, subtract, and multiply large integers using BigInt. 
let aa=1334672164973612689n;
let b=2138785723476741847n;;
let adda= aa+b;
let suba =aa-b;
let mula=aa*b;
let diva= aa/b;
console.log("Addition",adda,"Subtraction",suba,"multiplication",mula,"division",diva)


// 30.Compare two BigInt numbers.  
let aa1=49815849023n;
let b1=49815839023n;
let compare= aa1 == b1;
console.log(compare)


// String Operators		
// 31.Concatenate two strings using +.
let first_name="janani"
let last_name="priya"
console.log("Concatenation",first_name + " " +  last_name)


// 32.Compare two strings using ==.
let first="janani"
let last="priya"
console.log("Compare", first == last)


// 33.Use += to build a message"
let msg="good morning"
let adda1= msg+=" budddy!"
console.log(adda1)