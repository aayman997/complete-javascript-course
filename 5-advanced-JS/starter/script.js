//  Function Constructor

// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// const Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// let john = new Person('John', 1990, 'Teacher');
// let jane = new Person('Jane', 1969, 'Designer');
// let mark = new Person('Mark', 1948, 'Retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Object.Create
// let PersonProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// let john = Object.create(PersonProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';

// let jane = Object.create(PersonProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1969},
//     job: {value: 'Designer'}
// });


//  Primitives
// let a = 23;
// let b = a;
// a = 46;

// console.log(a);
// console.log(b);

//  Objects
// let obj1 = {
//     name: 'John',
//     age: 26
// };
// let obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

//  Primitives Vs Objects
// let age = 27;
// let obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

//  Passing Functions as Arguments

// let years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if ( el >= 18 && el <= 81 ) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// let ages = arrayCalc(years, calculateAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

//  Functions Returning Functions







































