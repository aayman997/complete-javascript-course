/*
 let firstName = 'John';
 console.log(firstName);
 let lastName = 'Smith';
 let age = 28;
 let fullAge = false;
 let job = 'Teacher';

 console.log(`${typeof firstName}
 ${typeof lastName}
 ${typeof age}
 ${typeof fullAge}
 ${typeof job}`);
 console.log(firstName + ' ' + lastName + ' Is ' + age + ' Years Old' + ', He Is A ' + job);
 let enteredLastName = prompt('what Is John\'s Last Name');
 console.log(firstName + ' ' + enteredLastName + ' Is ' + age + ' Years Old' + ', He Is A ' + job);

 * Basic Operators

 let now, yearJohn, yearMike, x;
 now = 2018;
 ageJohn = 28;
 ageMike = 33;

 // Math Operator
 yearJohn = now - 18;
 yearMike = now - 33;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);
 // Logical Operator
 let johnOlder = ageJohn < ageMike;
 console.log(johnOlder);

 console.log(typeof johnOlder);

 console.log(2 ** 3);

 * Operator Precedence
 * *!/
 let now = 2018;
 let yearJohn = 1989;
 let fullAge = 18;

 // Multiple Operator
 let isFullAge = now - yearJohn > fullAge;
 console.log(isFullAge);

 // Grouping
 let ageJohn = now - yearJohn;
 let ageMike = 35;
 let average = (ageJohn + ageMike) / 2;

 console.log(average);

 // Multiple Assignment
 let x, y;
 x = y = (3 + 5) * 4 - 6;  //    8 * 4 -6    // 32 - 6   // 26
 console.log(x);
 console.log(y);

 // More Operator
 x *= 2;
 console.log(x);

 //  Coding Challenge #1
 let mikeMass = 78;
 let mikeHeight = 1.69;
 let mikeBMI = mikeMass / (mikeHeight * mikeHeight);


 let johnMass = 92;
 let johnHeight = 1.95;
 let johnBMI = johnMass / (johnHeight * johnHeight);

 console.log('mike BMI = ' + mikeBMI);
 console.log('John BMI = ' + johnBMI);

 console.log(mikeBMI > johnBMI);




 //  If / else Statements

 let firstName = 'John';
 let civilStatus = 'Single';

 if (civilStatus === 'married') {
 console.log(firstName + ' Is Married');
 } else {
 console.log(firstName + ' Is Single');
 }

 let isMarried = true;
 if (isMarried) {
 console.log(firstName + ' Is Married');
 } else {
 console.log(firstName + ' Is Single');
 }

 //  Boolean Logic
 let firstName = 'John';
 let age = 20;

 if ( age < 13 ) {
 console.log(firstName + ' Is A Boy.');
 } else if ( age >= 13 && age < 20 ) {
 console.log(firstName + ' Is A Teenager.');
 } else if ( age >= 20 && age < 30 ) {
 console.log(firstName + ' Is A Young Man.');

 } else {
 console.log(firstName + ' Is A Man.');
 }
 //  The Ternary Operator & Switch Statements

 //  The Ternary Operator
 let firstName = 'John';
 let age = 16;

 age >= 18 ? console.log(firstName + ' Drinks Beer.') : console.log(firstName + ' Drinks Juice.');

 let drink = age >= 18 ? 'beer' : 'Juice';
 console.log(drink);


 //  Switch Statements
 let job = 'teacher';

 switch (job) {
 case 'teacher':
 console.log(firstName + ' Teaches Kids How To Code.');
 break;
 case 'driver':
 console.log(firstName + ' Drives An Uber In lisbon.');
 break;
 case 'designer':
 console.log(firstName + ' Designs Beautiful Websites.');
 break;
 default:
 console.log(firstName + ' Does Something Else');
 }

 switch (true) {
 case  age < 13:
 console.log(firstName + ' He Is A Boy.');
 break;
 case  age >= 13 && age < 20:
 console.log(firstName + ' He Is A Teenager.');
 break;
 case  age >= 20 && age < 30:
 console.log(firstName + ' He Is A Young Man.');
 break;
 default:
 console.log(firstName + ' Is A Man.');
 }


 //  Truthy and Falsy Values and Equality Operators

 //  Falsy Values: undefined, null, 0, "", NaN

 let height;
 height = 0;
 if ( height || height === 0 ) {
 console.log('Defined');
 } else {
 console.log('Not Defined');
 }

 //   Coding Challenge #2

 let scoreJohn = (89 + 120 + 103) / 3;
 let scoreMike = (119 + 94 + 123) / 3;
 let scoreMary = (97 + 134 + 105) / 3;
 console.log('John\'s Team Wins Average: ' + scoreJohn + ',Mike\'s Team Wins Average: ' + scoreMike + ',Mary\'s Team Wins Average: ' + scoreMary);

 if ( scoreJohn > scoreMike && scoreJohn > scoreMary ) {
 console.log('John\'s Team Wins More Than Mike\'s Team And Mary\'s Team');
 } else if ( scoreMike > scoreJohn && scoreMike > scoreMary ) {
 console.log('Mike\'s Team Wins More Than John\'s Team And Mary\'s Team');
 } else if ( scoreMary > scoreJohn && scoreMary > scoreMike ) {
 console.log('Mary\'s Team Average Wins More Than John\'s Team Average And Mike\'s Team Average');
 } else {
 console.log('There Is A Draw');
 }

 //  Functions

 function calculateAge(birthYear) {
 return 2018 - birthYear;
 }

 let ageJohn = calculateAge(1990);
 let ageMike = calculateAge(1948);
 let ageJane = calculateAge(1969);

 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName) {
 let age = calculateAge(year);
 let retirement = 65 - age;
 if ( retirement > 0 ) {
 console.log(firstName + ' Retires In ' + retirement + ' Years.');
 } else {
 console.log(firstName + ' Already Retired ' + retirement * -1 + ' Years Age');
 }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');


 //  Function Statements And Expressions
 let whatDoYouDo = function (job, firstName) {
 switch (job) {
 case 'teacher':
 return firstName + ' Teaches Kids How To Code.';
 case 'driver':
 return firstName + ' Drives a Cab In Lisbon';
 case 'designer':
 return firstName + ' Designs Beautiful Websites';
 default:
 return firstName + ' Does Something Else';
 }
 };

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mike'));


 //  Arrays

 let names = ['John', 'Mark', 'Jane'];
 let years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 //  Muted Array Data
 names[1] = 'Ben';
 names[names.length] = 'Marry';
 console.log(names);

 //  Different Data Type
 let john = ['John', 'Smith', 1990, 'designer', false];
 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(23));
 let isDesigner = john.indexOf('designer') === -1 ? 'John Is not A Designer' : 'John Is A Designer';

 console.log(isDesigner);


 //  Coding Challenge #3

 function tipCalc(billAmount) {
 let percentage;
 if ( billAmount < 50 ) {
 percentage = 0.2;
 } else if ( billAmount >= 50 && billAmount < 200 ) {
 percentage = 0.15;
 } else {
 percentage = 0.1;
 }
 return percentage * billAmount;
 }

 let bills = [124, 48, 268];
 let tips = [
 tipCalc(bills[0]),
 tipCalc(bills[1]),
 tipCalc(bills[2])
 ];
 let totalPayed = [
 bills[0] + tips[0],
 bills[1] + tips[1],
 bills[2] + tips[2]
 ];

 console.log(bills);
 console.log(tips);
 console.log(totalPayed);

 //  Objects

 let john = {
 firstName: 'John',
 lastName: 'Smith',
 birthYear: 1990,
 family: ['Jane', 'Mark', 'Bob', 'Emily'],
 job: 'Teacher',
 isMarried: false
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 let x = 'birthYear';
 console.log(john[x]);

 //  Objects And Methods

 let john = {
 firstName: 'John',
 lastName: 'Smith',
 birthYear: 1990,
 family: ['Jane', 'Mark', 'Bob', 'Emily'],
 job: 'Teacher',
 isMarried: false,
 calcAge: function (birthYear) {
 this.age = 2018 - this.birthYear;
 }
 };

 john.calcAge();

 console.log(john);

 //  Coding Challenge #4

 let john = {
 name: 'John Smith',
 mass: 110,
 height: 1.95,
 calcBMI: function () {
 this.bmi = this.mass / (this.height * this.height);
 return this.bmi;
 }
 };

 let mark = {
 name: 'Mark Miller',
 mass: 78,
 height: 1.69,
 calcBMI: function () {
 this.bmi = this.mass / (this.height * this.height);
 return this.bmi;
 }
 };

 console.log(mark);
 console.log(john);

 if ( john.calcBMI() > mark.calcBMI() ) {
 console.log(john.name + '\'s BMI Is Greater Than ' + mark.name + '\'s BMI');
 } else if ( mark.calcBMI() > john.calcBMI() ) {
 console.log(mark.bmi + '\'s BMI Is Greater Than ' + john.name + '\'s BMI');
 } else {
 console.log('Draw');
 }

 //   Loops And Iteration

 //  For Loop

 for (let i = 1; i <= 20; i += 2) {
 console.log(i);
 }

 let john = ['John', 'Smith', 1990, 'Designer', false];

 for (let i = 0; i < john.length; i++) {
 console.log(john[i]);
 }
 //  While Loop
 let i = 0;
 while (i < john.length) {
 console.log(john[i]);
 i++;
 }
 //  Continue And Break Statements

 let john = ['John', 'Smith', 1990, 'Designer', false, 'BLue'];

 for (let i = 0; i < john.length; i++) {
 if ( typeof john[i] !== 'string' ) continue;
 console.log('String: ' + john[i]);
 }
 for (let i = 0; i < john.length; i++) {
 if ( typeof john[i] ) break;
 console.log('Init' + john[i]);
 }

 for (let i = john.length - 1; i >= 0; i--) {
 console.log(john[i]);
 }

 //  Coding Challenge #5

 let john = {
 name: 'John Smith',
 bills: [124, 48, 268, 180, 42],
 tipsCalc: function () {
 this.tips = [];
 this.finalAmount = [];

 for (let i = 0; i < this.bills.length; i++) {
 let percentage;
 let bill = this.bills[i];
 if ( bill < 50 ) {
 percentage = 0.2;
 } else if ( bill >= 50 && bill < 200 ) {
 percentage = 0.15;
 } else if ( bill >= 200 ) {
 percentage = 0.1;
 }

 this.tips[i] = bill * percentage;
 this.finalAmount[i] = bill + bill * percentage;
 }
 }
 },
 mark = {
 name: 'Mark Miller',
 bills: [77, 475, 110, 45],
 tipsCalc: function () {
 this.tips = [];
 this.totalAmount = [];

 for (let i = 0; i < this.bills.length; i++) {
 let percentage,
 bill = this.bills[i];
 if ( bill < 100 ) {
 percentage = 0.2;
 } else if ( bill >= 100 && bill < 300 ) {
 percentage = 0.1;
 } else if ( bill >= 300 ) {
 percentage = 0.25;
 }
 this.tips[i] = bill * percentage;
 this.totalAmount = bill + bill * percentage;
 }
 }
 };

 function calcAverage(tips) {
 let sum = 0;
 for (let i = 0; i < tips.length; i++) {
 sum = sum + tips[i];
 }
 return sum / tips.length;
 }

 john.tipsCalc();
 mark.tipsCalc();

 john.average = calcAverage(john.tips);
 mark.average = calcAverage(mark.tips);

 if ( john.average > mark.average ) {
 console.log(john.name + '\'s family pays higher tips, with an average of $' + john.average);
 } else if ( mark.average > john.average ) {
 console.log(mark.name + '\'s family pays higher tips, with an average of $' + mark.average);
 }

 */
