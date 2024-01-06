// #1 String Interpolation
let fname = 'Ram'
let lname = 'Sharma '
// Now we have to print, my firstname is Ram & my lastname is Sharma
console.log('My firstname is' + fname + 'and my lastname is ' + lname ) // spaces is given to maintain the spaces
// the output of this code is same as our desired output, but this is not professional to write print it. 

// #2 
let fname1 = 'Ram'
let lname1 = 'Sharma'
console.log('My firstname is ${fname1} and my lastname is ${lname1}')
// this is called string interpolation, and this is the professional way 
// '' these are called the blackticks
// the content inside these blackticks is a string

// #3 String as an object
//  therefore we can declare a string as a string type(Premitive) & we can also declare a string as an Object Type (Non-Premitive)

let myFirstName = 'Ram'
let myLastName = new String('Sharma') //Here String is a Constructor having the value 'Sharma'
console.log(myFirstName, myLastName, typeof myFirstName, typeof myLastName)
// type of myFirstName is a string(Premitive DataType)
// type of myLastName is an object of type String

// #4 Memories in JavaScript 
// There are two types of memories in JavaScript 
// Stack (it is used in Premitive DataTypes). Stack is alos called as static memory. Means size is fixed and size is known at compile time
// Heap (it is used in Non-Premitive DataTypes) heap is also called as dynamic memory. Means size is not fixed and size is known at run time.

//#5  example of Stack
let fname = "Ram"
let age = 30
let birthday = "17 December"
// if i update the value of any of these premitive variables then a copy is created in the stack. And we are just changing the copy(not the actual value)

// #6
let student ={
name: "Ram",
id: 346884
}

function mySelf(){
    let name = "Ram"
}
mySelf();

// In Heap if i update a value of any variable, then the original value is updated in the heap, means reference is given 




