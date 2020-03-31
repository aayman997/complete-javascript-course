///////////////////////////////////////
// Lecture: Hoisting
//
//  Functions
// calculateAge(1965);
//
// function calculateAge(year) {
//     console.log(2016 - year);
// }
//
//  retirement(1956);
//
// let retirement = function (year) {
//     console.log(65 - (2016 - year));
// };
//
//  Variables
// console.log(age);
// var age = 23;
//
// function foo() {
//     let age = 65;
//     console.log(age);
// }
//
// foo();
// console.log(age);
///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*
 var a = 'Hello!';
 first();

 function first() {
 var b = 'Hi!';
 second();

 function second() {
 var c = 'Hey!';
 console.log(a + b + c);
 }
 }*/


// Example to show the difference between execution stack and scope chain
/*
 var a = 'Hello!';
 first();

 function first() {
 var b = 'Hi!';
 second();

 function second() {
 var c = 'Hey!';
 third();
 }
 }

 function third() {
 var d = 'John';
 console.log(a + b + c + d);
 }*/


///////////////////////////////////////
// Lecture: The this keyword
// calcAge(1985);

// function calcAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }
/*

 var john = {
 name: 'John',
 yearOfBirth: 1990,
 calcAge: function () {
 console.log(this);
 console.log(2016 - this.yearOfBirth);
 //
 // function inner() {
 //     console.log(this);
 //
 // }
 //
 // inner();
 }
 };
 john.calcAge();

 let mike = {
 name: 'Mike',
 yearOfBirth: 1984
 };

 mike.calcAge = john.calcAge;
 mike.calcAge();
 */

/*
 Execution Context And The Execution Stack

 let name = 'John';

 function first() {
 let a = 'Hello';
 second();
 let x = a + name;
 }

 function second() {
 let b = 'Hi!';
 third();
 let z = b + name;
 }

 function third() {
 let c = 'Hey!';
 let z = c + name;
 }

 first();

 class Person {
 constructor(firstName, lastName, yearOfBirth, gender, ageCalc) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.yearOfBirth = yearOfBirth;
 this.gender = gender;
 }

 ageCalc() {
 let currentYear = new Date().getFullYear();
 return currentYear - this.yearOfBirth;
 }
 }

 console.log(Person.name);
 */

