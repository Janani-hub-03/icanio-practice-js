//Keyed Collections
// 	Map
// 	Create a program that stores student IDs and names using a Map. Add at least 3 students, 
// retrieve a name using an ID, update one name, and print all entries.

let student=new Map()
student.set(1,"Janani")
student.set(2,"Priya")
student.set(3,"Selvi")
student.set(4, "Kalai")
console.log("Students",student)
console.log("student strength at 2025 june:",student.size)
console.log("ID 2:",student.get(2))
console.log("UPDATEING extra students",student.set(3,"hello"))
console.log("Student strength at 2025 july:", student.size)
console.log("total students", student)


//Create a program that uses WeakMap to associate private data with objects. 
// Show how garbage collection works by removing the object reference.
//WEAKMAP

let ob1={}//private declare
let ob2={}//private declare
let data=new WeakMap()//public (i.e map)
data.set(ob1,"janani")// private(secure i.e weakmap)
data.set(ob2,"priya")// private(secure i.e weakmap)
console.log(data)
console.log(data.get(ob1))
console.log(data.get(ob2))


//Create a program that takes an array with duplicate values and uses a Set to remove the duplicates. Print the unique values.
//SET
let haircare=[
    "untie",
    "oiling",
    "massage",
    "comb downwards",
    "apply serum",
    "massage",
    "tie hair",
    "face wash"
]

let myset= new Set(haircare)
console.log("Before set",haircare)
console.log("After Set : ",myset)


//Create a program that uses WeakSet to track active user objects.
//  Add some users, then remove object references and explain how garbage collection applies.
//WEAKMAP

let active= new WeakSet()
var obb1={"name": " Janani"}
var obb2={" age":20}
active.add(obb1)
active.add(obb2)
console.log("IS user name is logged ?: ",active.has(obb1))
console.log("is the user details are given?", active.has(obb2))

obb1=null;
console.log("what is user name",obb1)
console.log("user details",obb2)
console.log("after grabbage")
console.log("Is the user have logged now?", active.has(obb1))



//Structured Data	
// JSON		
// Create a program that converts a JavaScript object to a JSON string using JSON.stringify() 
// and then converts it back to an object using JSON.parse(). Log both versions.

let person={name:"janani Priya", age: 20}
console.log(typeof("name type",person))
let str=JSON.stringify(person)
console.log(typeof("after stringify",str))
let obj=JSON.parse(str)
console.log(typeof("after parse",obj))


//Indexed Collection 	
// Typed Arroys		
// Create a program using a Uint8Array to store 5 integer values. Update one value, then print all elements.

let arr= new Uint8Array([1,2,3,4,5])
arr[2]=0
console.log(arr)

let arr1=new Uint8Array(5)
arr1=[1,2,3,4,5]
console.log(arr)
arr1[3]=6
console.log(arr1)


//Arroys		
// Create a program that defines an array of fruits. Perform array operations: push, pop, shift, unshift, slice, and forEach.
//  Print the array after each operation.

let fruits=["apple","banana","mango"]
console.log("fruits",fruits)

let newfruit=fruits.push("strawberry")
console.log("fruits added",newfruit)//push

let popped=fruits.pop()
console.log("popped value:",popped)//pop

let shifted=fruits.shift()
console.log("shifted value:",shifted)//shift

let unshiftedval=fruits.unshift("gauva")
console.log("unshifted ",unshiftedval)//unshift


let slicing=fruits.slice(-1)
console.log("slicing",slicing)

console.log("final value",fruits)


