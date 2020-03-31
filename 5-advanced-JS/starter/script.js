//  Function Constructor

// let john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
//
// const Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
//
// Person.prototype.calcAge = function () {
//     console.log(2016 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
// let john = new Person('John', 1990, 'Teacher');
// let jane = new Person('Jane', 1969, 'Designer');
// let mark = new Person('Mark', 1948, 'Retired');
//
// john.calcAge();
// jane.calcAge();
// mark.calcAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

//  Object.Create
// let PersonProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearOfBirth);
//     }
// };
//
// let john = Object.create(PersonProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';
//
// let jane = Object.create(PersonProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1969},
//     job: {value: 'Designer'}
// });

//  Primitives Vs Objects

//  Primitives
let a = 23;
let b = a;
a = 46;

console.log(a);
console.log(b);

//  Objects
let obj1 = {
    name: 'John',
    age: 26
};
let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);




















































