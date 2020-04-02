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

// function interViewQuestion(job) {
//     if ( job === 'designer' ) {
//         return function (name) {
//             console.log(`${name}, Can You Please Explain What UX Design Do?`);
//         };
//     }
//     if ( job === 'teacher' ) {
//         return function (name) {
//             console.log(`What Subject Do You Teach, ${name}?`);
//         };
//     } else {
//         return function (name) {
//             console.log(`Hello ${name} What Do You Do?`);
//         };
//     }
// }

// let designerQuestion = interViewQuestion('designer');
// let teacherQuestion = interViewQuestion('teacher');
// let elseQuestion = interViewQuestion('driver');
// designerQuestion('Jane');
// teacherQuestion('John');
// interViewQuestion('diver')('mark');

//  IIFE

// function game() {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();
// (function () {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// })();
// console.log(score);

// (function (goodLuck) {
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })([5]);


//  Closures

// function retirement(retirementAge) {
//     let a = ` Years Left Until Retirement.`;
//     return function (yearOfBirth) {
//         let age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     };
// }

// let retirementUS = retirement(66);
// let retirementGermany = retirement(65);
// let retirementIceland = retirement(67);
// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//     return function (name) {
//         if ( job === 'designer' ) {
//             console.log(`${name}, Can You Please Explain What UX Design Do?`);

// } else if ( job === 'teacher' ) {
//     console.log(`What Subject Do You Teach, ${name}?`);
//
// } else {
//     console.log(`Hello ${name} What Do You Do?`);
// }
// };
// }


// interviewQuestion('teacher')('john');


//  Bind, Call And Apply
// let john = {
//     name: 'John',
//     job: 'Teacher',
//     age: 26,
//     presentation: function (style, timeOfDay) {
//         if ( style === 'formal' ) {
//             console.log(`Good ${timeOfDay} Ladies And Gentlemen! I'm ${this.name}, I'm A ${this.job} And I'm ${this.age} Years Old.`);
//         } else if ( style === 'friendly' ) {
//             console.log(`Hey! What's Up? I'm ${this.name}, I'm A ${this.job} And I'm ${this.age} Years Old.`);
//         }
//     }
// };

// let emily = {
//     name: 'Emily',
//     job: 'Designer',
//     age: 35,
// };
// john.presentation('formal', 'Morning');
// john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// let johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('Morning');
// johnFriendly('Good Night');

// let emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('Afternoon');


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

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// let ages = arrayCalc(years, calculateAge);
// let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

/*******************  Coding Challenge #7  *******************/
// (function () {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

// Question.prototype.displayQuestions = function () {
//     console.log(this.question);
//     for (let i = 0; i < this.answers.length; i++) {
//         console.log(`${i}: ${this.answers[i]}`);
//     }
// };
// Question.prototype.checkAnswer = function (ans, callback) {
//     let sc;
//     if ( ans === this.correct ) {
//         console.log(`Correct Answer!`);
//         sc = callback(true);
//     } else {
//         console.log(`Wrong Answer. Try Again`);
//         sc = callback(false);
//     }
//     this.displayScore(sc);
// };

// Question.prototype.displayScore = function (score) {
//     console.log(`Your Current Score Is: ${score}`);
//     console.log(`--------------------`);
// };
// let q1 = new Question(`Is JavaScript The Coolest Programming language In The World?`, [`Yes`, `No`], 0);
// let q2 = new Question(`What's The Nam Of This Course's Teacher`, [`John`, `Michale`, `Jonas`], 2);
// let q3 = new Question(`What Does Describe Coding`, [`Boring`, `Hard`, `Fun`, `Tedious`], 2);

// let questions = [q1, q2, q3];

// function score() {
//     let sc = 0;
//     return function (correct) {
//         if ( correct ) {
//             sc++;
//         }
//         return sc;
//     };
// }

// let keepScore = score();

// function nextQuestion() {

// let n = Math.floor(Math.random() * questions.length);

// questions[n].displayQuestions();

// let answer = prompt(`Please Select The Correct Answer`);

// if ( answer !== 'exit' ) {
//     questions[n].checkAnswer(parseInt(answer), keepScore);
//     nextQuestion();
// }
// }

// nextQuestion();
// })();













































