// Primitive Data Types ------------------------------
// Numbers
// String
// Boolean
// Symbol
// null
// undefined
// BigInt

//Non-Primitive Data Types (Reference Data Types) ------------------------
//  Array
//  Objects
//  Functions
//  Collections
//  Dates

let bigNum = 123422222222222222222222222222222222222n
console.log(bigNum);

let myData={
    name:"Prateek",
    age:25
}
let updatedData=myData;

myData.name="Kumar";

console.log(myData.age);
console.log(myData.name);
console.log(updatedData);

// Stack Memory -- Primitive Data Type

//Heap Memory-- Non-Primitive (Reference Data Type)

let userName = "TechWithPrince";
let userName2=userName;

userName="Technical Prince";
console.log(userName);
console.log(userName2);

let myObj={
    firstName = 
}