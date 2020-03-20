let result = "";
const NAME = prompt("Name");
const YEAR = prompt("Year of birth");
const CURRENT_YEAR = 2020;
let age = CURRENT_YEAR - YEAR;
alert("Your name is: " + NAME + "\nYour year of birth is: " + YEAR + "\nYour Age is: " + age);

let a = Number(prompt("Enter first variable"));
let b = Number(prompt("Enter second variable"));
let c = Number(prompt("Enter third variable"));
let sum = 0;
sum += a;
sum += b;
sum += c;
 let average = sum / 3;
console.log(typeof a, typeof b, typeof c, typeof sum);
console.log("sum is: ", sum, "\nArithmetic average: " + average);