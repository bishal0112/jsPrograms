// #3399ff#3399ff 1. JavaScript Program to Print Hello World

// alert("Hello World");
// console.log("Hello World");
// document.write("Hello World");

// #3399ff#3399ff 2. JavaScript Program to Add Two Number

// const num1 = Number(prompt("Enter First Number"));
// const num2 = Number(prompt("Enter second Number"));
// let sum = num1 + num2;

// alert(sum);

// #3399ff#3399ff 3.JavaScript Program to Find the Square Root

// const num = Number(prompt("Enter the number to find the square root.."));
// let num_sqrt = num ** 0.5;

// alert(num_sqrt);

// #3399ff#3399ff 4.JavaScript Program to Calculate the Area of a Triangle

// alert("Program to print the area of a triangle..")
// const height = Number(prompt("Enter the Height"));
// const base = Number(prompt("Enter the Base"));
// let area = 0.5 * height * base;
// alert(area);

// #3399ff#3399ff 5.JavaScript Program to Swap Two Variables

// alert("Program to Swap two variables..");
// let var1 = prompt("Enter first variable...");
// let var2 = prompt("Enter Second variable..");
// let temp;
// temp = var1;
// var1 = var2;
// var2 = temp;

// ====== OR =======
// [a, b] = [b, a];
// Using Destructuring assignment(ES6 or ES2015)

// ====== OR =======
// Using Bitwise XOR operator
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// alert(`Variables after swapping ${var1} and ${var2}`);

// #3399ff#3399ff 6.JavaScript Program to Solve Quadratic Equation

// let a, b, c, root1, root2;
// function getVal() {
//     alert("Enter Values of a, b and c");
//     a = Number(prompt("Enter value of a"));
//     b = Number(prompt("Enter Value of b"));
//     c = Number(prompt("Enter Value of c"));
//     calc();
// }

// function calc() {
//     let discriminant = b * b - 4 * a * c;
//     if(discriminant > 0){
//         root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//         console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
//     }else if(discriminant === 0){
//         root1 = root2 = -b / (2 * a);

//         console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
//     }else {
//         let realPart = (-b / (2 * a)).toFixed(2);
//         let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//         console.log(`The roots of quadraic equation are ${realPart} + ${imagPart} - ${imagPart}i`);
//     }
// }

// getVal();

// #3399ff#3399ff 7.JavaScript Program to convert Kilometers to Miles

// let kilometer = Number(prompt("Enter the number to convert to Miles"));
// let miles = kilometer * 0.621371;
// alert(miles);

// JavaScript program to Convert Celsus to Fahrenheit

// let celsius = Number(prompt("Enter Celsius temperature to convert to Fahrenheit.."));

// let fahrenheit = (celsius * 9/5) + 32;

// alert(fahrenheit);

// #3399ff#3399ff 8.JavaScript Program to Generate a Random Number

// random()  * (HighestNumber - LowestNumber) + LowestNumber;
// let randomNumber = (Math.random() * 10).toFixed();
// console.log(randomNumber);

// #3399ff#3399ff 9.JavaScript program to check if a number is Positive, Negative, or Zero

// let number = Number(prompt("Enter the number to check if it is Positive, Negative or Zero"));
// if(number > 0){
//     console.log(`The number ${number} is Positive.`);
// }else if(number === 0) {
//     console.log(`The number ${number} is Equal to Zero.`);
// }else {
//     console.log(`The number ${number} is Negative.`);
// }

// #3399ff#3399ff 10.JavaScript Program to Check if a Number is Odd or Even

// let num = Number(prompt("Enter the number to Check for ODD or EVEN"));
// let check = num % 2 === 0;
// console.log(typeof check);
// if(check){
//     console.log("Even Number");
// }else{
//     console.log("ODD Number");
// }

// #3399ff#3399ff 11.JavaScript Program to find largest of three numbers.

// let num1, num2, num3;
// function getVal() {
//     num1 = Number(prompt("Enter first Number"));
//     num2 = Number(prompt("Enter Second Number"));
//     num3 = Number(prompt("Enter Third Number"));
//     console.log(`The numbers are ${num1}, ${num2} and ${num3}`);
//     greater();
// }
// function greater(){
//     if(num1 >= num2 && num1 >= num3) {
//         console.log(`Number ${num1} is greater`);
//     }else if(num2 >= num1 && num2 >= num3) {
//         console.log(`Number ${num2} is greater`);
//     }else {
//         console.log(`Number ${num3} is greater`);
//     }
// }
// getVal();

// #3399ff#3399ff 12. JavaScript Program to Check Prime Number

// const number = Number(prompt("Enter the Number to check for Prime or NOT"));
// function isPrime(){
//     if(number <= 1){
//         return false
//     }
//     for(let i = 2; i < number; i++){
//         if(number % i === 0){
//             return false;
//         }else {
//             return true;
//         }
//    }
// }

// isPrime(number) ? console.log("Prime Number") : console.log("Not a Prime Number");

// #3399ff#3399ff 13.JavaScript Program to Print All the Prime Numbers in an Interval

// let lim = Number(prompt("Enter the Limit"));
// while(lim !== 0){
//     for(let j = 2; j < lim; j++){
//         if (lim % j === 0){
//             console.log(" ");
//         }else{
//             console.log(lim);
//         }
//     }
//      lim--;
// }

// const lim = Number(prompt("Enter the Limit"));

// for(let i = 1; i <= lim; i++){
//     let flag = 0;

//     for(let j = 2; j < i; j++){
//         if(i % j === 0){
//             flag = 1;
//             break;
//         }
//     }
//     if( i> 1 && flag == 0){
//         console.log(i);
//     }
// }

// #3399ff#3399ff 14.JavaScript Program to Find the Factorial of a Number

// function factorial() {
//     let num = Number(prompt("Enter a Number"));
//     let fact = 1;
//     if(num > 0){
//         for(let i = 1; i <= num; i++){
//             fact *= i;
//         }
//         console.log(fact);
//     }else{
//       let numNew = Math.abs(num);
//       for(let i = 1; i <= numNew; i++){
//             fact *= i;
//         }
//         console.log(`-${fact}`);
//     }
// }
// factorial();

// #3399ff#3399ff 15.JavaScript program to Display the Multiplication Table

// const table = Number(prompt("Enter the Table Number."));
// const number = Number(prompt("Enter the Max number of table."));
// for(let i = 1; i <= number; i++){
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// #3399ff#3399ff 16.JavaScript program to find Fibonacci sequence

// const limit = Number(prompt("Enter the max number."));
// let num1 = 0, num2 = 1;
// console.log(num1);
// for(let i = 0; i < limit; i++){
//     num1 = num1 + num2;
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
//     console.log(num1);
// }

// const number = parseInt(prompt("Enter the number of terms."));
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');

// for(let i =1; i<=number; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// #3399ff#3399ff 17.JavaScript Program to Find Armstrong Number in an interval

// let number = Number(prompt("Enter a Number."));
// let num = number;
// let sum = 0;
// while(num !== 0){
//     let a = num % 10;
//     num = Math.floor(num / 10);
//     sum = sum + a * a * a;
// }
// if(sum === number){
//     console.log(`${number} is a Armstrong number.`);
// }else{
//     console.log(`${number} is not a Armstrong number.`);
// }
// console.log(sum);

// #3399ff#3399ff 18.JavaScript programa to make a simple calculator
// let total;

// const symbol = prompt("Enter the symbol +, -,* , /");

// const num1 = parseInt(prompt("Enter the first Number: "));
// const num2 = parseInt(prompt("Enter second number"));

// switch(symbol){
//     case '+':
//         total = num1 + num2;
//         console.log(`${num1} + ${num2} is ${total}`);
//         break;
//     case '-':
//         total = num1 - num2;
//         console.log(`${num1} - ${num2} is ${total}`);
//         break;
//     case '*':
//         total = num1 * num2;
//         console.log(`${num1} * ${num2} is ${total}`);
//         break;
//     case '/':
//         total = num1 / num2;
//         console.log(`${num1} / ${num2} is ${total}`);
//         break;
//     default:
//         console.log(`Check Your Input:`);
// }

// #3399ff#3399ff 19.JavaScript program to find sum of Natural number
// const num = Number(prompt("Enter the limit:"));
// sum = 0;
// if(num < 0){
//     console.log("Please Enter a positive number:");
// }else{
//     for(let i = 0 ; i <= num; i++){
//         sum += i;
//     }
//     console.log(sum);
// }

// #3399ff#3399ff 20.JavaScript program to Find sum of Natural Numbers Using Recursion

// let sum = 0;
// let num = Number(prompt("Enter a number to find its sum"));
// while(num !== 0 ){
//     addNum(num)
//     num--;
// }
// function addNum(num){
//     sum += num;
// }
// console.log(sum);

// #3399ff#3399ff 21.Program to find the sum of natural numbers using recursion

// function sum(num) {
//     if(num > 0){
//         return num + sum(num -1);
//     }else {
//         return num;
//     }
// }
// const number = parseInt(prompt("Enter a positive interger"));
// const result = sum(number);
// console.log(`The sum is ${result}`);

// #3399ff#3399ff 22. JavaScript program to Guess a Random Number

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     let randomNumber = Math.ceil(Math.random() * 6);
//     console.clear();
//     console.log(randomNumber);
// })

// #3399ff#3399ff 23.javaScript program to shuffle Deck of cards

// const deckOfCards = [
// 	"jack",
// 	"king",
// 	"queen",
// 	"ace",
// 	"2",
// 	"3",
// 	"4",
// 	"5",
// 	"6",
// 	"7",
// 	"8",
// 	"9",
// ];
// let deck = [];

// // Create a deck of cards
// for (let i = 0; i < deckOfCards.length; i++) {
// 	let card = { Value: deckOfCards[i] };
// 	deck.push(card);
// }
// // Shuffle the cards
// for (let i = deck.length - 1; i > 0; i--) {
// 	let j = Math.floor(Math.random() * i);
// 	let temp = deck[i];
// 	deck[i] = deck[j];
// 	deck[j] = temp;
// }

// console.log("The first five cards are:");
// for (let i = 0; i < 5; i++) {
// 	console.log(`${deck[i].Value}`);
// }

// ========== OR ============

// Create a deck of cards
// for (let i = 0; i < deckOfCards.length; i++) {
// 	deck.push(deckOfCards[i]);
// }
// console.log(deck);

// // shuffle the cards
// for (let i = deck.length - 1; i > 0; i--) {
// 	let j = Math.floor(Math.random() * i);
// 	let temp = deck[i];
// 	deck[i] = deck[j];
// 	deck[j] = temp;
// }
// console.log(deck);

// // display first five cards
// console.log("The first five cards are: ");
// for (let i = 0; i < 5; i++) {
// 	console.log(deck[i]);
// }

// #3399ff#3399ff 24.JavaScript program to check if the Numbers Have same last Digit

// const num1 = Number(prompt("Enter first Number: "));
// const num2 = Number(prompt("Enter Second Number: "));
// function returnLastDigit(num) {
// 	// num %= 10;
// 	// return num;
// 	// for decimal and other numbers
// 	var stringValue = num.toString();
// 	var lastDigit = stringValue.charAt(stringValue.length - 1);
// 	return lastDigit;
// }
// function compareNumbersLastDigit(num1, num2) {
// 	if (Number(returnLastDigit(num1)) === Number(returnLastDigit(num2))) {
// 		console.log(`${num1} and ${num2} have same LAST Digits`);
// 	} else {
// 		console.log(`${num1} and ${num2} do NOT have same LAST Digits`);
// 	}
// }
// compareNumbersLastDigit(num1, num2);

// #3399ff#3399ff 25.
