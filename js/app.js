console.log("Hii Again ");
console.log("This is my first External JavaScript");

//==================================================================
//Variables 
//==================================================================

console.log("\n\n");

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

//==================================================================
//Arithmatic Operators
//==================================================================

console.log("\n\n");

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

//==================================================================
//Comparison Operators

//== (value ), === (type & value ), !=, !== (type and value ), >, <, >=, <=

//==================================================================

console.log("\n\n");

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
//========================================================

console.log("\n\n");

let isRaining = true;
let isSunny = false;

console.log(isRaining && isSunny); // false
console.log(isRaining || isSunny); // true
console.log(!isRaining); // false

//========================================================
//if else statements
//========================================================

console.log("\n\n");

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

// Grade Assignment
console.log("\n\n");

let marks = 65;

if (marks >= 75) {
    console.log("Grade: A");
}else if(marks >=60){
    console.log("Grade: B");
}else if(marks >=50){
    console.log("Grade: C");
}else if(marks >=30){
    console.log("Grade: S");
}else{
    console.log("Not Grade , Fail");
}

console.log("\n\n");

let age = 13;

if(age > 18){
    console.log("You can access this website");
}else{
    console.log("You cannot access this website");   
}

console.log("\n\n");

let units= 20;
let bill=0;

if(units <= 50){
    bill = units * 10;
}else if(units <= 100){
    bill = units * 15;
}else{
    bill = units * 20;
}

console.log("Your bill is: " + bill);

//==================================================================
//switch case statements
//==================================================================

console.log("\n\n");

let day = 8

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thurrsday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Innvalid Day");
        break
}