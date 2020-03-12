let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);

let divByModResult = radius % 3;
console.log(divByModResult);

let raiseToPowerResult = pi * radius**2;
console.log(raiseToPowerResult);

// order of operation - B I D M A S
let bidmasResult = 5 * (10-3)**2;
console.log(bidmasResult);

let likes = 10;
likes = likes + 1;
likes++;
likes+=10;
likes-=5;
likes*=4;
likes/=2;
console.log(likes);

// NAN - not a number
console.log(5/ 'hello');
console.log(5 * 'hello');

let stringResult = 'the blog has ' + likes + ' likes';
console.log(stringResult);