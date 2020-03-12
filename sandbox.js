let age = 25;

// loose comparison (different types can still be equal)
console.log('loose', age == 25);
console.log('loose', age == '25');
console.log('loose', age != 25);
console.log('loose', age != '25');

// strict comparison (different tyeps cannot be equal)
console.log('strict', age === 25);
console.log('strict', age === '25');
console.log('strict', age !== 25);
console.log('strict', age !== '25');