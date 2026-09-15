console.log("Hii Again ");
console.log("This is my first External JavaScript");

//Variables 
let name = "Shasindu Pramod";
console.log(name);
console.log(typeof name);

let studentName = "Shasindu Pramod" ;
let studentPass = true;
let studentAge = [];
let student = {};

console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof studentPass);
console.log(typeof student);

//========================================================
//Arithmatic Operators
let x=10;
let y=8;
let z=x*y;
console.log(z);
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x%y);

let a="Shasindu";
console.log(a*x);
console.log(a+x);

//========================================================
//Comparison Operators

//== (value ), === (type & value ), !=, !== (type and value ), >, <, >=, <=

let num1=10;
let num2=20;    
let num3="10";

console.log(num1==num1);
console.log(num1===num3);
console.log(num1==num3);
console.log(num1!=num2);
console.log(num1!==num3);
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num3==num2);
console.log(num3===num2);
console.log(num3!=num2);

//========================================================
//Logical Operators
// && (AND), || (OR), ! (NOT)

let isRaining = true;
let isSunny = false;

console.log(isRaining && isSunny); // false
console.log(isRaining || isSunny); // true
console.log(!isRaining); // false

if (true && false) {
    console.log("Both conditions are true");
}else if (true || false) {
    console.log("At least one condition is true");
}else {
    console.log("Both conditions are false");   
}       

if (true && true) {
    console.log("Both conditions are true");
}else if (true || false) {
    console.log("At least one condition is true");
}else {
    console.log("Both conditions are false");   
}   



