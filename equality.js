//Value Comparison Operators
// 	 ==
// 	Create a program that compares different pairs of values using == (loose equality) and === (strict equality).
//  Observe and log the results. Add comments to explain why each comparison returns true or false.	
let number=20
let str="20"
console.log("loosly strict",number==str)
console.log("tightly strict", number===str)


//Write a program that accepts two values of different types (e.g., string and number) 
// and checks if they are loosely equal using ==.Example: "10" and 10 → Should return true

let digit=10
let val="10"
console.log("loosely strict",digit==val)



// ===		
// Write a program that compares a string "20" and a number 20 using ===. Output whether they are strictly equal or not.
let digits=20
let valu="20"
console.log("tightly strict",digits===valu)


//Object is		
// Create a function compareValues(a, b) that compares two inputs using Object.is() and returns a custom message.
let obj=20
let obj1=20
console.log(Object.is(obj,obj1))//true

let obj2=20
let obj3=25
console.log(Object.is(obj2,obj3))//false



//Equality algorithms
//  	isLooselyEqual	
// "Compare Two Lists (Python Specific)    Use Python's list comparison to check if two lists are equal.
// Also, show the result using a custom loop method (element-by-element).
let a=[1,2,3,4,5]
let b=[6,7,8,9,6]
let c=[1,2,3,4,5]
console.log(JSON.stringify(a)==JSON.stringify(c))
console.log(JSON.stringify(a)==JSON.stringify(b))




//Create a custom function isLooselyEqual(a, b) that mimics JavaScript’s == behavior. 
//  Test it with inputs: "1" and 1, false and 0, null and undefined.
let string="1"
let num=1;
let nullval=null;
let ud=undefined;
let bool=true;
console.log("string==num ?",string==num)
console.log("nullval==ud?",nullval==ud)
console.log("bool==num?",bool==num)



//isStrictlyEqual	
// 	"Write a custom function isStrictlyEqual(a, b) that performs strict comparison (===) and logs the result.Use the function to test:

//""5"" and 5 true and 1

// ""hello"" and ""hello""

let a1=0
let b1="5"
let boo=false;
let val1="hello"
let val2="hello"
let n=null
let ud1=undefined
console.log("a===b/",a1===b1)
console.log('boo===val1?',boo===a1)
console.log("val1===val2 ? ", val1===val2)
console.log(n===ud1)


//SameValueZero		
// Create a program that adds NaN multiple times to a Set and prints the contents.

let sets=new Set()
sets.add(NaN)
sets.add(NaN)
sets.add(NaN)
console.log(sets)
console.log(sets.size)


//"Write a function sameValueZeroCompare(a, b) that returns true if the values are equal by 
// SameValueZero logic: NaN should equal NaN 0 should equal -0 (Hint: Use Object.is() but handle 0 and -0 specifically.)"

let a11=20
let b11=20
let c11=NaN
let d11=NaN


function obj(){
    if(Object.is(a11,d11)){
        return "value is : true"
    }

    else{
        return "invalid: false"
    }
}

obj()
console.log(obj())