console.log('hello. world!')

let email = 'alex@xxx.com';
console.log(email);

let firstName = 'Brandon';
let lastName = 'Sanderson';

// string concatination
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName[2]);

// use functions
console.log(fullName.length);

// use methods
console.log(fullName.toUpperCase());

let result = fullName.toLocaleLowerCase();
console.log(result, fullName);

let index = email.indexOf('xxx');
console.log(index);