let email = 'alex@xxx.com';

let index = email.lastIndexOf('@');
console.log(index);

// slice - section from the string from position in first parameter to position in second parameter 
let sliceResult = email.slice(1, index);
console.log(sliceResult);

// substr - section from string from position in first parameter to number of second parameter
let substrResult = email.substr(1, index);
console.log(substrResult);

// replace only first experession
let replaceResult = email.replace('l','p');
console.log(replaceResult);