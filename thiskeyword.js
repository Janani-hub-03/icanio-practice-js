// Using (this) keyword	
// in a method		
// 1.Create an object with a method that uses this to access one of its properties. Call the method and log the result.
//ex106
let details={
    person_Name:"janani",
    person_age: 20,
    person_education: "B.E CSE",
    skills:["HTML", "CSS", "js"],

    about(){
        console.log(this)
    },

    showdetails(){
        this.skills.forEach(function(show) {
            console.log(this.person_Name, show)
        }, this ); 
    }
};
details.showdetails()


// 	in a function	
// 2.	Write a standalone function that logs this. Call it in the global context and observe what this refers to.	
function valueofthis(){
    console.log("value of this ",this)
}
valueofthis()


// 	using it alone	
// 3.	Log this in the global scope. What value do you get in strict mode vs non-strict mode?
//'use strict';
    console.log("Strict mode")
    console.log(this)	


// 	in event handlers		
// 4.Create a button in HTML. Add an event listener using a normal function and log this inside the handler. What does this refer to?	
const button= document.getElementById("button")
button.addEventListener("click",function(){
    alert(this)   //normal function( specifies the html button element)
})





// 	in arrow functions	
// 5.	Repeat the previous exercise but use an arrow function for the event handler. How does this behave differently?	

const buttons= document.getElementById("button")
buttons.addEventListener("click",()=>{
    alert(this) //arrow=(window or undefined)
})
    


// 	function borrowing 		
// 6.Create two objects with similar properties. Assign a method from one object to the other and invoke it. Observe how this changes.	
let object1={
    per_name:"Janani",
    per_age:25,
    greet: function(){
        console.log("hello my name is",this.per_name)
    }
}
let object2={
    per_name:"priya",
    per_age:20,
}


object2.greet = object1.greet
object1.greet()
object2.greet()



// 	Explicit Binding	
// call
// 	7.Use call(), apply(), or bind() to explicitly set the value of this in a function call. Show examples with each.	
function javascript(){
    console.log(this)
}
javascript.call({variable:["var","let","const"]})
javascript.apply({operator:"arthimetic"})
let newl=javascript.bind({function:"function expression"})
newl();


//8. Create two objects with a name property. Define a function that logs this.name. 
// Use call to invoke the function on both objects and observe the output.

let obj1={
    name:"jan",
}
let obj2={
    name:"priya",
}
function names(){
    console.log(this.name)
}

names.call(obj1)
names.call(obj2)

// 		apply	
// 9.	Create a function that takes two parameters and uses this.name. 
// Use apply to call the function with an object and pass arguments as an array.

function person( name,age){
    console.log(this.name);
    console.log("age:",age)
    

}
const obj={name:"janani"}
person.apply(obj,["janani",24])


// 		bind	
// 10.	Create a function that logs this.name. Use bind to permanently tie it to an object. 
// Call the bound function and verify it always uses the bound context.
function log(){
    console.log(this)
}
const logname={
    name:"janani"
}
const bound=log.bind(logname)
bound()

const anothername={
    name:"priya",
    age:20,
}
console.log(anothername)