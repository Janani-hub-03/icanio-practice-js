/* 1.Create a program with an object product containing name, price, inStock (Boolean), and discount.
 Use arithmetic, logical, and ternary operators to calculate the final price and display a message based on availability. */

 let product={
    productname:"shampoo",
    price:70,
    instack: true,
    dis_per:20
}
let discount= product.dis_per / 100; //0.2
console.log("PRODUCT AVAILBALE IN OUR STORE")
console.log("product name:", product.productname)
console.log  ("Product price actual price", product.price)
console.log   ( "product discount is", product.dis_per,"%")

let a=product.price * discount
let final= product.price - a
console.log( " product price after discount",final)

let user=prompt("enter any product")
if(user==product.productname){
    console.log(" shampoo is available")
}
else{
    console.log("sorry! product is not here :) ")
}


/*Create a program that defines a user object with properties like name, age, and isLoggedIn (Boolean). 
Check if the user is logged in and print a welcome message if true, otherwise print "Please log in". */

const person={
    name:"Janani Priya",
    age: 20,
    Logged_in: true,
};

if(person.Logged_in){
    console.log("welcome")
}
else{
    console.log("please log in")
}




const person1={
    name:"Janani Priya",
    age: 20,

};

let users=prompt("enter your name")
if(users==person1.name){
    console.log("Welcome to the page")
    console.log(`your name: ${person1.name} your age: ${person1.age}`)
}
else{
    console.log("please log in first")
}