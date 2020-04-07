//  Let And Const
/*

 //  ES5
 var name5 = 'Jane Smith';
 var age5 = 23;
 name5 = 'Jane Miller';
 console.log(name5);

 //  ES6
 const name6 = 'Jane Smith';
 let age6 = 23;
 // name6 = 'Jane Miller';
 console.log(name6);

 //  ES5
 function driverLicence5(passedTest) {
 if ( passedTest ) {
 // console.log(firstName);
 var firstName = 'John';
 var yearOfBirth = 1990;
 }
 console.log(firstName + ', Born In ' + yearOfBirth + ', Is Now Officially Allowed To Drive A Car');
 }

 driverLicence5(true);

 //  ES6
 function driverLicence6(passedTest) {
 // console.log(firstName);
 let firstName;
 const yearOfBirth = 1990;
 if ( passedTest ) {
 firstName = 'John';
 }
 console.log(firstName + ', Born In ' + yearOfBirth + ', Is Now Officially Allowed To Drive A Car');
 }

 driverLicence6(true);


 let i = 23;

 for (let i = 0; i < 5; i++) {
 console.log(i);
 }
 console.log(i);
 */

/*
 //  Blocks And IIFEs

 //  ES6
 {
 const a = 1;
 const b = 2;
 var c = 3;
 }
 // console.log(a + b);
 // console.log(c);

 //  ES5
 (function () {
 var c = 3;
 })();
 console.log(c);
 */
/*

 //  Strings
 let firstName = 'John';
 let lastName = 'Smith';
 const yearOfBirth = 1990;

 function calcAge(year) {
 return 2016 - year;
 }

 //  ES5
 console.log('This IS ' + firstName + ' ' + lastName + '. He Was Born In ' + yearOfBirth + '. Today, He Is ' + calcAge(yearOfBirth) + ' Years Old');
 //  ES6
 console.log(`This Is ${firstName} ${lastName}. He Was Born In ${yearOfBirth}. Today, He Is ${calcAge(yearOfBirth)} Years Old`);

 const n = `${firstName} ${lastName}`;
 console.log(n.includes(` `));
 console.log(`${firstName} `.repeat(5));
 */

/*//  Arrow Functions
 const years = [1990, 1965, 1982, 1937];

 //  ES5
 var ages5 = years.map(function (el) {
 return 2016 - el;
 });
 console.log(ages5);

 //  ES6
 let ages6 = years.map(el => 2016 - el);

 console.log(ages6);
 ages6 = years.map((el, index) => `Age Element ${index + 1} : ${2016 - el}.`);


 console.log(ages6);


 ages6 = years.map((el, index) => {
 const now = new Date().getFullYear();
 const ages = now - el;
 return `Age Element ${index + 1} : ${ages}.`;
 });
 console.log(ages6);*/
/*
 //  Arrow Functions#2 Lexical `This` Keyword

 //  ES5
 var box5 = {
 color: 'green',
 position: 1,
 clickMe: function () {
 var self = this;
 document.querySelector('.green').addEventListener('click', function () {
 var str = 'This Is Box Number ' + self.position + ' And It Is ' + self.color;
 alert(str);
 });
 }
 };
 // box5.clickMe();

 //  ES6
 const box6 = {
 color: 'green',
 position: 1,
 clickMe: function () {
 document.querySelector('.green').addEventListener('click', () => {
 const str = `This Is Box Number ${this.position} And It Is ${this.color}`;
 alert(str);
 });
 }
 };
 // box6.clickMe();
 const box66 = {
 color: 'green',
 position: 1,
 clickMe: () => {
 document.querySelector('.green').addEventListener('click', () => {
 const str = `This Is Box Number ${this.position} And It Is ${this.color}`;
 alert(str);
 });
 }
 };
 box66.clickMe();*/


/*
 function Person(name) {
 this.name = name;
 }

 /!*
 Person.prototype.myFriends5 = function (friends) {
 var arr = friends.map(function (el) {
 return this.name + ' Is Friends With ' + el;
 }.bind(this));
 console.log(arr);
 };

 var friends = ['Bob', 'Jane', 'mark'];
 new Person('John').myFriends5(friends);
 *!/

 //  ES6
 Person.prototype.myFriends6 = function (friends) {
 const arr = friends.map(el => `${this.name} Is Friends With ${el}`);
 console.log(arr);
 };
 const friends = ['bob', 'jane', 'mark'];
 new Person('John').myFriends6(friends);
 */

//  Destructuring

//  ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

/*
 //  ES6
 const [name, year] = ['John', 26];
 console.log(name);
 console.log(year);

 const obj = {
 firstName: 'John',
 lastName: 'Smith'
 };
 const {firstName, lastName} = obj;
 console.log(firstName);
 console.log(lastName);
 const {firstName: a, lastName: b} = obj;
 console.log(a);
 console.log(b);

 function calcAgeRetirement(year) {
 const age = new Date().getFullYear() - year;
 return [age, 65 - age];
 }

 const [age, retirement] = calcAgeRetirement(1990);
 console.log(age);
 console.log(retirement);
 */
/*
 const boxes = document.querySelectorAll('.box');
 // console.log(boxes);

 //  ES5
 var boxesArr5 = Array.prototype.slice.call(boxes);
 // console.log(boxesArr5);
 boxesArr5.forEach(function (cur) {
 cur.style.background = 'dodgerblue';
 });

 //  ES6
 const boxesArr6 = Array.from(boxes);
 Array.from(boxes).forEach(cur => cur.style.background = `dodgerblue`);

 //  ES5
 for (var i = 0; i < boxesArr5.length; i++) {
 if ( boxesArr5[i].className === `box blue` ) {
 continue;
 }
 boxesArr5[i].textContent = 'I Changes To Blue!';
 }*/
/*
 //  ES6
 for (const cur of boxesArr6) {
 if ( cur.className.includes('blue') ) {
 continue;
 }
 cur.textContent = `I Changes To Blue!`;
 }

 //  ES5
 var ages = [12, 17, 8, 21, 14, 11];
 var full = ages.map(function (cur) {
 return cur >= 18;
 });
 console.log(full);
 console.log(full.indexOf(true));
 console.log(ages[full.lastIndexOf(true)]);

 //  ES6
 console.log(ages.findIndex(cur => cur >= 18));
 console.log(ages.find(cur => cur >= 18));
 */
/*
 //  Spread Operator
 function addFourAges(a, b, c, d) {
 return a + b + c + d;
 }

 var sum1 = addFourAges(18, 30, 12, 21);
 console.log(sum1);

 //  ES5
 var ages = [18, 30, 12, 21];
 var sum2 = addFourAges.apply(null, ages);
 console.log(sum2);

 // ES6
 const sum3 = addFourAges(...ages);
 console.log(sum3);
 const familySmith = ['John', 'Jane', 'Mark'];
 const familyMiller = ['Mary', 'Bob', 'Ann'];
 const bigFamily = [...familySmith, 'Lilly', ...familyMiller];
 console.log(bigFamily);

 const h = document.querySelector(`h1`);
 const boxes = document.querySelectorAll('.box');
 const all = [h, ...boxes];
 Array.from(all).forEach(cur => cur.style.color = `purple`);
 console.log(all);*/

//  Rest parameters

/*
 //  ES5
 function isFullAge5() {
 // console.log(arguments);
 var argsArr = Array.prototype.slice.call(arguments);
 argsArr.forEach(function (cur) {
 console.log((2016 - cur) >= 18);
 });
 }

 isFullAge5(1990, 1999, 1965);
 isFullAge5(1990, 1999, 1965, 2016, 1987);

 //  ES6
 function isFullAge6(...years) {
 years.forEach(cur => console.log((2016 - cur) >= 18));
 }

 isFullAge6(1990, 1999, 1965, 2016, 1987);

 //  ES5
 function isFullAge5(limit) {
 var argsArr = Array.prototype.slice.call(arguments, 1);
 argsArr.forEach(function (cur) {
 console.log((2016 - cur) >= limit);
 });
 }

 isFullAge5(16, 1990, 1999, 1965);
 // isFullAge5(1990, 1999, 1965, 2016, 1987);

 //  ES6
 function isFullAge6(limit, ...years) {
 years.forEach(cur => console.log((2016 - cur) >= limit));
 }

 isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
 */

//  Default Parameter

/*
 //ES5
 function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
 lastName === undefined ? lastName = 'Smith' : lastName;
 nationality === undefined ? nationality = 'American' : nationality;
 this.firstName = firstName;
 this.lastName = lastName;
 this.yearOfBirth = yearOfBirth;
 this.nationality = nationality;
 }

 var john = new SmithPerson('John', 1990);
 console.log(john);
 var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
 console.log(emily);

 // ES6
 function SmithPerson(firstName, yearOfBirth, lastName = `Smith`, nationality = `American`) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.yearOfBirth = yearOfBirth;
 this.nationality = nationality;
 }

 const john = new SmithPerson('John', 1990);
 const emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

 console.log(john);

 console.log(emily);
 */

/*//  Maps

 const question = new Map();
 question.set(`question`, `What's The Official Name Of The Latest Major JavaScript Version?`);
 question.set(1, `ES5`);
 question.set(2, `ES6`);
 question.set(3, `ES2015`);
 question.set(4, `ES7`);
 question.set(`correct`, 3);
 question.set(true, `correct Answer :D`);
 question.set(false, `Wrong, Please Try Again`);

 // console.log(question);
 // console.log(question.get(`question`));
 // console.log(question.size);
 if ( question.has(4) ) {
 // console.log(`Answer 4 Is Here`);
 }
 // question.forEach((value, key) => console.log(`This Is '${key}', And It's Set To ${value}`));
 for (let [key, value] of question.entries()) {
 if ( typeof (key) === 'number' ) {
 console.log(`Answer ${key}: ${value}`);
 }
 }
 const ans = parseInt(prompt(`Write The Correct Answer`));
 console.log(question.get(ans === question.get(`correct`)));*/

/*//  Classes

 //  ES5
 var Person5 = function (name, yearOfBirth, job) {
 this.name = name;
 this.yearOfBirth = yearOfBirth;
 this.job = job;
 };
 Person5.prototype.calculateAge = function () {
 var age = new Date().getFullYear() - this.yearOfBirth;
 console.log(age);
 };
 var john5 = new Person5('John', 1990, 'Teacher');

 //  ES6
 class Person6 {
 constructor(name, yearOfBirth, job) {
 this.name = name;
 this.yearOfBirth = yearOfBirth;
 this.job = job;
 }

 calculateAge() {
 const age = new Date().getFullYear() - this.yearOfBirth;
 console.log(age);
 }

 static greeting() {
 console.log(`Hey There!`);
 }
 }

 const john6 = new Person6(`John`, 1990, `Teacher`);
 console.log(john5);
 console.log(john6);
 Person6.greeting();*/

//  Classes And Subclasses

/*
 // ES5

 var Person5 = function (name, yearOfBirth, job) {
 this.name = name;
 this.yearOfBirth = yearOfBirth;
 this.job = job;
 };
 Person5.prototype.calculateAge = function () {
 var age = new Date().getFullYear() - this.yearOfBirth;
 console.log(age);
 };
 var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
 Person5.call(this, name, yearOfBirth, job);
 this.olympicGames = olympicGames;
 this.medals = medals;
 };

 Athlete5.prototype = Object.create(Person5.prototype);
 Athlete5.prototype.wonMedal = function () {
 this.medals++;
 console.log(this.medals);
 };
 var johnAthlete5 = new Athlete5('john', 1990, 'Swimmer', 3, 10);

 console.log(johnAthlete5);
 johnAthlete5.calculateAge();
 johnAthlete5.wonMedal();

 //  ES6
 class Person6 {
 constructor(name, yearOfBirth, job) {
 this.name = name;
 this.yearOfBirth = yearOfBirth;
 this.job = job;
 }

 calculateAge() {
 const age = new Date().getFullYear() - this.yearOfBirth;
 console.log(age);
 }
 }

 class Athlete6 extends Person6 {
 constructor(name, yearOfBirth, job, olympicGames, medals) {
 super(name, yearOfBirth, job);
 this.olympicGames = olympicGames;
 this.medals = medals;
 }

 wonMedal() {
 this.medals++;
 console.log(this.medals);
 }
 }

 const johnAthlete6 = new Athlete6(`John`, 1990, `Swimmer`, 3, 10);
 johnAthlete6.wonMedal();
 johnAthlete6.calculateAge();
 console.log(johnAthlete6);
 */

// CODING CHALLENGE

/*

 Suppose that you're working in a small town administration, and you're in charge of two town elements:
 1. Parks
 2. Streets

 It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

 At an end-of-year meeting, your boss wants a final report with the following:
 1. Tree density of each park in the town (forumla: number of trees/park area)
 2. Average age of each town's park (forumla: sum of all ages/number of parks)
 3. The name of the park that has more than 1000 trees
 4. Total and average length of the town's streets
 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

 All the report data should be printed to the console.

 HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

 */


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = (this.numTrees / this.area).toFixed(2);
        console.log(`${this.name} Has A Tree Density Of ${density} Tree Per Square KM.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, `tiny`);
        classification.set(2, `Small`);
        classification.set(3, `Normal`);
        classification.set(4, `Big`);
        classification.set(5, `Huge`);
        console.log(`${this.name}, Built In ${this.buildYear}, Is A ${classification.get(this.size)} Street.`);
    }
}

const allParks = [
    new Park(`Green Park`, 1987, 0.2, 215),
    new Park(`National Park`, 1894, 2.9, 3541),
    new Park(`Oak Park`, 1953, 0.4, 949)
];

const allStreets = [
    new Street(`Ocean Avenue`, 1999, 1.1, 4),
    new Street(`Evergreen Street`, 2008, 2.7, 2),
    new Street(`4th Street`, 2015, 0.8),
    new Street(`Sunset Boulevard`, 1982, 2.5, 5)
];

//  Average Calculator
function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log(`------------PARKS REPORT------------`);

    //  Density
    p.forEach(el => el.treeDensity());

    //  Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [avgAge] = calc(ages);
    console.log(`Our ${p.length} Has An Average Of ${avgAge.toFixed(2)} Years.`);

    //  Which Park Has More 3000 Trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} Has More Than 1000 Trees`);
}


function reportStreets(s) {
    console.log(``);
    console.log(`------------STREETS REPORT------------`);

    //  Total And Average Length Of The Town's Streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} Streets Has A Total Length Of ${totalLength.toFixed(2)}km, With Average Of ${avgLength.toFixed(2)}km.`);

    //  Classify Sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
