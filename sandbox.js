console.log(true, false, 'true', 'false');

// methods can return booleans
let email = 'alex@xxx.com';
let names = ['mario', 'luigi', 'toad'];

let result1 = email.includes('@');
let result2 = names.includes('browser');
console.log(result1);
console.log(result2);

//comparison operators 
let age = 25;
console.log('number comparisons');
console.log(age == 25);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'alex';
console.log('string comparisons');
console.log(name == 'alex');
console.log(name == 'Alex');
console.log(name > 'crystal');
console.log(name > 'Alex');
console.log(name > 'Crystal');