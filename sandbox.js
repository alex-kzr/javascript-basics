let ninjas = ['alex', 'ryu', 'chun-li'];
ninjas[1] = 'ken';
console.log(ninjas);
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['alex','crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods
let result = ninjas.join('-');
console.log(result);

let index = ninjas.indexOf('chun-li');
console.log(index); 

let concatResult = ninjas.concat(['mario','crystal']);
console.log(concatResult);

let pushResult = ninjas.push('mario');
console.log(pushResult, ninjas);

let popResult = ninjas.pop();
console.log(popResult, ninjas);