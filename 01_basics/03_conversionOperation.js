let score=undefined;
console.log(typeof(score));
let valueInNumber=Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33"-> 33
// "33abc"-> NaN
//true-> 1, false-> 0
let loggedIn=1;
let booleanIsLoggedIn=Boolean(loggedIn);
console.log(booleanIsLoggedIn);

//1->true, 2->false, 
// ""-> false, "Prateek-> true"

let someNumber=29;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

let posValue=2;
let negValue=-posValue;
console.log(negValue);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2); //JavaScript processes them from left to right. So, "1"+2 results in "12", and then "12"+2 results in "122", not 14.
console.log(1+2+"2");

console.log(Boolean("Prateek"));